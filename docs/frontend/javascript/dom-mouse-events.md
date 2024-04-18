---
title: javascript 鼠标事件
date: 2020-01-08 18:26:48
categories: javascript
tags:
- dom
- mouse
- events
---

## 鼠标事件

* `onclick` 单击
* `onmouseover` / `onmouseout`   移入移出，从父元素移入子元素会切换事件对象，事件委派不应使用
* `onmounseenter` / `onmouseleave`  移入移出，从父元素移入子元素不会切换事件对象
* `onmousemove` 移动
* `onmousedown` / `onmouseup` 按下 / 弹起

<!-- more -->

## 拖拽

### offset
* `offsetWidth` content + padding + border 包含边框盒子的宽度，只读
* `offsetHeight` content + padding + border 包含边框盒子的高度，只读
* `offsetParent` 是 `offsetLeft` 和 `offsetTop` 最近的定位祖先元素，可以是：
  * css 定位元素，即 `position` 为 `absolute`、`relative` 或 `fixed` 的元素
  * `<td>`、`<th>`、`<table>` 
  * `<body>`
* `offsetLeft` 相对于 `offsetParent` 的左侧边缘坐标
* `offsetTop` 相对于 `offsetParent` 的顶部边缘坐标

### client
* `clientWidth` content + padding 内容的宽度，包括内间距不包括边框和外间距，只读
* `clientHeight` content + padding 内容的高度，包括间距不包括边框和外间距，只读
* `clientTop` 上边框宽度，只读
* `clientLeft` 左边框宽度，只读

### scroll
* `scrollWidth` 内容的宽度，包括内间距和可滚动的可视区域外尺寸，只读
  * 内容未超出父元素等同于 `clientWidth`
  * 内容超出父元素等同于 content + 超出部分 + 一侧内间距 的宽度
* `scrollHeight` 内容的高度，包括内间距和可滚动的可视区域外尺寸，只读
  * 内容未超出父元素等同于 `clientHeight`
  * 内容超出父元素等同于 content + 超出部分 + 一侧内间距 的高度
* `scrollTop` 上边框宽度，**可写**
* `scrollLeft` 左边框宽度，**可写**

### 鼠标坐标
* `clientX` 和 `clientY` （Window-relative）
  * `clientX` 事件发生位置相对于与该事件关联的视口的水平坐标
  * `clientY` 事件发生位置相对于与该事件关联的视口的垂直坐标
* `pageX` 和 `pageY` （Document-relative）
  * `pageX` 事件发生位置相对于当前浏览器窗口的水平坐标
  * `pageY` 事件发生位置相对于当前浏览器窗口的垂直坐标
* `offsetX` 和 `offsetY` （Element-relative）
  * 事件发生位置相对于自身元素的水平坐标
  * 事件发生位置相对于自身元素的垂直坐标

pageY = clientY + 文档垂直部分滚动的高度

pageX = clientX + 文档水平部分滚动的宽度