---
title: Nodejs 基础
date: 2020-03-03 19:47:18
categories: javascript
tags:
- node
---

## Nodejs  简介

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

* [Nodejs 中文网(http://nodejs.cn/api/)
* [Node.js 技术栈](https://www.nodejs.red/)

<!-- more -->

## Buffer

* Buffer 用于读取或操作二进制数据流，做为 Node.js API 的一部分使用时无需 require。
* Buffer 用于操作网络协议、数据库、图片和文件 I/O 等一些需要大量二进制数据的场景。
* Buffer 在创建时大小已经被确定且是无法调整的，在内存分配这块 Buffer 是由 C++ 层面提供而不是 V8。

```js
// 创建 Buffer，初始化为 0
const buffer1 = Buffer.alloc(10);

// 创建 Buffer，不进行初始化，存在随机数据
const buffer2 = Buffer.allocUnsafe(10);

// 根据字符串内容创建 Buffer
const buffer3 = Buffer.from("nodejs");

// 将 Buffer 内容转化为字符串 .toString
buffer3.toString();

// 读取修改 Buffer 内容
buffer3[1] = 78;
```

## fs


### 文件写入

```js
const fs = require("fs");
// 异步写入
fs.write("PATH_TO_FILE","CONTENT"[,OPTION],CALLBACK)

// 同步写入
fs.writeSync("PATH_TO_FILE","CONTENT",CALLBACK)
```

OPTION 选项
* `encoding` 默认 `'utf8'`
* `mode` 默认  `0o666`
* `flag` 默认 `'w'`