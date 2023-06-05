---
title: React 基础
date: 2020-03-21 21:39:50
categories: javascript
tags:
- frame
- react
---
## React

* 用于构建用户界面的 javascript 库
* Declarative(声明式)    Component-Based(组件化)
* 单向数据流

### 参考文档

* [React.js 小书 by 胡子大哈](http://huziketang.mangojuice.top/books/react/)

## JSX

* JSX 全称  JavaScript XML，是一种类似于XML的 JS 扩展语法
* 是 `React.createElement(component, props, ...children)` 方法的语法糖

### 注意点

* 标签内部不要使用单引号或双引号
* 使用 js 表达式需要使用 `{ EXPRESSION }`
* 标签类名使用 `className` 指定，而不是 `class`
* 行内样式需要传入对象，格式为 `style={{ CSS_STYLE }}`
* 只能有一个根标签
* 所有标签必须闭合，自结束标签或同名结束标签均可

<!-- more -->

使用 jsx 创建 vdom 对象

```js
const idName = "DEMO";
const conName = "Hello,React!";
const VDom = (
  <div>
    <h1 id={idName.toLowerCase()}>
      <span className="title" style={{ fontSize: "50px" }}>
        {myContent}
      </span>
    </h1>
    <h2>A JavaScript library for building user interfaces</h2>
    <input type="text" />
  </div>
);
ReactDOM.render(VDom, document.getElementById("root"));
```

## 组件化

**引入React `import React, { Component } from "react";`**

### 函数定义组件

```js
function VDom() {
  return (
    <div>
      <h2>React by Facebook</h2>
      <h3>A JavaScript library for building user interfaces</h3>
    </div>
  );
}

ReactDOM.render(VDom, document.getElementById("root"));
```

### 类定义组件（es6）

编写 react.js 组件的时候，一般都需要继承 react.js 的 Component，一个组件类必须要实现一个 render 方法，该 render 方法必须要返回一个 jsx 元素，且只能有一个根标签。

```js
class VDom extends Component {
  state = {
    isUpdated: true,
  }
  
  changeUpdateState = () => {
    let { isUpdated } = this.state;
    this.setState({ isUpdated: !isUpdated });
  };
  
  render() {
    return (
      <div>
        <h2>React by Facebook</h2>
        <h3>A JavaScript library for building user interfaces</h3>
        
        <h3>Antd is a design system for enterprise-level products.</h3>
        <h3>Today {this.state.isUpdated ? "Release a new version" : "No updates"}</h3>
        
      </div>
    );
  }
}

ReactDOM.render(VDom, document.getElementById("root"));
```

state 用来存储可变状态，使用赋值语句和箭头函数来保证 this 指向实例化对象。