---
title: javascript 分支与循环
date: 2019-12-20 21:10:57
categories: javascript
tags:
- loop
- judgment
---

## 分支

### 单分支

```js
if (condition){
    statement
}
```

* 满足 condition 条件执行 statement 语句，不满足则不执行

### 双分支

```js
if (condition){
    statement1
} else {
    statement2
}
```

* 满足 condition 条件执行 statement1，否则执行 statement2

<!-- more -->

### 多分支 if...else...

```js
if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
} else {
    statementN
}
```

### 多分支 switch...case...

```js
switch (value) {
    case value1 :
        statement1;
        break;
    case value2 :
        statement2;
        break;
    case value3 :
        statement3;
        break;
    default:
        statementN;
        break;
}
```

## 循环

### for

```js
for (initialization; condition; auto-increment or auto-decrement) {
    statement;
}
```

**死循环**

```js
for(;true;){
    statement;
};

for(;true;);

for(;;);
```

### while

```js
while (condition) {
    statement;
}
```

### do ... while

```js
do {
    statement;
} while (condition);
```

* 若条件为假，while 的循环体一次都不执行，但 do ... while 会执行一次循环体

## 练习

### 乘法表

```js
for (i = 1; i < 10; i++) {
	for (j = 1; j <= i; j++) {
		document.write(j + '*' + i + '=' + i * j + "&emsp;");
	}
	document.write("<br>");
}
```

### 100 以内的质数

```js
var flag = true;
for (var i = 1; i < 100; i++) {
	for (var j = 2; j < i; j++) {
		if (i % j == 0) {
			flag = false;
			break;
		}
	}
	if (flag && i != 1) {
		console.log(i);
	}
	flag = true;
}
```