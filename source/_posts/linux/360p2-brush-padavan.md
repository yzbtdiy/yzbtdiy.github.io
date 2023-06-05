---
title: 360 路由 P2 刷老毛子Padavan固件
date: 2019-09-09 11:51:07
categories: linux
tags:
- 360p2
- rom
---

## 刷机原因

使用 360 P2 有 3 年了，去年运营商相继提供了 IPv6 网络，然而 360 的官方固件并未提供对 IPv6 的支持，所以决定试试第三方固件，在众多第三方固件中，我选择了 HIBOY 编译的 Padavan 固件，这应该是定制化功能最多的固件，360 P2 对应固件名 `360P2_3.4.3.9-099.trx`

固件更新地址：[https://opt.cn2qq.com/padavan/](https://opt.cn2qq.com/padavan/)

## 刷机文件

打包下载：[https://www.lanzous.com/b04xx85ih](https://www.lanzous.com/b04xx85ih)
密码:360p2

<!-- more -->

| 文件 | 作用 |
| --- | --- |
| tftpd32 | 32位tftp服务器，传输文件 |
| tftpd64 | 64位tftp服务器，传输文件 |
| breed-mt7628-hiwifi-hc5661a.bin | breed，路由器的 Recovery |
| hfs.exe | 简易 web 服务器 |
| 360P2_3.4.3.9-099.trx | HIBOY 编译的 Padavan 固件，扩展功能多 |
| Tomato-Phoenix-MT76X8-MT7612E-WLLLL-V106@2018-01-13.trx | 不死鸟固件，非常简洁 |
| 降级固件-360POP-P2-V1.0.25.36330.bin | 降级固件，2.0 版本以上需要降级 |
| 调试版固件-360POP-P2-DEBUG-V1.0.42.42668.bin | 调试版固件，默认开启 telnet |

## 刷机过程

**刷机时务必使用网线连接至路由器 LAN 口进行操作**

1. 关闭 windows 防火墙，退出杀毒软件，设置 ip 为自动获取
2. 开启 windows telnet 客户端，使用第三方终端软件也可以（如 XShell，MobaXterm 等）
3. 路由器 web 控制台恢复出厂设置，刷入降级固件 `360POP-P2-V1.0.25.36330.bin`
4. 路由器 web 控制台刷入调试版固件
5.  运行 tftpd，备份路由器固件，终端执行     

```
telnet 192.168.0.1    #用户名 admin，密码是路由器登录密码
cd /tmp
cat /dev/mtd0 > all.bin
tftp -p -l all.bin -r all.bin 192.168.0.x     #windows 的 IP 地址
```

6. 运行 hfs，把 `breed-mt7628-hiwifi-hc5661a.bin` 拖入 hfs 主窗口，得到一个 web 地址： `http://192.168.0.x:8080/breed-mt7628-hiwifi-hc5661a.bin`，终端执行


```
wget http://192.168.0.x:8080/breed-mt7628-hiwifi-hc5661a.bin
mtd_write erase /dev/mtd1
cat breed-mt7628-hiwifi-hc5661a.bin > /dev/mtd1
```

7. 断电，戳 reset，通电 5 秒左右放开 reset，浏览器访问 `http://192.168.1.1` 进入 breed
8. breed 中恢复出厂设置，刷入固件 `360P2_3.4.3.9-099.trx`
9. 浏览器访问 `http://192.168.123.1`，用户名 admin，密码 admin，进入老毛子Padavan 固件 web 控制台，可自选开启IPv6