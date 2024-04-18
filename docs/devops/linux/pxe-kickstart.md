---
title: PXE & Kickstart 安装 CentOS7
date: 2019-05-09 09:44:49
categories: linux
tags:
- pxe
- kickstart
---

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/linux/pxe-desc.svg)

## 简介

* PXE是基于 server/client 模式的技术，让客户端从远程服务器下载启动镜像，从而实现网络启动。客户端要求服务器通过 DHCP 分配 IP 地址，再通过 TFTP 下载启动镜像。
* Kickstart 将安装过程中需要手动设置的参数保存为应答文件，通过读取应答文件实现无人值守安装。
* 安装源可以通过 FTP，NFS，HTTP 等提供。

<!-- more -->

## 安装软件包

```bash
[root@server ~]# yum -y install tftp-server dhcp syslinux httpd
```

## 配置 dhcp

```bash
[root@server ~]# vim /etc/dhcp/dhcpd.conf
subnet 172.25.254.0 netmask 255.255.255.0 {
  range 172.25.254.1 172.25.254.250;
  option routers 172.25.254.254;
  default-lease-time 600;
  max-lease-time 7200;
  filename "/pxelinux.0";
}
[root@server ~]# systemctl restart dhcpd
[root@server ~]# systemctl enable dhcpd
```

## 关闭防火墙和 SELinux

```bash
[root@server ~]# systemctl stop firewalld
[root@server ~]# systemctl disable firewalld
[root@server ~]# setenforce 0
[root@server ~]# vim /etc/selinux/config
SELINUX=disabled
```

## 配置 tftp

```bash
[root@server ~]# vim /etc/xinetd.d/tftp
service tftp
{
        socket_type             = dgram
        protocol                = udp
        wait                    = yes
        user                    = root
        server                  = /usr/sbin/in.tftpd
        server_args             = -s /var/lib/tftpboot
        disable                 = no
        per_source              = 11
        cps                     = 100 2
        flags                   = IPv4
}
[root@server ~]# systemctl restart tftp
[root@server ~]# systemctl enable tftp
```

## 配置 pxe 引导文件

```bash
[root@server ~]# cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/
[root@server ~]# mkdir /var/www/html/cdrom
[root@server ~]# mount /dev/sr0 /var/www/html/cdrom
[root@server ~]# cp /var/www/html/cdrom/isolinux/{vmlinuz,initrd.img} /var/lib/tftpboot/
[root@server ~]# mkdir /var/lib/tftpboot/pxelinux.cfg
[root@server ~]# cp /var/www/html/cdrom/isolinux/isolinux.cfg /var/lib/tftpboot/pxelinux.cfg/default
[root@server ~]# vim /var/lib/tftpboot/pxelinux.cfg/default
default linux
... ...
label linux
  menu label ^Install CentOS 7
  kernel vmlinuz
  append initrd=initrd.img inst.stage2=http://172.25.254.254/cdrom ks=http://172.25.254.254/ks.cfg quiet
... ...
```

## 准备 Kickstart 无人值守文件

```bash
[root@server ~]# cp anaconda-ks.cfg /var/www/html/ks.cfg
#version=DEVEL
# System authorization information
auth --enableshadow --passalgo=sha512
# Use CDROM installation media
url --url=http://172.25.254.254/cdrom
# Use graphical install
graphical
# Run the Setup Agent on first boot
firstboot --enable
ignoredisk --only-use=sda
# Keyboard layouts
keyboard --vckeymap=us --xlayouts='us'
# System language
lang en_US.UTF-8

# Network information
network  --bootproto=dhcp --device=ens33 --onboot=off --ipv6=auto --no-activate
network  --hostname=localhost.localdomain

# Root password
rootpw --iscrypted $6$BJfADb7EusYxHOyu$aKf2OgGT3qSOKdwgvUd8y3ZI4T4ZWe40DZ4ZfN4PEA8ceFuuauBGVUsqM12RYu36w8SwdKzjbXz2kt.NdxSmn.
# System services
services --disabled="chronyd"
# System timezone
timezone Asia/Shanghai --isUtc --nontp
# System bootloader configuration
bootloader --append=" crashkernel=auto" --location=mbr --boot-drive=sda
autopart --type=lvm
# Partition clearing information
clearpart --none --initlabel

%packages
@^minimal
@core
kexec-tools

%end

%addon com_redhat_kdump --enable --reserve-mb='auto'

%end

%anaconda
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
pwpolicy user --minlen=6 --minquality=1 --notstrict --nochanges --emptyok
pwpolicy luks --minlen=6 --minquality=1 --notstrict --nochanges --notempty
%end
```

## 启动 apache，测试能否访问安装源和 ks 文件

```bash
[root@server ~]# systemctl restart httpd
[root@server ~]# systemctl enable httpd
浏览器访问 172.25.254.254/cdrom 和 172.25.254.254/ks.cfg
```

## 裸机网络引导安装系统