---
title: 设置 goproxy 代理
date: 2019-08-03 13:35:41
categories: golang
tags:
- proxy
- cdn
---

由于国内网络环境的影响，使用 `go get` 常常会遇到模块下载失败的问题，于是便有了 goproxy。

## github 项目介绍

https://github.com/goproxy/goproxy.cn/blob/master/README.zh-CN.md

## 使用 goproxy

添加环境变量即可使用

### Linux

```bash
echo 'export GOPROXY=https://goproxy.cn' >> /etc/bashrc && source /etc/bashrc
```

### Windows

```powershell
setx GOPROXY "https://goproxy.cn"
```