---
title: javascript dom 事件
date: 2020-01-06 11:53:28
categories: javascript
tags:
- events
---

## 事件处理

* 事件三要素：
  * 事件源（承载事件的对象）
    * 获取事件源 DOM 对象 
  * 事件类型（触发操作）
    * 添加对应事件监听
  * 事件处理（回调函数）
    * 书写处理回调

## 事件绑定与解绑

* dom0 和 dom2 分别使用独立的事件绑定与解绑方式
* dom1 和 dom3 没有新的事件绑定方式
* dom0 同一类型事件多次添加后添加的会覆盖前面的，只保留最后一次的事件
* dom2 同一类型事件多次添加会依次执行

<!-- more -->

## dom0 事件

### 标签内绑定

```html
<button type="button" id="button" onclick="alert('Hello, javascript!')">Button</button>
```

### dom 对象绑定解绑

```html
<button type="button" id="button">Button</button>
<button type="button" id="unlink">Unlink</button>
<script type="text/javascript">
	//绑定
	var btn = document.getElementById("button");
	btn.onclick = function() {
		alert('Hello, javascript!');
	}
	//解绑
	document.getElementById("unlink").onclick = function() {
		btn.onclick = null;
	}
</script>
```

## dom2 事件

### 高版本浏览器

```html
<button type="button" id="button">Button</button>
<button type="button" id="unlink">Unlink</button>
<script type="text/javascript">
	var btn = document.getElementById("button");
	var unlink = document.getElementById("unlink");
	
	function welcomeInfo() {
		alert('Hello, javascript!');
	}
	//绑定
	btn.addEventListener("click", welcomeInfo, false);
	//解绑
	unlink.onclick = function() {
		btn.removeEventListener("click", welcomeInfo, false);
	}
</script>
```

### 低版本浏览器

```html
<button type="button" id="button">Button</button>
<button type="button" id="unlink">Unlink</button>
<script type="text/javascript">
	var btn = document.getElementById("button");
	var unlink = document.getElementById("unlink");

	function welcomeInfo() {
		alert('Hello, javascript!');
	}
	//绑定
	btn.attachEvent("onclick", welcomeInfo);
	//解绑
	unlink.onclick = function() {
		btn.detachEvent("onclick", welcomeInfo);
	}
</script>
```

## 事件流

### 事件传播
DOM 事件标准描述事件传播的三个阶段：
1. 捕获阶段（事件从 window 向下到达标记为 `event.target` 的元素）
2. 目标阶段（事件到达目标元素）
3. 冒泡阶段（事件从元素上开始冒泡）

![](https://zh.javascript.info/article/bubbling-and-capturing/eventflow.svg)

### 冒泡
当事件发生在元素上，它首先会运行元素本身的事件处理，然后运行父元素上的，再然后是其他祖先上的。    

![](https://zh.javascript.info/article/bubbling-and-capturing/event-order-bubbling.svg)
* 几乎所有的事件都会冒泡，但 `focus` 事件不会冒泡
* 触发事件的层级最深的元素称为目标元素，可以通过 `event.target` 访问
* `this` 与 `event.target` 是不同对象，`this` 等同于 `event.currentTarget`
* 停止冒泡 `event.stopPropagation()`，通常没有必要去阻止冒泡的产生

## 事件委派

* 多个元素是以相同的方式处理，不需要给每个元素重复添加事件事件监听， 在它们共同的祖先上面添加一个事件监听即可
* 事件委派可以简化初始化，节省内存，提高效率，不需要重复添加事件监听
* 使用情形：
  * 某个元素内部多个子元素需要添加相同的事件监听时
  * 新添加元素需要和已存在元素拥有相同的行为
* 通过 `event.target.nodeName` 属性值获取目标元素对其进行操作

## 定时器（调度）

### 延迟定时器

创建定时器

```js
var timerId = setTimeout(function(){
		
}, 5000);
```

删除定时器

```js
clearTimeout(timerId);
```

### 循环定时器

创建定时器

```js
var timerId = setInterval(function() {

}, 2000);
```

删除定时器

```js
clearInterval(timerId);
```