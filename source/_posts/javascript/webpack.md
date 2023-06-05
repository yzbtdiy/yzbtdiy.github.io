---
title: Webpack 构建工具
date: 2020-03-17 15:30:22
categories: javascript
tags: 
- webpack
---

## webpack 简介

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。

### 核心概念

* entry（入口）webpack 开始构建的入口模块，从该入口开始构建并计算直接或间接依赖的模块或库
* output（输出）webpack 对文件的命名和输出
* loader（加载器）对于非 js 文件处理需要依赖 loader
* plugins（插件）plugins 将不同的事件运行在不同生命周期的 hook（钩子）中提供具体功能
* mode（模式）内置优化参数，可选 production（生产模式） developement（开发模式）none（无优化参数）

<!-- more -->

## 安装 webpack

```shell
npm install -D webpack webpack-cli    // 安装 webpack 组件和命令行工具
npm install -D webpack-dev-server    // 安装 webpack 开发服务器
```

配置文件：工作目录下的 `webpack.config.js`

## 常用配置

### ES6 转 ES5

```shell
npm install -D babel-loader @babel/core @babel/preset-env
```

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      // exclude:　/(node_modules|bower_components)/,
      include: [resolve("src")],
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: []
        }
      }
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    filename: "index.html"
  })
]
```

### 静态资源打包

**安装依赖**

```
npm install -D css-loader style-loader
npm install -D url-loader file-loader
```

**webpack.config.js**

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 1024 * 8,
            name: "imgs/[name].[hash:7].[ext]",
            esModule: false    // 打包图片路径显示为 [object Module] 设置此项
          }
        }
      ]
    }
  ]
}
```

`file-loader` 5.0.0 及以后版本 `esModule` 选项默认值为 `true`，可能会导致打包后的图片路径显示为 `[object Module]` 的问题，设置 `esModule` 值为 `false` 即可正常显示图片，详见 [Github Release](https://github.com/webpack-contrib/file-loader/releases/tag/v5.0.0)。

### vue 组件打包

**安装依赖**

```js
npm install -S vue
npm install -D vue-loader vue-template-compiler
```

**webpack.config.js**

```js
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader"
    }
  ]
},
plugins: [
  new VueLoaderPlugin()
]
```