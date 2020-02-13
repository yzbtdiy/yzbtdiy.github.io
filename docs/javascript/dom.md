---
title: javascript DOM
date: 2020-01-03 09:47:18
categories: javascript
tags:
- dom
---

## DOM 简介

* DOM 是 **Document Object Model** 的缩写，译为 **文档对象模型**
* DOM 是针对 XML 但经过扩展用于 HTML 的 **应用程序编程接口**（ API，Application Programming Interface）
* DOM 不只是针对 javascript 的，很多其它语言也实现了 DOM
* DOM 规范解释了文档的结构并提供了对其进行操作的对象
* DOM 提供了使程序和脚本有能力去动态访问和更新文档内容、结构及样式的方法和接口
* window 是 **浏览器窗口对象**，document 是 window 下的一个属性，代表整个 DOM 对象模型
* DOM 把整个页面映射为一个 **多层节点结构**，称为 **DOM 树** HTML 或 XML 页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据
  * 以 html 为根节点，各种标签形成分支节点组成倒立的树状结构，称为 DOM 树
  * 通过 DOM 提供的方法去获取或操做的节点称为 DOM 对象
* DOM 节点：
  * 元素节点    标签
  * 属性节点    标签属性
  * 对象节点    文本内容
  * 注释节点    注释说明

<!-- more -->

## DOM 级别

### DOM0 不存在的 

* 在阅读 DOM 标准的时候，可能会遇到 DOM0 级（DOM Level 0）
* DOM0 级标准并不存在，所谓 DOM0 级是 Internet Explorer 4.0 和 Netscape Navigator 4.0 最初支持的 **DHTML**（Dynamic HTML），只是 DOM 历史坐标中的一个参照点

### DOM1 最初的标准 

* DOM1 级（ DOM Level 1）于 1998 年 10 月成为 **W3C**（World Wide Web Consortium，万维网联盟）的 **推荐标准**
* DOM1 级由 **DOM Core**（DOM 核心）和 **DOM HTML** 两个模块组成
* **DOM Core** 规定的是如何映射基于 XML 的文档结构，以便简化对文档任意部分的访问和操作
* **DOM HTML** 模块在 **DOM Core** 的基础上加以扩展，添加了针对 HTML 的对象和方法
* DOM1 级的目标主要是 **映射文档的结构**

### DOM2 新模块，新类型，新接口 

* **DOM Views**（DOM 视图）：定义了跟踪不同文档视图的接口（如应用 CSS 之前和之后的文档）
* **DOM Events**（DOM 事件）：定义了事件和事件处理的接口
* **DOM Style**（DOM 样式）：定义了基于 CSS 为元素应用样式的接口
* **DOM Traversal and Range**（DOM 遍历和范围）：定义了遍历和操作文档树的接口

### DOM3 DOM 新增模块、核心扩展

* 引入了以统一方式加载和保存文档的方法，**DOM Load and Save**（DOM 加载和保存）模块
* 新增了验证文档的方法，**DOM Validation**（DOM 验证）模块
* DOM 核心扩展，开始支持 XML 1.0 规范，涉及 XML Infoset、XPath 和 XML Base

## 其他 DOM 标准

除了 DOM 核心和 DOM HTML 接口之外，其他几种语言还发布了 **只针对自己** 的 DOM 标准，以下是其他 W3C 推荐的标准：
* SVG（ Scalable Vector Graphic，可伸缩矢量图） 1.0
* MathML（ Mathematical Markup Language，数学标记语言） 1.0
* SMIL（ Synchronized Multimedia Integration Language，同步多媒体集成语言）
* XUL（ XML User Interface Language， XML 用户界面语言，Mozilla 开发）

## 获取 DOM 对象

### window.onload

```js
window.onload = function() {

}
```

* `window.onload` 是等待页面加载完成事件
* 通常 js 代码写在 `window.onload` 函数中，页面加载完成后才会执行该函数中的代码

### document.getElementById()

* 参数为 id 名
* 通过 id 获取单个元素封装为 DOM 对象并返回

### document.getElementsByTagName()

* 参数为标签名
* 通过标签获取元素封装为 DOM 对象，返回一个伪数组

### document.getElementsByClassName()

* 参数为类名
* 通过类名获取元素封装为 DOM 对象，返回一个伪数组

### querySelector()

* 通过选择器获取单个元素封装为 DOM 对象并返回

### querySelectorAll()

* 通过选择器获取多个元素封装为 DOM 对象，返回一个伪数组