---
title: javascript 变量和数据类型
date: 2019-12-17 19:48:02
categories: javascript
tags:
- variables
- data type
---

## 变量

### 定义变量

ECMAScript 的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据，每个变量仅仅是一个用于保存值的占位符而已。

```js
var num1;      //先定义后赋值
num1 = 1;

var num2 = 2;  //定义同时初始化变量

num3 = 3;      //不使用 var 关键字
```

<!-- more -->

## 命名规范

### 标识符规范

* 只能由字母，数字，下划线和 $ 组成
* 不能以数字开头
* 不能与关键字和保留字同名

### 关键字

```
break do instanceof typeof
case else new var
catch finally return void
continue for switch while
debugger* function this with
default if throw
delete in try
```

### 保留字

```
abstract enum int short
boolean export interface static
byte extends long super
char final native synchronized
class float package throws
const goto private transient
debugger implements protected volatile
double import public
```

### 命名方法

* 大驼峰    每个单词首字母都大写（VariableName）
* 小驼峰    第一个单词首字母小写，之后每个单词首字母大写（variableName）
* 下划线    单词字母均采用小写，单词之间用下划线隔开（variable_name）

## 数据类型

### 基本数据类型

* number    数字：整数，小数，科学计数法，二进制（0b），八进制（0o），十六进制（0x）
* string    字符串：使用单引号或双引号包裹内容，空字符串和空白字符串比较特殊，引用嵌需要单引号和双引号交替使用
* boolean    布尔值：true 或 false
* undefined  变量未赋值：undefined
* null	一般对对象进行初始化使用或者删除对象时使用

### 引用数据类型

* object    对象：大多数类型值都是 object 类型的实例
* array    数组：单个数组可以同时保存多种数据类型，数组大小可以动态调整
* function    函数：函数使用声明语法进行定义

## 数据类型判断

* `typeof` 用来判断值得数据类型，返回值为数据类型名的字符串
* `typeof 10` 返回 "number"
* `typeof "some message"` 返回 "stringr"
* `typeof true` 返回 "boolean"
* `typeof 未赋值变量` 返回 "undefined"
* `typeof null` 返回 "oboject"（特殊）