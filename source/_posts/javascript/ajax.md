---
title: AJAX
date: 2020-03-11 17:00:53
categories: javascript
tags:
- ajax
---

## Ajax

* ajax 全称为 Asynchronous Javascript And XML，就是异步的 js 和 xml
* ajax 请求是一种特殊的 http 请求，可以动态更新网页数据而无需重载页面
* 浏览器使用 `XHR`（XMLHttpRequest）对象或 `fetch` 函数发送 ajax 请求 

<!-- more -->

### Ajax 使用

1. 创建 XMLHttpRequest 对象

```js
let xhrObj = new XMLHttpRequest();
```

2. 设置请求信息

```js
xhrObj.open(METHOD, URL);
xhrObj.setRequestHeader("content-type","application/x-www-form-urlencoded");
```
  * METHOD 可以是 GET、POST、HEAD、PUT、DELETE

3. 发送请求

```js
xhrObj.send();
```

4. 接受响应

```js
xhrObj.onreadystatechange = () => {
  if (xhrObj.readyState == 4 && xhrObj.status >= 200 && xhrObj.status < 300) {
    let resData = JSON.parse(xhrObj.response);
    console.log(resData);
  }
};
```

### 构造函数

* `XMLHttpRequest()`  创建 xhr 对象的构造函数

### 属性

* `xhrObj.status`  响应状态码
* `xhrObj.statusText`  响应状态文本
* `xhrObj.responseType`  用于定义响应类型的枚举值（enumerated value）
* `xhrObj.responseText`  返回响应的文本内容
* `xhrObj.response`  返回的响应体内容
* `xhrObj.readState`  请求状态
  * 0  初始
  * 1  open() 之后
  * 2  send() 之后
  * 3  请求中
  * 4 请求完成

### 方法

* `xhrObj.open()`  初始化请求
* `xhrObj.setRequestHeader()`  设置请求头，必须位于 `open()` 之后，`send()` 之前
* `xhrObj.send()`  发送请求
* `xhrObj.abort()`  中断请求
* `xhrObj.timeout()`  请求超时时间，0 为无限制
* `xhrObj.getResponseHeader()`  返回包含指定相应头的值，参数为相应头属性名
* `xhrObj.getAllResponseHeaders()`  返回所有响应头组成的字符串

### 事件绑定

* `xhrObj.ontimeout()`  请求超时时间监听
* `xhrObj.onerror()`  请求错误的事件监听
* `xhrObj.onreadystatechange()`  绑定状态改变事件监听

## axios

* axios 是基于 xhr & promise 的异步 ajax 请求库
* 浏览器 / node 均可使用
* 支持请求 / 响应拦截 / 转换，支持取消请求
* 可以批量发送多个请求
* JSON 数据自动转换
* 客户端支持防止 XSRF（Cross-site request forgery 跨站请求伪造）

### 安装

本地安装

```shell
yarn add axios -S
```

CDN 引入

```html
<script src="https://cdn.staticfile.org/axios/0.19.2/axios.min.js"></script>
```

### 使用

[Github](https://github.com/axios/axios)

* axios(config)
* axios(url[, config])
* axios.request(config)
* axios.get(url[, config])
* axios.delete(url[, config])
* axios.head(url[, config])
* axios.options(url[, config])
* axios.post(url[, data[, config]])
* axios.put(url[, data[, config]])
* axios.patch(url[, data[, config]])