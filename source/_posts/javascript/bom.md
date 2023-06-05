---
title: javascript BOM
date: 2020-01-03 11:47:18
categories: javascript
tags:
- bom
---

## BOM 简介

* BOM 是 **Browser Object Model** 的缩写，译为 **浏览器对象模型**
* BOM 没有统一标准可以遵循，每个浏览器都有自己的实现
* BOM 根本上只处理浏览器窗口和框架，但习惯上把针对浏览器的扩展也认为是 BOM 的一部分：
  * 弹出新窗口的功能
  * 移动，缩放，关闭浏览器窗口的功能
  * 提供浏览器详细信息的 `navigator` 对象
  * 提供浏览器所加载页面详细信息的 `location` 对象
  * 提供用户显示器分辨率详细信息的 `screen` 对象
  * 对 cookie 的支持
  * 像 XMLHttpRequest 和 IE 的 ActiveXObject 这样的自定义对象

<!-- more -->

## BOM 对象

### window

```js
window.onload = function() {
	//浏览器窗口大小改变触发事件
	window.onresize = function() {

		console.log(document.documentElement.clientWidth);
	};

	//浏览器系统滚动条滚动事件
	window.onscroll = function() {
		console.log("scrolling");
	}
}
```

### navigator

```js
console.log(window.navigator.appName);  //netscape(网景)
console.log(window.navigator.appVersion);  //应用程序版本
console.log(navigator.appCodeName);  //内核名称,可能不准确
console.log(navigator.userAgent);  //用户代理(UA)字符串
console.log(navigator.cookie);  //cookie 信息,为空为 undefined
```

### screen

```js
//显示器宽度
console.log(window.screen.width);
//显示器高度
console.log(window.screen.height);
```

### location

```js
//当前页面的 href (URL)
console.log(location.href);
//web 主机的域名
console.log(location.hostname);
//当前页面的路径或文件名
console.log(location.pathname);
//使用的 web 协议（http: 或 https:）
console.log(location.protocol);
//重定向，跳转百度，无历史记录
location.href = 'https://www.baidu.com';
//以给定的URL来替换当前的资源，会有历史记录
location.assign('https://www.baidu.com');
//以给定的URL来替换当前的资源，无历史记录
location.replace('https://www.baidu.com');
//强制浏览器从服务器加载页面资源，参数为布尔值
location.reload(true);
```

### history

```js
//返回上个页面
history.back();
//前进下个页面
history.forward();
//历史记录跳转页数，从新到旧
history.go(0);
```