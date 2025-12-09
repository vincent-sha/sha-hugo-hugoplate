---
language: zh-cn
title: Strapi项目结构
slug: strapi-project-structure
date: 2025-12-09T14:05:00.000+08:00
description: 详细说明 Strapi 应用的默认项目结构，指出使用 TypeScript或原生 JavaScript
  时的区别，并对各个常见目录/文件做简要说明，方便快速上手与定位源码位置。
image: /images/strapi-cover.webp
categories:
  - 技术教程
tags:
  - 后端
  - strapi
  - 项目结构
author: 文森
draft: false
---
# 项目结构

Strapi 项目的目录结构取决于你是在创建时选择了 TypeScript（如果使用 `--quickstart`，通常会默认使用 TypeScript）还是使用原生 JavaScript。下面给出常见的项目树示例与各目录的说明，便于在项目中快速定位代码与配置。

## 快速创建（示例）

```bash
# 使用 npx 创建（示例）
npx create-strapi-app my-project --quickstart

```

> 如果使用 --quickstart，创建器通常会为你选择 TypeScript 配置（视 Strapi 版本而定）。
> 

---

## 默认目录示例（TypeScript 项目）

```
my-project/
├─ node_modules/
├─ build/                 # 管理后台打包输出（admin build）
├─ public/                # 静态资源
├─ src/
│  ├─ api/                # 各 content-type 对应的 API（controllers/services/routes）
│  ├─ components/         # 可复用组件（组件式 content types）
│  ├─ plugins/            # 本地插件
│  ├─ middlewares/        # 中间件（如有）
│  └─ index.ts            # 启动/导出相关（TS 项目常见）
├─ config/                # 全局配置（database、server、plugins 等）
├─ .env                   # 环境变量（本地）
├─ package.json
├─ tsconfig.json          # TypeScript 配置
├─ README.md
└─ .gitignore

```

## 默认目录示例（JavaScript 项目）

```
my-project/
├─ node_modules/
├─ build/
├─ public/
├─ src/
│  ├─ api/
│  ├─ components/
│  ├─ plugins/
│  └─ index.js            # JS 项目入口通常为 .js
├─ config/
├─ .env
├─ package.json
├─ README.md
└─ .gitignore

```

---

## 常见目录/文件说明

- node_modules/: 第三方依赖。
- build/: Strapi 管理后台（admin panel）的打包产物（可忽略/可添加到 .gitignore，或在 CI 中重建）。
- public/: 静态文件目录（上传文件的公开访问目录或公共资源）。
- src/api/: 每个 content-type（内容类型）的实现所在，通常包含 controllers、services、routes、content-types 配置等。
- src/components/: 可复用的 content type 片段（组件）。
- src/plugins/: 本地自定义插件的代码。
- config/: 全局配置项（数据库、服务器、插件配置等），可按环境拆分（例如 config/database.js / config/server.js 或对应的 .ts）。
- .env / .env.example: 环境变量配置。
- package.json: 项目依赖与脚本，如 `build`, `develop` 等。
- tsconfig.json: TypeScript 项目特有，定义编译选项和路径别名等。

---

## 与原文交互式结构对应

原文中使用了一个交互式组件（InteractiveProjectStructure）来可视化项目结构。在本笔记中已用静态目录树替代，便于直接复制到 Notion 或本地笔记中阅读。如需更详细、可交互的视图，请在官方文档页面查看或打开对应的交互式演示。

## 参考

- TypeScript 指南（官方）：/cms/typescript

若需，我可以将示例目录展开为更细化的每个 content-type 或插件的常见文件结构示例（包含 controller/service/route 的样板代码）。
