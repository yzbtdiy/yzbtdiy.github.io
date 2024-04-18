---
title: VSCode 使用
date: 2020-03-06 20:12:04
categories: tools
tags:
- vscode
- plugins
---

## IDE 的选择

### VSCode

对于开发者来说，一个好的开发工具至关重要，在众多 IDE 中 我选择了 VScode，微软的一款轻量级开发工具，对应的开源版本为 VSCodium，就像 Chrome 与 Chromium，有开源版本我当然会用开源版本，但 VScode 的远程开发功能在 VSCodium 中无法使用，这一点使我暂时放弃了 VSCodium，远程开发功能让服务器端写代码像在本地一样，虽然目前还是预览功能，但体验了一下我只能说真香。

* VSCode 下载: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* VSCodium 下载: [https://github.com/VSCodium/vscodium/releases](https://github.com/VSCodium/vscodium/releases)
* 使用 [Scoop](https://github.com/lukesampson/scoop) 安装，可以直接装便携版 `scoop install vscode-portable -g`

**强烈推荐 FiraCode 编程字体，只需体验三分钟，你就会跟我一样 ... ...**

* FiraCode: [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

<!-- more -->

### HBuilderX

国产免费开发工具，轻量级，响应快，但是插件扩展相对较少，生态不是很成熟，未来有很大发展空间。

下载：[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)

### Atom

Github 开源的编辑器，受欢迎程度可想而知，和 VSCode 同样都基于 Electronjs 开发，但个人感觉 VSCode 在响应速度和内存占用方面比 Atom 做的好一些，而且 VSCode 的界面更好看一些，也许这只是习惯问题。

下载：[https://github.com/atom/atom/releases](https://github.com/atom/atom/releases)

### Webstorm

Webstorm 确实是很强大的前端开发工具，应该算是重量级的开发工具了，适合不喜欢折腾的开发者使用，简单体验了一下，但我最终没有选择它，但必须承认它是一款很优秀的开发工具，这里附上 Webstorm 的汉化文件和破解补丁供有需要的网友使用，当然有能力的话请支持正版~：

* 下载：[https://www.jetbrains.com/webstorm/download](https://www.jetbrains.com/webstorm/download)
* 汉化补丁：[https://github.com/pingfangx/TranslatorX](https://github.com/pingfangx/TranslatorX)
* 破解补丁：[https://zhile.io/2018/08/25/jetbrains-license-server-crack.html](https://zhile.io/2018/08/25/jetbrains-license-server-crack.html)

## VSCode 插件

以下是我目前安装的插件列表，Setting Sync 插件可以同步配置，对于我这种时不时重装下系统的人来说省去了不少麻烦。

**说明**：

* 插件名包含 `snippets` 的通常为代码提示插件
* 插件名包含 `lint` 或 `hint` 的通常为语法检查插件

### 智能提示

* HTML Snippets    html 代码提示
* HTML CSS Support    css 代码提示
* JavaScript (ES6) code snippets    es6 语法提示
* Vetur    VUE 开发必备

### 语法检查

* HTMLHint    html 语法检查
* ESLint    js 语法检查

### 代码格式化

* Prettier - Code formatter    代码格式化，支持的语言比较多
  * 单行取消格式化在该行上添加注释文本 `prettier-ignore` 即可

### 其它

* Setting Sync    使用 Github Gist 同步配置（推荐）
* Remote Development    远程开发，真香
* Live Server    本地 web 服务器
* Path Intellisense    路径提示
* vscode-icons    一目了然的文件，目录图标
* Bracket Pair Colorizer    多彩括号，区分方便
* Chinese (Simplified) Language Pack for Visual Studio Code    中文语言包

## 配置目录

### VSCode 插件目录

VSCode 卸载插件后不会删除下载的插件文件，如果安装了众多插件卸载插件后建议到以下位置删除该插件对应的目录，目前没有找到更好的办法。

```
C:\Users\Administrator\.vscode
```

### VSCode 配置目录

如果 VSCode 配置出了问题又难以解决，删除以下目录即可恢复初始状态的 VSCode（慎用）

```
C:\Users\Administrator\AppData\Roaming\Code
```