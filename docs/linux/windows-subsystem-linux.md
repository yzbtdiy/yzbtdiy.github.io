---
title: window10 linux 子系统
date: 2019-07-28 13:44:50
categories: linux
tags:
- linux
- subsystem
---

## 微软官方文档：

https://docs.microsoft.com/zh-cn/windows/wsl/install-win10

## 启用 "适用于 Linux 的 Windows 子系统" 功能

```
“控制面板” -> “程序和功能” -> “启用或关闭 Windows 功能” -> 勾选 “适用于 Linux 的 Windows 子系统”
```

或者使用 powershell 命令（powershell 现已开源）

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

<!-- more -->

## 从 Win10 应用商店获取 Linux 发行版

- [Ubuntu 16.04 LTS](https://www.microsoft.com/store/apps/9pjn388hp8c9)
- [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)
- [OpenSUSE Leap 15](https://www.microsoft.com/store/apps/9n1tb6fpvj8c)
- [OpenSUSE Leap 42](https://www.microsoft.com/store/apps/9njvjts82tjx)
- [SUSE Linux Enterprise Server 12](https://www.microsoft.com/store/apps/9p32mwbh6cns)
- [SUSE Linux Enterprise Server 15](https://www.microsoft.com/store/apps/9pmw35d7fnlx)
- [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)
- [Debian GNU/Linux](https://www.microsoft.com/store/apps/9MSVKQC78PK6)
- [WSL 的 Fedora Remix](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)
- [Pengwin](https://www.microsoft.com/store/apps/9NV1GV1PXZ6P)
- [Pengwin 企业](https://www.microsoft.com/store/apps/9N8LP0X93VCP)
- [Alpine WSL](https://www.microsoft.com/store/apps/9p804crf0395)

## 安装完后需要初始化，创建普通用户并设置密码，root 用户密码可以通过 sudo 修改

在 Win10 Linux 子系统中设置网络，修改主机名，管理磁盘，关机重启等某些方面存在一些问题，和使用虚拟机安装 linux 系统是有一定区别的。