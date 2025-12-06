# 将 Hugo 站点从 Cloudflare Workers 迁移到 Cloudflare Pages 操作指南

> 适用场景：现有站点为 Hugo 构建，静态产物位于 `public/`，之前通过 Workers/Workers Assets 部署。目标是改用 Cloudflare Pages 静态托管。

## 0. 前提检查
- 本地已能运行 `hugo --gc --minify` 并在 `public/` 产出静态文件。
- 仓库默认分支为 `main`（如不同，请在步骤中改成实际分支）。
- 当前域名为 `vincent-blog.top`，`baseURL` 在 `hugo.toml` 中已指向该域名。如需要先在 Pages 预览域名上测试，可临时改 baseURL 或在构建命令中覆盖 `--baseURL https://<your>.pages.dev`。

## 1. Cloudflare Pages 新建项目
1) 登录 Cloudflare 控制台 → Pages & Workers → Pages。
2) 选择 **Create a project** → 绑定当前 Git 仓库 `vincent-sha/sha-hugo-hugoplate`。
3) 构建设置：
   - Build command: `hugo --gc --minify`
   - Output directory: `public`
   - Install command: 可留空；如需 Node 依赖，填 `yarn install --frozen-lockfile || npm ci`。
4) 点击保存并部署，等待首个构建完成。

## 2. Pages 环境变量（Dashboard → Settings → Environment variables）
- `HUGO_VERSION`：填 `0.151.0`（本项目当前使用的 Hugo extended 版本）。
- `HUGO_ENV`：`production`
- `HUGO_ENABLEGITINFO`：`true`（如需 Git 信息）
- `GO_VERSION`：`1.21.0`（与 `go.mod` 一致，保证模块下载）
- `TZ`：`Asia/Shanghai`（可选，匹配站点时区）

> 如需升级 Hugo：先在本地切换到目标版本验证构建与主题兼容，再同步更新 `.devcontainer`/CI 脚本中的版本号，最后修改 Pages 环境变量中的 `HUGO_VERSION` 并重跑构建。

## 3. 重定向与 404
- 项目已有 `_redirects`，Cloudflare Pages 原生支持 Netlify 风格规则，无需额外改动。
- 404：Hugo 已生成 `public/404.html`，Pages 会自动使用。

## 4. 自定义域名绑定
1) Pages 首次部署会生成 `<project>.pages.dev` 预览域名，先验证页面正常。
2) 绑定自定义域 `vincent-blog.top`：在 Pages → Custom domains 中添加该域。
3) DNS：在 Cloudflare DNS 为根域名创建 CNAME 到 Pages 提供的目标（或按提示设置），生效后用 HTTPS 访问验证。

## 5. 下线旧 Worker
- Cloudflare 控制台 → Workers & Routes，删除指向 `vincent-blog.top/*` 的 Worker 路由，避免与 Pages 冲突。
- 如不再需要 Worker，删除对应 Worker 脚本；也可保留备份但不要配置路由。

## 6. 代码仓库可选清理
- `.gitignore` 中加入 `public/`，避免提交构建产物。（如果历史已提交，可后续清理并提交一次。）
- `wrangler.toml`：迁移完成后可删除或留下注释，避免误用 Workers。

## 7. CLI 备选（不走 Git 集成）
1) 本地构建：`hugo --gc --minify`
2) 首次创建 Pages 项目（如未创建）：`wrangler pages project create sha-hugo-hugoplate`
3) 部署：`wrangler pages deploy public --project-name sha-hugo-hugoplate --branch main`

## 8. 验证清单
- Pages 预览域名与自定义域均可正常访问，样式/图片/搜索等功能正常。
- 404 页面正确展示。
- 重定向规则按 `_redirects` 生效。
- 若使用 PWA/Service Worker，确认更新后的文件被正确缓存/刷新。

## 9. 常见问题
- **Hugo 版本不匹配导致构建失败**：确认 `HUGO_VERSION` 为 extended 版且与本地一致。
- **Go modules 下载超时或版本不符**：在环境变量指定 `GO_VERSION`，并确保仓库可访问。
- **baseURL 指向旧域名**：可在构建命令添加 `--baseURL` 临时覆盖，或在 `hugo.toml` 更新为新域名。

完成以上步骤后，站点即完成从 Workers 到 Pages 的迁移与上线。
