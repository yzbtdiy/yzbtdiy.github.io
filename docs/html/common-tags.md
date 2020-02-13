---
title: html 常用标签
date: 2019-12-06 13:39:56
categories: html
tags: 
- html
- tags
---

## html 标签

### 标签简介

* 标签由英文尖括号 `<` 和 `>` 括起来，如 `<html>` 就是一个标签
* html中的标签一般都是成对出现的，分开始标签和结束标签。结束标签比开始标签多了一个 `/`
* 标签与标签之间是可以嵌套的，但先后顺序必须保持一致
* html 标签不区分大小写，`<h1>` 和 `<H1>` 是一样的，但最好小写

<!-- more -->

### 标签类型

* 双标签，如 `<p></p>` `<font></font>`
* 单标签，如 `<meta>` `<br>` `<hr>`

### 标签关系

* 嵌套：包含关系，祖先与后代之间的关系
* 并列：统计关系，兄弟之间的关系

### 常用标签

* 注释 `<!-- 注释内容 -->`
* 元数据 `<meta>`
`<meta charset="UTF-8">`
`<meta name="keywords" content="html,css,javascript">`
`<meta name="description" content="前端基础">`
`<meta http-equiv="refresh" content="5;url=http://example.com/">`
* 标题标签 `<h1>一级标题</h1>` `<h6>六级标题</h6>`
* 段落标签 `<p>段落内容</p>`
* 换行标签 `<br>`
* 水平分割线 `<hr>`
* 文本标签 `<font color="red">文本标签</font>`
* 加粗 `<b></b>` `<strong></strong>`
* 倾斜 `<i></i>` `<em></em>`
* 下划线 `<u></u>` `<ins></ins>`
* 删除线 `<s></s>` `<del></del>`
* 图片标签 `<img src="相对路径或URL" width="XXpx" height="XXpx" title="说明信息" alt="替换文本">`
* 超链接 `<a href="相对路径或URL" target="_blank">跳转文字<a>`

## 特殊字符

| 显示结果 | 描述              | 实体名称            | 实体编号  |
| --- | --- | --- | --- |
| ` `      | 空格              | `&nbsp;`            | `&#160;`  |
| `<`      | 小于号            | `&lt;`              | `&#60;`   |
| `>`      | 大于号            | `&gt;`              | `&#62;`   |
| `&`      | 和号              | `&amp;`             | `&#38;`   |
| `"`      | 引号              | `&quot;`            | `&#34;`   |
| `'`      | 撇号              | `&apos;` (IE不支持) | `&#39;`   |
| `©`      | 版权（copyright） | `&copy;`            | `&#169;`  |
| `®`      | 注册商标          | `&reg;`             | `&#174;`  |
| `™`      | 商标              | `&trade;`           | `&#8482;` |
| `×`      | 乘号              | `&times;`           | `&#215;`  |
| `÷`      | 除号              | `&divide;`          | `&#247;`  |