---
language: zh-cn
title: Strapi 快速入门指南
slug: strapi-quick-start-guide
date: 2025-12-09T14:02:00.000+08:00
description: 本快速入门指南带你在本地用 Strapi 创建一个项目、通过 Content-Type Builder 构建内容模型、将项目部署到
  Strapi Cloud，并在云端使用 Content Manager 添加与发布内容。适合想在 5–10 分钟内上手 Strapi
  的开发者，包含逐步命令、界面截图与示例 API 响应。
image: /images/strapi-cover.webp
categories:
  - 技术教程
tags:
  - 后端
  - strapi
  - 入门
author: 文森
draft: false
---
# Strapi 快速入门指南（Quick Start Guide）

Strapi 提供高度灵活性。无论你想快速看到最终效果，还是深入定制产品，本指南都能覆盖你的需求。我们采用动手式流程：从本地创建项目与内容结构开始，再将项目部署到 Strapi Cloud 并从云端添加数据。

- 预计完成时间：5–10 分钟

---

## 前置条件（Prerequisites）

在开始之前，请确保你已满足如下环境与工具：

- Node.js、npm 或 Yarn（参见 Strapi 安装说明）
- 本地数据库（SQLite 在本地开发时通常默认可用）
- 已安装 git：安装指南：https://github.com/git-guides/install-git
- 一个 GitHub 账号（用于在部署到 Strapi Cloud 时登录）

（安装先决条件的详细说明可参考官方安装片段与文档）

---

## A 部分：在本地创建新的 Strapi 项目

我们首先在本地通过终端命令创建一个 Strapi 项目，并注册第一个本地管理员用户。

以下步骤包含可展开的详细说明：

### 步骤 1：运行安装脚本并创建 Strapi Cloud 账号

在终端中运行下面命令来创建项目：

```bash
npx create-strapi@latest my-strapi-project

```

执行命令后：

1. 终端会提示你登录或注册（Login/Sign up）。请在终端选择 `Login/Sign up` 并回车。
2. 浏览器会打开一个新标签页，确认终端显示的验证码与浏览器一致后，点击 **Confirm**。
3. 浏览器上选择 **Continue with GitHub** 登录（若尚未在当前浏览器登录 GitHub，会跳转到 GitHub 登录页）。
4. 完成后，页面会显示 “Congratulations, you're all set!”（可以关闭该浏览器标签页，返回终端）。

> 安装时会自动为项目应用一个 30 天的 Growth 试用（包含 Live Preview、Releases 与 Content History 等功能）。
> 

终端接着会询问一系列问题。按 `Enter` 接受默认值即可。项目将开始在本地构建。

![qsg-cloud-login.gif](attachment:52ffd3cd-a6c5-4405-a3b4-7b89ebbc23ad:qsg-cloud-login.gif)

![qsg-questions-answers-terminal-c55811739139a388f378b5d0ddfec035.png](attachment:b977daac-a40c-4b6c-87a9-79df04ed5ea0:qsg-questions-answers-terminal-c55811739139a388f378b5d0ddfec035.png)

注意：创建的项目文件夹中会包含 `.strapi-cloud.json` 文件，用于将本地项目与 Strapi 服务器关联。更多安装选项请参考安装文档（/cms/installation）。

### 步骤 2：注册第一个本地管理员用户

安装完成后，需要启动服务器。在终端中运行：

```bash
cd my-strapi-project && npm run develop

```

运行后，浏览器会自动打开一个新标签页，进入管理员面板注册表单。填写表单即可创建你的第一个管理员用户 —— 你现在是该 Strapi 应用的第一个管理员。

提示：只要处于 `my-strapi-project` 目录，下次启动只需运行 `npm run develop` 或 `yarn develop`。

本地管理面板地址： http://localhost:1337/admin

![qsg-handson-part1-01-admin_panel-v5.png](attachment:a0fef4a8-4a58-4eee-9594-462fcc0c0b99:qsg-handson-part1-01-admin_panel-v5.png)

> 🎉 恭喜！你刚刚创建了一个新的 Strapi 项目！现在你可以开始使用 Content Manager 探索或继续下一部分构建内容模型。
> 

---

## B 部分：使用 Content-Type Builder 构建内容结构

安装脚本创建的是一个空项目。接下来我们以餐厅目录（参考示例 FoodAdvisor）为例，创建两个 collection types：Restaurant 与 Category。

> 开发模式（development）下才能使用 Content-Type Builder；本地创建项目缺省即为开发模式。
> 

