---
title: Vue 基础
date: 2020-04-20 21:30:22
categories: javascript
tags: 
- vue
---

## Vue 简介

* Vue 是一套用于构建用户界面的 JavaScript 渐进式框架
* Vue 提供 MVVM 数据双向绑定，专注于UI层面，核心思想：数据驱动、组件系统
* [官方文档](https://cn.vuejs.org/index.html)

### 库和框架

* 库是为实现特定功能而封装的代码片段
* 框架是开发项目的一套完整解决方案

### MVVM

* Module    模型，数据访问，对应前端的 javascript 对象
* View    视图，对应前端 dom
* ViewModule    视图模版，视图与模版数据交互

<!-- more -->

## Vue 安装

### npm 安装

```shell
npx install vue --save
```

### CDN 引入

```html
<script src="https://cdn.staticfile.org/vue/2.6.11/vue.js"></script>
```

###  调试插件

Vue.js devtools 是 Vue 官方提供的浏览器调试插件

* [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/)
* [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Vue 模版语法

### 插值语法

> 插值语法使用 {{ Mustache }}

html
```html
<div id="app">
  {{ message }}
</div>
```

javascript
```js
const vm = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});
```

### 指令语法（Directives）

> 指令是带有 `v-` 前缀的特殊属性

* `v-bind` 指令可以用于响应式地更新 HTML attribute，如 `v-bind:href="url"`，可缩写为 `:href="url"`
* `v-on` 指令用于监听 DOM 事件，如 `v-on:click="doSomething"`，可缩写为 `@click="doSomething"`

html
```html
<div id="testDirectives">
  <a v-bind:href="url">百度一下</a>
  <button v-on:click="sayHello">Hello,Vue!</button>
</div>
```

javascript
```js
const vm = new Vue({
  el: "#testDirectives",
  data: {
    url: "https://www.baidu.com"
  },
  methods: {
    sayHello(event) {
      alert(event.target.innerHTML);
    }
  }
});
```

## 计算属性和侦听器

```html
<div id="getName">
  FirstName:
  <input type="text" placeholder="First Name" v-model="firstName" /><br />
  LastName:
  <input type="text" placeholder="Last Name" v-model="lastName" /><br />
  FullName:
  <input type="text" placeholder="Full Name" v-model="fullName" /><br />
</div>
```

### 计算属性

* 配置对象的 `computed` 属性为 Vue 的计算属性
* 计算属性默认只有 getter，需要时也可以提供一个 setter
  * getter 将函数的返回值作为属性值, 读取属性时调用
  * setter 监视属性值的变化, 修改属性时调用

javascript
```js
const vm = new Vue({
  data() {
    return {
      firstName: "yzbt",
      lastName: "diy",
      fullName: "yzbt-diy"
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + "-" + this.lastName;
      },
      set(value) {
        const names = value.split("-");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
}).$mount("#getName");
```

### 侦听器

* 配置对象使用 `watch` 属性
* 实例对象使用 `$watch()` 方法

```js
const vm = new Vue({
  data() {
    return {
      firstName: "yzbt",
      lastName: "diy",
      fullName: "yzbt-diy"
    };
  },
  // 监视 firstName，实例化时调用 $watch()
  watch: {
    firstName: function(value) {
      this.fullName = value + "-" + this.lastName;
    }
  }
}).$mount("#getName");

// 监视 lastName
vm.$watch("lastName", function(value) {
  this.fullName = this.firstName + "-" + value;
});
```

## Class 与 Style 绑定

* 通过给 `v-bind:class` 传递字符串，对象或数组可以实现动态切换 class
* 类名不确定传递字符串，类名确定，但是不确定是否生效传递对象或数组

html
```html
<div id="styleBind">
  <p v-bind:class="fullClass">TEST1</p>
  <p
    class="ftSize"
    v-bind:class="{bgColor: hasBgColor, ftColor: hasFtColor}"
  >
    TEST2
  </p>
  <p v-bind:class="[hasBgColor ? 'bgColor' : '', 'ftColor']">
    TEST3
  </p>
</div>
```

css
```css
.bgColor {
  background-color: #bfa;
}
.ftSize {
  font-size: 21px;
}
.ftColor {
  color: red;
}
```

javascript
```js
const vm = new Vue({
  data() {
    return {
      fullClass: "bgColor ftColor ftSize",
      hasBgColor: true,
      hasFtColor: false
    };
  }
}).$mount("#styleBind");
```

## 条件渲染

* `v-if` 指令用于条件性渲染一块内容，在表达式返回 truthy 值时被渲染
* `v-else-if` 指令必须跟在 `v-if` 指令元素之后
* `v-else` 指令必须跟在拥有 `v-if` 或 `v-else-if` 指令元素之后
* `v-if` 通过增删对象改变元素显示状态，`v-show` 通过修改样式改变元素显示状态

## Vuex

* vuex 是 vue 官方提供的集中管理数据的状态机，用于多个组件之间共享数据

### 概念

* store(对象): Vuex 向外暴露的全局对象, 用于管理 state, mutations, actions

* state(对象)
  * 存储集中管理的数据
  * 存储的是静态数据

* mutation(函数)
  * 同步修改或更新 state 的状态数据

* action（函数）
  * 执行异步任务，获取异步数据
  * 同步触发 mutations，将异步数据交给 mutations

* getter（函数）
  * 根据已有的属性计算得到新的属性, 类似于 Vue 中的 computed
* dispatch（函数）
  * 分发 action