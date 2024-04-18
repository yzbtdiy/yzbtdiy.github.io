---
title: javascript 基础
date: 2019-12-17 18:32:39
categories: javascript
tags: 
- javaScript
- basics
---

## javascript 简介

* javascript 于 1995 年由 Netscape（网景公司）的 布莱登·艾奇 耗时 10 天开发
* javascript 是一门 **动态**，**弱类型**，**解释型**，**面向对象** 的 **脚本语言**
  * 动态：程序执行时才会确定数据类型
  * 弱类型：数据类型不确定，可以随时改变
  * 解释型：程序运行不需要编译，通过解释器逐行执行
  * 编译型：程序需要使用编译器转化成二进制可执行文件运行   
  * 脚本：通常可以嵌入其他语言中执行
* javascript 最初名为 livescript，后来改名 javascript，借助当时流行的 java 语言的名字很快得到广泛使用，其本身与 java 语言没有任何关系
* 最初用于网页的表单验证，目前用于用户交互，游戏开发，后端开发（node.js）

<!-- more -->

## javascript 实现组成部分

* ECMAscript    javascript 核心（提供语法、类型、语句、关键字、保留字、操作符、对象等核心语言功能  ）
* DOM    Document Object Model    文档对象模型（提供访问和操作网页内容的方法和接口  ）
* BOM    Browser Object Model    浏览器对象模型（提供与浏览器交互的方法和接口  ）

## javascript 书写位置

### 行内式

```html
<div id="button" onclick="alter('inline js message!')">
```
* 代码分离性差，可读性差，只能针对事件添加，局限性大

### 内嵌式

```html
<script type="text/javascript">
    alert("embed js message!");			
</script>
```
* 通常写在 body 底部，也可以写在 head 内

### 外链式

```html
<script type="text/javascript" src="js/print.js"></script>
```
**js/print.js**

```js
alert("external js message!");
```

* 实现代码分离，但外链式 script 标签内部书写 js 代码无效

## javascript 输出语句

```js
//弹出框显示
alert("pop-up box message!");
//控制台输出
console.log("log message!");
//网页内容展示
document.write("body message!")
```