提示：若服务器未运行，在终端进入项目目录并运行 `npm run develop`（或 `yarn develop`）。对于某些项目（例如使用 TypeScript 的项目），可能需要先运行 `npm run build` 或 `yarn build`。

### 步骤 1：创建 "Restaurant" collection type

1. 在侧边栏点击 **Create your first Content type**（若没看到，请访问： http://localhost:1337/admin/plugins/content-type-builder ）
2. 选择 **Create new collection type**。
3. Display name 输入：`Restaurant`，点击 **Continue**。
4. 添加第一个字段：选择 Text 类型，Name 字段填写 `Name`。
    - 在 Advanced Settings 中勾选 **Required field** 与 **Unique field**。
5. 点击 **Add another field**，选择 Rich text (Blocks) 类型，Name 填写 `Description`，点击 **Finish**。
6. 点击 **Save** 并等待 Strapi 重启。

![qsg-handson-restaurant-v5.gif](attachment:a1d797ad-1e72-495f-bbaa-8d05f345d361:qsg-handson-restaurant-v5.gif)

保存并重启后，导航栏的 Content Manager > Collection types 中会看到 `Restaurant`。

### 步骤 2：创建 "Category" collection type

1. 进入 Content-Type Builder，点击 **Create new collection type**。
2. Display name 输入：`Category`，点击 **Continue**。
3. 添加字段：Text 类型，Name 填写 `Name`，在 Advanced Settings 中勾选 **Required** 和 **Unique**。
4. 点击 **Add another field**，选择 Relation 字段。
5. 在关系类型中选择 “many-to-many”（多对多），显示为 `Categories has and belongs to many Restaurants`。
6. 点击 **Finish**，再点击 **Save** 并等待 Strapi 重启。

![qsg-handson-part2-02-collection_ct-v5.png](attachment:c17ab5e3-d395-4db1-ae06-ba30d049a139:qsg-handson-part2-02-collection_ct-v5.png)

> 🎉 你已为 Strapi 项目创建了基础内容结构！可以继续使用 Content-Type Builder 添加更多字段或内容类型，或进入下一部分部署到 Strapi Cloud。
> 

---

## C 部分：部署到 Strapi Cloud

现在把本地项目部署到 Strapi Cloud，让全世界都能访问它。部署到 Strapi Cloud 非常简单：只需一个命令。

1. 在终端中停止本地服务器（若运行中）：按 `Ctrl-C`。
2. 确保当前目录为你的 Strapi 项目目录（例如 `cd my-strapi-project`），然后运行下面命令：

Yarn 方式：

```bash
yarn strapi deploy

```

npm 方式：

```bash
npm run strapi deploy

```

1. 在终端按提示回答问题：为项目命名（按 Enter 使用默认名）、选择推荐的 Node.js 版本、选择最近的区域（region）。

![qsg-strapi-cloud-terminal-questions-025d053852eaa38d2e44128cd84307b7.png](attachment:562b5343-aca2-40bf-aa07-ff0a421cc308:qsg-strapi-cloud-terminal-questions-025d053852eaa38d2e44128cd84307b7.png)

部署完成后，终端会输出一个以 `https://cloud.strapi.io/projects` 开头的可点击链接。点击或复制到浏览器访问该链接，即可在 Strapi Cloud 仪表盘看到你刚创建的项目 `my-strapi-project`，点击右上角 **Visit app** 进入已部署的应用。

![qsg-visit-cloud-app.gif](attachment:5f020cf6-d6b1-48d1-beff-90f0a450e3bd:qsg-visit-cloud-app.gif)

> 🎉 你的项目现在已托管在 Strapi Cloud 并且在线可访问。想了解更多 Strapi Cloud，可阅读 Cloud 文档（/cloud/intro）。
> 

提示：每次你在本地通过 Content-Type Builder 修改内容模型后，如果想把这些更改部署到 Cloud，只需再次运行 `yarn strapi deploy` 或 `npm run strapi deploy`，几分钟内即可在托管项目中看到更新。

---

## D 部分：通过 Content Manager 在 Strapi Cloud 项目中添加内容

我们已经创建了两个 collection types（Restaurant 与 Category）并将项目部署到 Strapi Cloud，接下来在云端添加、发布并通过 API 访问数据。

### 步骤 1：登录到你在 Strapi Cloud 的管理面板

1. 打开 Strapi Cloud 仪表盘：https://cloud.strapi.io/projects ，点击 `my-strapi-project`。
2. 点击 **Visit app**。
3. 在打开的页面填写表单，创建该 Strapi Cloud 项目的第一个管理员用户。

