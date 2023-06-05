---
title: golang 数据类型
date: 2020-01-02 11:15:41
categories: golang
tags:
- data-type
---

## 内置基本类型（17种）

### 数值类型
* 整数类型
  * `int`（别名 `byte`）
  * `int8`
  * `int16`
  * `int32`（别名 `rune`）
  * `int64`
  * `uint`
  * `uint8`
  * `uint16`
  * `uint32`
  * `uint64`
  * `uintptr`
* 浮点数类型
  * `float32`
  * `float64`
* 复数类型
  * `complex64`
  * `complex128`

整数类型的值有四种字面量形式：

* 二进制 （binary），以 `0b` 或 `0B` 开头 ，golang 1.13 以上支持
* 八进制 （octal），以 `0` 或 `0o` 或 `0O` 开头，golang 1.13 以上支持
* 十进制（decimal），**不能**以 `0` 开头
* 十六进制（hex），以 `0x` 或 `0X` 开头

### 字符串类型

* `string`

### 布尔值类型

* `bool`

