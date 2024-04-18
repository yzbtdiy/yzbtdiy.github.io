---
title: 开启 TCP BBR
date: 2019-07-19 11:23:29
categories: linux
tags:
- bbr
- kernel
---

>Linux kernel 4.9 以上可以直接开启 TCP 拥塞控制算法 BBR (Bottleneck Bandwidth and RTT)。

## 查看内核版本

```bash
[root@CentOS7 ~]# uname -a
Linux CentOS7 5.2.1-1.el7.elrepo.x86_64 #1 SMP Sun Jul 14 08:15:04 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux
```

如果内核版本过低请升级内核，参考：

https://www.yzbtdiy.com/linux/elrepo-update-kernel.html

<!-- more -->

## 添加系统参数

```bash
[root@CentOS7 ~]# echo 'net.core.default_qdisc=fq' >> /etc/sysctl.conf
[root@CentOS7 ~]# echo 'net.ipv4.tcp_congestion_control=bbr' >> /etc/sysctl.conf
```

## 加载系统参数

```bash
[root@CentOS7 ~]# systctl -p
... ...
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
```

## 验证是否生效

```bash
[root@CentOS7 ~]# sysctl net.ipv4.tcp_available_congestion_control
net.ipv4.tcp_available_congestion_control = reno cubic bbr

[root@CentOS7 ~]# sysctl net.ipv4.tcp_congestion_control
net.ipv4.tcp_congestion_control = bbr

[root@CentOS7 ~]# lsmod | grep bbr
tcp_bbr                20480  24
```