![qsg-first-login-cloud.gif](attachment:901c83c9-4194-4fa6-84db-7373946f949e:qsg-first-login-cloud.gif)

注意：本地用户与 Strapi Cloud 用户不同，两个项目使用独立数据库，因此你需要在 Cloud 上单独创建管理员账号。

提示：托管在 Strapi Cloud 的项目会有一个独立 URL，格式例如 `https://my-strapi-project-name.strapiapp.com`。访问其管理面板只需在 URL 后加 `/admin`，例如 `https://my-strapi-project-name.strapiapp.com/admin`。

### 步骤 2：为 "Restaurant" collection type 创建条目

1. 在侧边栏选择 Content Manager > Collection types - Restaurant。
2. 点击 **Create new entry**。
3. 在 Name 字段输入你喜欢的本地餐厅名称，例如 `Biscotte Restaurant`。
4. 在 Description 字段填写描述，例如：
    
    "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers."
    
5. 点击 **Save**。

![qsg-handson-part2-03-restaurant-v5.png](attachment:399e629d-0241-408e-bf20-485cf5339f58:qsg-handson-part2-03-restaurant-v5.png)

该餐厅现在会显示在 Content Manager 的 Restaurant 列表中。

### 步骤 3：添加 Category

1. 转到 Content Manager > Collection types - Category。
2. 点击 **Create new entry**，在 Name 字段输入 `French Food`，点击 **Save**。
3. 再次新建一个条目，Name 输入 `Brunch`，点击 **Save**。

![qsg-handson-categories-v5.gif](attachment:7793909b-808a-4643-9339-5069c231a29f:qsg-handson-categories-v5.gif)

现在回到 Restaurant（例如打开 Biscotte Restaurant），在页面底部的 **Categories** 下拉框中选择 `French Food`，然后上滑点击 **Save**，将分类关联至餐厅。

### 步骤 4：设置 Roles 与 Permissions（公开访问 API）

为了通过 API 公开内容，需要为 Public 角色开启相应权限：

1. 在侧边栏点击 Settings（齿轮图标）。
2. 在 Users & Permissions Plugin 下选择 Roles。
3. 点击 **Public** 角色。
4. 在 Permissions 中找到 `Restaurant`，勾选 **find** 与 **findOne**。
5. 对 `Category` 同样勾选 **find** 与 **findOne**。
6. 点击 **Save**。

![qsg-handson-part2-04-roles-v5.png](attachment:51fdd102-ac56-4f39-9e55-ecf88fc1fe8d:qsg-handson-part2-04-roles-v5.png)

### 步骤 5：发布内容

Strapi 默认将新建内容保存为草稿。你需要将条目发布以供 API 调用：

1. 前往 Content Manager > Collection types - Category，点击 `Brunch` 条目，点击 **Publish**，在确认窗口点击 **Yes, publish**。
2. 对 `French Food` 重复同样操作。
3. 最后前往 Collection types - Restaurant，打开 `Biscotte Restaurant`，点击 **Publish**。

![qsg-handson-publish-v5.gif](attachment:c9ba225d-6503-41ab-9f2a-e2955ed3da5b:qsg-handson-publish-v5.gif)

### 步骤 6：通过 API 使用内容

发布后，你可以通过 Strapi Cloud 项目的公共 API 读取内容。例如：

GET 请求路径：

```
https://<your-project-subdomain>.strapiapp.com/api/restaurants

```

示例返回：

```json
{
  "data": [
    {
      "id": 3,
      "documentId": "wf7m1n3g8g22yr5k50hsryhk",
      "Name": "Biscotte Restaurant",
      "Description": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers."
            }
          ]
        }
      ],
      "createdAt": "2024-09-10T12:49:32.350Z",
      "updatedAt": "2024-09-10T13:14:18.275Z",
      "publishedAt": "2024-09-10T13:14:18.280Z",
      "locale": null
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}

```

> 🎉 恭喜！你的内容已创建、已发布，并可通过 API 访问。继续创造令人惊艳的内容吧！
> 

提示：本地项目与 Strapi Cloud 项目的数据库互相独立，数据不会自动同步。若需在本地与云端之间迁移数据，可使用 Strapi 的数据管理系统（/cms/features/data-management）。

---

## 接下来可以做什么？

- 学习如何使用 Strapi 的 REST API 查询内容：/cms/api/rest
- 浏览 Strapi 功能（Features）分类以了解更多：/cms/features
- 深入了解 Strapi Cloud：/cloud/intro
- 进行后端与管理面板的高级自定义：/cms/backend-customization、/cms/admin-panel-customization
