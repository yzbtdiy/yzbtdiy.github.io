---
title: Elrepo 源升级 CentOS7/RHEL7 内核
date: 2019-05-10 09:40:10
categories: linux
tags:
- elrepo
- kernel
---

## 国内镜像站

* https://mirrors.tuna.tsinghua.edu.cn/elrepo/kernel/el7/x86_64/
* https://mirrors.ustc.edu.cn/elrepo/elrepo/el7/x86_64/

由于 GFW 的原因，使用 elrepo 官方源可能速度较慢，可将 baseurl 修改为国内镜像站地址。

## 导入 gpgkey

```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```

## 添加 elrepo 源

```bash
yum install https://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
```

<!-- more -->

## 更新内核

```bash
yum --enablerepo=elrepo-kernel install kernel-ml -y
```
**elrepo 提供 kernel-lt 和 kernel-ml 两种内核包，kernel-lt 基于长期支持分支，而kernel-ml 基于主线稳分支。**

## 目前最新内核为 5.10

```bash
[root@yzbtdiy ~]# uname -a
Linux yzbtdiy 5.0.10-1.el7.elrepo.x86_64 #1 SMP Sat Apr 27 08:40:16 EDT 2019 x86_64 x86_64 x86_64 GNU/Linux
```