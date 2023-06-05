---
title: 新版 OpenVAS 安装使用
date: 2021-02-22 10:01:48
categories: tools
tags: 
- scan
---

## Openvas 安装

目前 OpenVAS 的最新版为 20.8.1, 安装包名与 cli 都已改名为 gvm, 以下为 kali linux 上的安装步骤

### 安装 gvm

```shell
[root@kali ~]# apt install gvm -y
[root@kali ~]# gvm-setup
```

如果 OpenVAS 的数据下载失败, 可以使用 proxychains 配置代理

### 修改 admin 密码

`gvm-setup` 过程会生成非常复杂的密码, 不便于记忆, 可以通过如下命令修改密码

如果不使用 runuser 会无法修改密码

```shell
[root@kali ~]# runuser -u _gvm -- gvmd --user=admin --new-password=password
```

<!-- more -->

### 修改侦听地址

OpenVAS 的 Web 控制台默认侦听地址为 127.0.0.1, 只能在安装 OpenVAS 的系统中访问

若 OpenVAS 安装到虚拟机中, 物理机浏览器无法访问, 修改侦听地址为 0.0.0.0 或 虚拟机 ip 即可

```shell
[root@kali ~]# vim /lib/systemd/system/greenbone-security-assistant.service
ExecStart=/usr/sbin/gsad --listen=0.0.0.0 --port=9392
[root@kali ~]# systemctl daemon-reload
```

### 启动服务

OpenVAS 的 Web 控制台默认端口是 9392, 需要通过 https 协议访问, 初次访问需要添加信任

```shell
[root@kali ~]# gvm-start
```
