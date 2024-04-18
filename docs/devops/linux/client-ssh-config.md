---
title: ssh 客户端配置 ssh_config
date: 2019-05-07 10:33:23
categories: linux
tags:
- linux
- ssh
---

## 配置文件

**用户配置文件优先级高于系统配置文件**

```bash
~/.ssh/config              #用户配置文件
/etc/ssh/ssh_config        #系统配置文件
```

<!-- more -->

## 常用配置选项

```bash
Host                #别名
    HostName        #主机名或 IP 地址
    Port            #端口
    User            #用户名
    IdentityFile    #密钥文件的路径
```

**可以直接 ssh host（别名）即可登录**

```bash
ssh HOST
```