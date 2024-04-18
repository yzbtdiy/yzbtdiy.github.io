---
title: javascript 对象
date: 2019-12-27 09:33:50
categories: javascript
tags:
- object
---

## 对象定义

在 javascript 中，对象是一系列无序键值对的集合，javascript 中对象的概念类似于 python 中的字典

<!-- more -->

## 对象的创建

### 字面量定义

```js
var obj1 = {
	key1: values1,
	key2: values2,
}
```

### 构造函数定义

```js
var obj1 = new Object({
	key1: values1,
	key2: values2,
});
```

### 工厂（函数）模式定义

```js
function createObject() {
	var obj = new Object();
	return obj;
}
var obj1 = createObject();
```

## 对象属性

ECMAScript 中有两种属性：数据属性和访问器属性

### 数据属性

数据属性包含一个数据值的位置。在这个位置可以读取和写入值。

#### `[[Configurable]]:`

* 能否通过 delete 删除属性从而重新定义属性
* 能否修改属性的特性或能否把属性修改为访问器属性
* 直接在对象上定义的属性的 `[[Configurable]]:` 值默认为 true

#### `[[Enumerable]]:`

* 能否通过 for-in 循环返回属性
* 直接在对象上定义的属性的 `[[Enumerable]]:` 值默认为 true

#### `[[Writable]]:`

* 能够修改属性的值
* 直接在对象上定义的属性的 `[[Writable]]:` 值默认为 true

#### `[[Value]]:`

* 包含这个属性的数据值
* 读取和写入属性值均为操作 `[[Value]]:` 的值，默认值为 undefined

### 访问器属性

* 访问器属性不能直接定义，必须使用 `Object.defineProperty()` 来定义

#### `[[Configurable]]:`

* 能否通过 delete 删除属性从而重新定义属性
* 能否修改属性的特性，或者能否把属性修改为数据属性
* 直接在对象上定义的属性 `[[Configurable]]:` 值默认为 true

#### `[[Enumerable]]:`

* 能否通过 for-in 循环返回属性
* 直接在对象上定义的属性 `[[Enumerable]]:` 值默认为 true

#### `[[Get]]:`

* 读取属性时调用的函数，默认值为 undefined

#### `[[Set]]:`

* 写入属性时定义的函数，默认值为 undefined

## 对象操作

### 增和查

* 通过 `对象.属性` 和 `对象[属性]` 都可以操作对象，有则改之，无则增加
* 特定条件下必须使用 `[]`：
  * 属性名不符合标识符规范
  * 属性名是变量 

### 删除

```js
delete obj1.key;
delete obj1[key];
```

* 使用 `delete` 关键字删除对象中的键值对

### 遍历

```js
for (var key in obj1) {
	console.log(key, obj1[key])
}
```

* 对象的遍历使用 `for ... in ...`
* 数组和函数也可以作为对象使用，添加属性值
* 数组使用 `for ... in ...` 遍历会将索引作为属性，索引值作为属性值

## 构造函数

```js
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}
var jsCreater = new Person("Brendan Eich", 58, "male");
```

* javascript 使用构造函数（constructor）作为对象的模板，用来生成具有相同基本结构的对象
* 构造函数的函数名通常使用大驼峰方式命名，以便于区分
* ES6 中引入 class
* 函数可以作为普通函数使用，也可以作为函数对象使用（构造函数属于函数对象）
* 作为普通函数使用：  
  * 调用时不使用 new 关键字，函数内部 this 代表 window 对象
  * 函数调用相当于在 window 对象中增加了一些属性和值
  * 有 return 函数表达式返回对应的值，无 return 返回 undefined
* 作为构造函数使用：
  * 务必使用 new 关键字，函数内部 this 代表实例化的对象
  * 函数调用相当于在实例化后的对象内部添加了一些属性和值
  * 无 return 或者 return 值为基本数据类型，函数表达式返回值为示例化后的对象
  * return 值为对象数据类型，函数表达式返回值为 return 对象的数据

## this

* this 本质是一个变量，它指向函数的执行者：
  * 在函数中 this 指向 window 对象（浏览器窗口对象）
  * 在方法中 this 指向方法的对象（方法是指对象内属性的属性值）
  * 在事件处理（回调）函数中 this 指向发生事件的元素
  * 在构造函数中 this 指向准备实例化的对象

### apply & call

* `apply` 和 `call` 可以改变函数运行时的上下文（context），也就是改变函数内部 this 的指向
* `apply` 和 `call`  的第一个参数为 this 的新

## 原型对象和原型链

* javascript 的继承是通过原型对象（prototype）实现的
* 原型对象的所有属性和方法，都能被实例对象共享，可以减少内存占用
* 原型对象分为显示原型对象和隐式原型对象
  * 显示原型对象是函数对象下的 `prototype` 对象，通常用来操作原型对象
  * 隐式原型对象是实例对象下的 `__proto__` 对象，通产用来查找原型对象
  * `prototype` 和 `__proto__` 在内存中引用地址相同

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/js/js-prototype.svg)