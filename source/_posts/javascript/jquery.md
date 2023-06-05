---
title: jquery
date: 2020-02-19 19:33:50
categories: javascript
tags:
- jquery
---

## jquery 简介

jquery 是一个快速，小巧，功能丰富的 javascript 库。其独特的 API 使 html 文档的遍历，事件处理，动画和 Ajax 等变得简单。

### 使用

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
```

<!-- more -->

## jquery 核心函数

### 作为函数调用

```js
$(param)
```

* 参数为函数，dom 加载完成后，执行的回调函数
* 参数为选择器（字符串），查找匹配元素封装成 jquery 对象将其返回
* 参数为 dom 对象，将 dom 对象封装为 jquery 对象返回
* 参数为 html 标签（字符串），创建标签，生成标签对应 jquery 对象将其返回

### 作为对象使用

```js
// 遍历对象或数组，参数为遍历的对象和回调函数，回调函数形参为属性和值或索引和值，返回值为对象
$.each({ name: "jquery", version: "3" }, function(key, value) {
  console.log(key, value);
});
// 去除字符串两端的空格，返回新字符串
$.trim("    remove sides space    ");
// 获取数据类型，返回数据类型
$.type($);
// 判断是否是数组，返回布尔值
$.isArray(["jquery", 2019, "frame"]);
// 判断是否是函数，返回布尔值
$.isFunction($);
// 解析 json 字符串，转化为对象或数组，返回对象
$.parseJSON('{"name":"jquery","version":"3"}');
```

## jquery 对象

jquery 对象是一个包含多个 dom 对象的伪数组对象。

### 基本方法

* `.size()` / `.length`包含 dom 对象个数
* `.[index]` / `.get(index)` 获取索引对应的 dom 对象
* `.each()` 遍历伪数组中的所有 dom 对象
* `.index()` 获取 dom 对象对应元素在所有同级元素中的索引

### 读写合一方法

一个参数读取，两个参数设置。

* `.arrr()` 读取或设置自定义属性属性
* `.css()` 读取或设置样式
* `.height()` 读取或设置元素高度
* `.html()` 读取或设置元素的内容
* `.offset()` 读取或设置元素相对于视口的偏移坐标
* `.prop()` 读取或设置元素的固有属性（属性值固定，基本都是布尔值）
* `.scrollLeft()` 读取或设置水平滚动条位置（水平滚动基本不用）
* `.scrollTop()` 读取或设置处置滚动条位置
* `.text()` 读取或设置元素的文本内容
* `.val()` 读取或设置表单元素属性值
* `.width()` 读取或设置元素的宽度

## 获取 jquery 对象 

通过获取元素封装为 jquery 对象。

### 基本选择器对象

```js
// 通配选择器
$("*");
// 类选择器
$(".class");
// 标签选择器
$("element");
// id 选择器
$("#id");
// 并集选择器（Multiple Selector）
$("selector1,selector2,selector3");
```

### 层次选择器对象

```js
// 后代选择器
$("selector1 selector2");
// 子代选择器（一级后代）
$("selector1 > selector2");
// 相邻兄弟元素选择器（selector1之后的元素）
$("selector1 + selector2");
// 兄弟元素选择器（selector1 之后的元素）
$("selector1 ~ selector2");
```

### 过滤选择器对象

```js
// 首尾选择
$("selector1:first");
$("selector1:last");
// 选择器取反
$(":not(selector1)");
// 索引范围选择（eq 等于，gt 大雨，lt 小于）
$("selector1:eq(value)");
$("selector1:gt(value)");
$("selector1:lt(value)");
$("selector1:gt(value):lt(value)");
// 包含内容选择
$("selector1:contains(text)");
// 隐藏元素选择
$("selector1:hidden");
// 属性选择器
$("selector1:[attr=value]");
```

### 表单选择器对象

```js
// 匹配所有 input, textarea, select 和 button 元素
$(":input");
// 匹配单行文本
$(":text");
// 匹配密码框
$(":password");
// 匹配单选按钮
$(":radio");
// 匹配复选框
$(":checkbox");
// 匹配提交按钮
$(":submit");
// 匹配图像域
$(":image");
// 匹配重置按钮
$(":reset");
// 匹配所有按钮
$(":button");
// 匹配所有文件域
$(":file");
```

表单属性对象

```js
// 可用表单元素
$(":enabled");
// 禁用表单元素
$(":disabled");
// 选中状态的单选框，复选框
$(":checked");
// 选中状态的下拉菜单项（option 元素）
$(":selected");
```