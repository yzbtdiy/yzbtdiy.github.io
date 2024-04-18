---
title: Promise 对象
date: 2020-03-13 18:58:28
categories: javascript
tags: 
- promise
---

## Promise 简介

* Promise 是异步编程的一种解决方案，比传统的回调函数和事件解决异步更加合理和灵活
  * 异步操作
    * 文件处理
    * 网络请求 (AJAX, 爬虫) 
    * 数据库操作
    * 定时器
* Promise 支持链式调用，可以解决 Callback Hell (回调地狱)
  * 回调地狱: 外部回调函数异步执行结果是内部嵌套的回调执行的条件
  * 回调地狱不便于阅读和异常处理
* 语法上 Promise 是一个构造函数
* 功能上 promise 对象用来封装一个异步操作并可以获取其成功或失败的结果值

### 文档

* [Promises/A+规范](https://www.ituring.com.cn/article/66566)
* [Promise 实现详解](https://zhuanlan.zhihu.com/p/25178630)
* [Promise 必知必会（十道题）](https://zhuanlan.zhihu.com/p/30797777)

<!-- more -->

### Promise 三种状态

* `Pending` 等待态
  * 可以转变为 `Fulfilled` 或 `Rejected`
* `Fulfilled` 执行态
  * 不能转变为其他状态
  * 必须有一个不可变的 `eventual value` (终值)
* `Rejected` 拒绝态
  * 不能转变为其他状态
  * 必须有一个不可变的 `reason` (拒因)

## Promise Api

### Promise.prototype.constructor()

Promise 接收一个函数做参数，该函数里有 resolve 和 reject 两个 Promise 内置方法作为参数，异步操作执行结束调用该函数，确定 Promise 最终的状态 (`fulfilled` 或者 `rejected`)

### Promise.prototype.then()

Promise 实例确定后，使用 `then` 方法指定不同状态的回调函数。then 方法有两个参数，第一个参数 `onfulfilled` 对应  `fulfilled` 状态的回调，第二个参数 `onrejected` 对应`rejected` 状态的回调

### Promise.prototype.catch()

Promise 对象的 `catch` 方法是 `then(null, onrejected)` 方法的别名，用于指定 `rejected` 状态的回调，同时还可以捕获 `onfulfillled` 回调抛出的异常，`onrejected` 回调无法做到。

Promise 的错误如果没有捕获会一直往外抛，与 "冒泡" 类似

### Promise.prototype.finally()

Promise 对象的 `finally` 方法指定 Promise 对象最终执行的操作，该方法会忽略 Promise 对象的状态，无论 Promise 对象状态如何都会执行该方法的回调


### Promise.all()

`Promise.all()` 方法的参数是一个数组，该数组所有元素必须为 Promise 实例。`Promise.all()` 方法可以并行执行异步操作，在所有异步操作执行完后才执行回调。只要有数组中一个 Promise 实例返回 `rejected` 状态，`Promise.all()` 最终返回的 Promise 实例即为 `rejected` 状态，且第一个 `rejected` 实例的返回值会传给 `Promise.all()` 的回调函数

### Promise.race()

`Promise.race()` 方法与 `Promise.all()` 方法类似，同样接收一个元素为 Promise 实例的数组作为参数，不同的是 `Promise.race()` 方法不论结果如何，只返回异步操作执行最快的 Promise 实例的状态

### Promise.resolve()

`Promise.resolve()` 方法可以将现有对象转化为 Promise 对象，转化后的状态为 `fulfilled` ，如果传入 Promise 对象，则直接返回该 Promise 对象的状态

### Promise.reject()

`Promise.reject(reason)` 方法返回一个新的 Promise 对象，该对象的状态为 `rejected`



