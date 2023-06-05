---
title: gitbook 基础用法
date: 2019-05-13 10:14:34
categories: tools
tags:
- gitbook
- node.js
---

## 安装 nodejs

从 http://nodejs.cn/download/ 下载对应二进制文件，并解压

### 配置环境变量

```powershell
setx NODE_HOME "D:\nodejs"
setx PATH "%PATH%;%NODE_HOME%"
setx NODE_PATH "%NODE_HOME%/node_ modules"
```

## 安装 git

从 https://git-scm.com/download/ 下载安装 git

### 配置环境变量

```powershell
setx /m "PATH %PATH%;D:\git\bin"
```

<!-- more -->

## 替换国内源

```powershell
npm config set registry=https://registry.npm.taobao.org
```

## 安装 gitbook

```powershell
npm install gitbook-cli -g
```

## 初始化

```powershell
mkdir gitbook
cd gitbook
git book init .
```

在当前目录下生成 SUMMARY.md 和 README.md 文件

## 生成电子书目录

在 SUMMARY.md 中添加章节及对应文件名

```md
# 目录

* [前言](README.md)
* [第一章](Chapter1/README.md)
  * [第1节](Chapter1/section1.md)
  * [第2节](Chapter1/section2.md)
  * [第3节](Chapter1/section3.md)
  * [第4节](Chapter1/section4.md)
* [第二章](Chapter2/README.md)
* [第三章](Chapter3/README.md)
```

再次执行 `gitbook init` 生成对应文件

## 安装 calibre

将 gitbook 转换为其他格式需要使用 calibre，如 pdf 格式

从 https://calibre-ebook.com/download 下载 calibre 安装    

### 配置环境变量

```powershell
setx /m PATH "%PATH%;D:\Calibre Portable\Calibre"
```

## 安装 gitbook-convert

```powershell
npm install gitbook-convert -g
```

## 导出 gitbook

### 生成 html
```powershell
gitbook build
```

### 生成 pdf
```powershell
gitbook pdf . book.pdf
```