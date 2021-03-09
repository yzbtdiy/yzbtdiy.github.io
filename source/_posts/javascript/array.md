---
title: javascript 数组
date: 2019-12-22 15:15:46
categories: javascript
tags:
- array
---

## 数组

* 数组是具有相同类型或不同类型的数据有序排列的集合（索引有序）
* 数组属于对象数据类型，可以一次性存储多个数据

## 定义数组

### 字面量定义数组

```js
var arr1 = [2, 0, 1, 9];
var arr2 = ["html", 5, "css", 3, "js", "es5"];
var arr3 = [];
```

* 字面量定义是构造函数定义得简写方式，本质还是调用构造函数

<!-- more -->

### 构造函数定义数组

```js
var arr1 = new Array(2, 0, 1, 9);
var arr2 = new Array("html", 5, "css", 3, "js", "es5");
var arr3 = new Array(3);		//只有一个数字表示定义的数组长度
```

## 数组操作

### 遍历数组

```js
var arr1 = new Array("html", 5, "css", 3, "js", "es5");

console.log(arr1[0]);    //获得 "html" 
console.log(arr1[5]);    //获得 "es5"
console.log(arr1[99]);   //索引值超出数组返回 "undefined"，不报错

for (i = 0; i < arr1.length; i++) {    //遍历数组
	if (arr1[i] == "html") {
		console.log("\"html\" index is " + i); //获得 "html" 索引
	}
	if (arr1[i] == "es5") {
		console.log("\"es5\" index is " + i); //获得 "es5" 索引
	}
}
```

* 索引值从 `0` 开始，到 `arr1.length - 1` 结束
* 可以通过索引获取数组中的某个元素
* 不知道元素的索引时通过遍历数组可以获得索引

### 替换数组元素

```js
var arr1 = new Array("html", 5, "css", 3, "js", "es5");

arr1[0] = "html5";    //根据索引替换
arr1[2] = "css3";     //根据索引替换

for (i = 0; i < arr1.length; i++) {
	if (arr1[i] == "html") {
		arr1[0] = "html5";   //遍历数组替换元素
	}
	if (arr1[i] == "es5") {
		arr1[2] = "css3";    //遍历数组替换元素
	}
}
```

### 末尾追加

```js
var arr1 = new Array("html", 5, "css", 3, "js", "es5");
arr1[arr1.length] = "es6";
```

* 直接通过结尾的索引赋值即可
* 通过 `arr1.push()` 函数可以在数组结尾追加元素

### 末尾删除

```js
arr.length--;
```

* 通过 `arr1.pop()` 函数可以在数组结尾删除元素

### 头部插入

```js
for (var i = arr1.length - 1; i >= 0; i--) {    //其它位置修改循环条件即可
	arr1[i + 1] = arr1[i];
}
arr1[0] = 2019;
```

* 所有元素先整体向后，再单独为第一个元素赋值
* 通过 `arr1.unshift()` 函数可以在数组头部插入元素

### 头部删除

```js
for(var i = 1; i < arr1.length; i++){
	arr1[i - 1] = arr1[i];
}
arr1.length--;
```

* 所有元素向前移，覆盖第一个，删除最后一个空元素
* 通过 `arr1.shift()` 函数可以删除数组头部元素

### 数组反转

```js
for (var i = 0; i < arr.length / 2; i++) {
	var temp = arr[i];
	arr[i] = arr[arr.length - 1 - i]
	arr[arr.length - 1 - i] = temp;
}
```

* 变量自增小于中间数，然后首尾替换

### 冒泡排序

```js
function bubbleSort(arrToSort) {
  // 定义第三方变量,交换数值使用
  var temp;
  // 执行排序的轮数,比数组元素个数少 1
  for (var i = 0; i <= arrToSort.length - 1; i++) {
    // 每轮排序执行的比较次数,每轮减少,同时 j 表示元素的索引
    for (var j = 0; j <= arrToSort.length - 1 - i; j++) {
      // 若前一个元素比后一个元素大,则交换位置
      if (arrToSort[j] >= arrToSort[j + 1]) {
        temp = arrToSort[j + 1];
        arrToSort[j + 1] = arrToSort[j];
        arrToSort[j] = temp;
      }
    }
  }
  // 返回值为排序后的数组
  return arrToSort;
}

var arrNeedToSort = [12, 22, 11, 5, 2, 44, 12, 43, 55, 3];
console.log(bubbleSort(arrNeedToSort));
```

## 伪数组

* 有 length 属性，可以索引通过获取内部数据，但不能调用数组的方法。

### 伪数组转真数组

* `let arr = [].slice.call(fakeArr)`
  * `[].slice === Array.prototype.slice` true
  * `[].__proto__.slice === Array.prototype.slice`