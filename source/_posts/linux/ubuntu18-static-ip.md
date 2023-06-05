---
title: ubuntu18 设置固定 ip 地址
date: 2019-9-20 11:45:25
categories: linux
tags:
- ubuntu
---

## IP 配置

* ubuntu 18 网络管理使用的是 `networkd`，对应服务为 `systemd-networkd`，管理命令为 `netplan`
* 设置固定 ip 需要修改 `/etc/netplan/` 目录下对应的 yaml 文件，格式可以参考 `man netplan`
* 修改后使用 `netplan apply` 应用配置

<!-- more -->

## DNS 配置

* `/etc/resolv.conf` 由 systemd-resolved 生成
* 修改 `/etc/netplan/` 目录下对应的 yaml 文件中的 DNS 参数同样有效
* 通过 `/etc/resolv.conf` 查看当前 dns 为 127.0.0.1
* 通过 `netstat` 可以发现本地 53 号端口由 `systemd-resolve` 进程侦听
* 查看 `/run/systemd/resolve/resolv.conf` 文件可以得知目前使用的真实 DNS

`/etc/netplan/` yaml 文件模板

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eno1:
      addresses:
      - 10.0.0.10/24
      - 11.0.0.11/24
      nameservers:
        addresses:
          - 8.8.8.8
          - 8.8.4.4
      routes:
      - to: 0.0.0.0/0
        via: 10.0.0.1
        metric: 100
      - to: 0.0.0.0/0
        via: 11.0.0.1
        metric: 100
```