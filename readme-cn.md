# Hugoplate：基于Hugo和Tailwind CSS的免费启动模板和样板

[Hugoplate GitHub 仓库](https://github.com/zeon-studio/hugoplate)

---

![Hugo版本](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.151.0&color=f00&logo=hugo)
![MIT许可证](https://img.shields.io/github/license/zeon-studio/hugoplate)
![代码大小](https://img.shields.io/github/languages/code-size/zeon-studio/hugoplate)
![贡献者](https://img.shields.io/github/contributors/zeon-studio/hugoplate)

---

## 介绍

Hugoplate 是由 [Zeon Studio](https://zeon.studio/) 开发的一个免费开源启动模板，结合了 Hugo 静态网站生成器和 Tailwind CSS v4.0，提供了一个功能丰富且易于定制的前端样板，帮助用户快速启动 Hugo 项目，提升开发效率。

如果您觉得此项目有用，欢迎给予 ⭐ 支持！

[🌐 在线演示](https://zeon.studio/preview?project=hugoplate) | [🚀 页面速度测试（95+）](https://pagespeed.web.dev/analysis/https-hugoplate-netlify-app/6lyxjw6t4r?form_factor=desktop)

---

## 主要功能

- 👥 多作者支持
- 🎯 相关文章推荐
- 🔍 搜索功能
- 🌑 暗黑模式
- 🏷️ 标签与分类
- 🔗 预配置 Netlify 部署设置
- 📞 联系表单支持
- 📱 完全响应式设计
- 📝 以 Markdown 格式编写和更新内容
- 💬 集成 Disqus 评论
- 🔳 代码语法高亮

---

## 预设页面（15+）

- 🏠 首页
- 👤 关于页面
- 📞 联系页面
- 👥 作者列表
- 👤 作者详情页
- 📝 博客列表
- 📝 博客详情页
- 🚫 自定义 404 页面
- 💡 元素页面
- 📄 隐私政策
- 🏷️ 标签列表与详情页
- 🗂️ 分类列表与详情页
- 🔍 搜索页

---

## 技术栈

- [Hugo](https://gohugo.io/)
- [Tailwind CSS v4.0](https://tailwindcss.com/)
- [AutoPrefixer](https://autoprefixer.github.io/)
- [Hugo Modules](https://gohugo.io/hugo-modules/)（由 [Gethugothemes](https://gethugothemes.com/hugo-modules) 提供支持）
- [Markdown](https://markdownguide.org/)
- [Prettier](https://prettier.io/)
- [Jshint](https://jshint.com/)
- 部署平台支持：Netlify、Vercel、GitHub Actions、GitLab CI、AWS Amplify

---

## 快速开始

1. 克隆或下载模板仓库：

```bash
git clone https://github.com/zeon-studio/hugoplate.git
```

或者直接下载 ZIP 包。

2. 安装先决条件：

- Hugo Extended v0.144+
- Node.js v22+
- Go v1.24+

3. 设置项目（自动创建主题文件夹并移动示例站点）：

```bash
npm run project-setup
```

4. 安装依赖：

```bash
npm install
```

5. 启动开发服务器：

```bash
npm run dev
```

6. 如果需要，查看快速入门视频演示：

> [hugoplate-quick-setup.mp4](链接地址请在项目中查找)

---

## 自定义配置

- **站点配置**：编辑 `hugo.toml` 文件，修改站点标题、基础 URL、语言、主题等。
- **参数配置**：在 `config/_default/params.toml` 中调整 logo、favicon、搜索设置、SEO 元数据等。
- **颜色与字体**：通过修改 `data/theme.json` 文件中的主色、辅色、字体族和字体大小来定制样式。
- **社交链接**：编辑 `data/social.json` 文件，自动显示社交媒体链接。

---

## 进阶功能

- 更新主题：

```bash
npm run update-theme
```

- 更新所有模块：

```bash
npm run update-modules
```

- 移除暗黑模式：

```bash
npm run remove-darkmode
```

> 注意：移除暗黑模式命令需在执行 `project-setup` 前运行，或先运行 `npm run theme-setup`。

---

## 构建与部署

- 本地构建命令：

```bash
npm run build
```

- 支持多平台部署配置：

  - [Netlify](https://www.netlify.com/)
  - [Vercel](https://vercel.com/)
  - [GitHub Actions](https://github.com/features/actions)
  - [GitLab CI](https://docs.gitlab.com/ee/ci/)
  - [AWS Amplify](https://aws.amazon.com/amplify/)

- 你也可以将构建后的 `public` 文件夹内容部署到任何静态服务器。

- 记得根据实际部署更改 `hugo.toml` 中的 `baseURL`。

---

## 反馈与许可

- 遇到问题请先搜索已有的 [issues](https://github.com/zeon-studio/hugoplate/issues)，如无相关可新建 issue。
- 代码采用 [MIT 许可证](https://github.com/zeon-studio/hugoplate/blob/main/LICENSE) 许可。
- 演示图片仅用于展示，版权归属原作者。

---

## 项目展示

欢迎查看并提交使用 Hugoplate 构建的项目案例：[Hugoplate Showcase](https://github.com/zeon-studio/hugoplate/discussions/207)

---

## 定制服务

如需定制主题、主题修改或网站开发服务，请访问：[Zeon Studio 定制服务](https://zeon.studio/estimate-project)

---

© 2025 Zeon Studio & Hugo Community

