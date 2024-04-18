---
title: 阿里云服务器升级 CentOS8 
date: 2020-02-12 10:16:20
categories: linux
tags:
- linux
---

CentOS8 发布有段时间了，阿里云官方暂时还没有提供新版镜像，偶然间看到 arloor 成功在阿里云上安装 CentOS8 并且提供了脚本，在此表示感谢。

[http://arloor.com/posts/netinstall-centos8/](http://arloor.com/posts/netinstall-centos8/)

<!-- more -->

思路是下载 CentOS8 的 vmlinuz 和 initrd.img 文件，然后编辑 grub.cfg 添加启动菜单，网络引导安装系统，通过阿里云提供的 vnc 进行操作，这确实是个安装自定义镜像的好办法，既然提供了脚本，就直接跑脚本吧。

```bash
wget -qO install.sh http://arloor.com/install-centos8-from-centos7.sh && bash install.sh
```

在阿里云的 vnc 界面看到的熟悉的 CentOS 安装界面，然后就是正常的安装流程了，折腾了十几分钟，完美安装 CentOS8-Stream（滚动发行版）。

webhook 和 caddy 都是 golang 编译后的可执行文件，二进制文件 + service 文件 + 配置文件，部署完成。

整个升级过程用了不到半小时，网站在这段时间自然是无法访问了（如果有人访问的话）。

用上了新版 CentOS8 尽管没有太大的意义，但对我来说这就算是一种乐趣吧。