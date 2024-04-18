---
title: go-tour 离线版
date: 2019-06-06 11:06:15
categories: golang
tags:
- golang
- tour
---

## go-tour 中文

### github 地址

[https://github.com/Go-zh/tour](https://github.com/Go-zh/tour)

### 在线学习地址

[https://tour.go-zh.org](https://tour.go-zh.org)

<!-- more -->

## 准备 go 语言环境

### 下载 golang SDK

https://studygolang.com/dl

### 下载 git

https://git-scm.com/downloads/

## 环境变量

* GOROOT（go 的安装位置）
* PATH（系统可执行文件搜索目录）
* GOPATH（存放源码文件 src、包文件 pkg 和可执行文件 bin 的目录）

**windows 的路径变量用 `%variable%` 表示，linux 用 `$variable` 表示**

## 编译 go-tour

由于 golang.org 被墙，所以国内不能正常从官网下载依赖，但可以从 github 下载对应依赖包。

### windows

由于国内网络环境，直接使用 `go get` 模块会下载失败，可以使用 goproxy 或者从 github 上下载对应模块

```powershell
git clone https://github.com/golang/net %GOPATH%/src/golang.org/x/net
git clone https://github.com/golang/tools %GOPATH%/src/golang.org/x/tools
go get github.com/Go-zh/tour
```
### linux
```bash
git clone https://github.com/golang/net $GOPATH/src/golang.org/x/net
git clone https://github.com/golang/tools $GOPATH/src/golang.org/x/tools
go get github.com/Go-zh/tour
```

**在 GOPATH 下的 bin 目录会生成名为 tour 的二进制文件，直接运行即可。**

>编译后的二进制文件下载

https://www.lanzous.com/i4asbbe