---
title: Nmap 参数
date: 2020-12-26 13:01:48
categories: security
tags: 
- scan
---

### 端口状态 

端口状态

* Open    开放状态
* Closed    关闭状态
* Filterd    被过滤无法接收到返回的 probe 状态
* UnFilterd    收到返回的 probe, 但是无法确认
* Open/UnFilterd    开放或未过滤状态
* Closed/UnFilterd    关闭或未过滤状态

Nmap 会先判断输入的参数中是否包含域名, 若包含域名则利用 DNS 服务器进行域名解析, 然后发送 `ICMP Echo Request` 来探测主机存活性, 根据返回的数据包信息获取信息. 

Nmpa 在探测域名之前需要通过 DNS 进行域名解析, 可以通过 `--dns-servers` 指定特定的 DNS 服务器.

已知主机存活或防火墙开启的机器, 可以使用 `-Pn` 停止探测之前的 ICMP 请求, 避免触发防火墙的安全机制. 

<!-- more -->

### 服务指纹

知道目标系统中服务的指纹信息有助于更好的进行渗透测试, 服务指纹信息包括服务端口, 服务名和版本等信息. 

Nmap 通过向目标主机发送多个 UDP 与 TCP 数据包并分析其响应来进行操作系统指纹识别, 根据数据包中的协议标记, 选项和数据, 可以推断发送数据包的操作系统. 

```shell
[root@kali ~]# nmap -sV 192.168.3.38
Nmap scan report for 192.168.3.38
Host is up (0.00013s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.0 (protocol 2.0)
80/tcp   open  http    Apache httpd 2.4.37 ((centos))
3306/tcp open  mysql   MySQL 5.5.5-10.5.8-MariaDB
MAC Address: 00:0C:29:8E:42:8F (VMware)
```

**侵略性探测** 

* `-A`    获取目标服务器更详细的信息
* `-v`    显示扫描过程
* `-T4`    `T0`-`T5` 6 个级别, 前两个级别用于 IDS 躲避, `T4` 属于性能时间折中的选择, [详细说明](https://wizardforcel.gitbooks.io/nmap-man-page/content/11.html)

```shell
[root@kali ~]# nmap -A -v -T4 192.168.3.38
Nmap scan report for 192.168.3.38
Host is up (0.00079s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.0 (protocol 2.0)
| ssh-hostkey:
|   3072 de:2c:af:fd:04:77:8f:67:69:38:eb:b8:6a:1d:d8:13 (RSA)
|   256 34:4d:9d:86:24:04:dc:1d:4c:86:8b:a4:66:eb:7b:d1 (ECDSA)
|_  256 2a:ac:d7:fb:2d:7c:4f:8c:1f:d5:f3:23:3d:47:11:9b (ED25519)
80/tcp   open  http    Apache httpd 2.4.37 ((centos))
| http-methods:
|_  Potentially risky methods: TRACE
|_http-server-header: Apache/2.4.37 (centos)
|_http-title: Target Machine
3306/tcp open  mysql   MySQL 5.5.5-10.5.8-MariaDB
| mysql-info:
|   Protocol: 10
|   Version: 5.5.5-10.5.8-MariaDB
|   Thread ID: 12187
|   Capabilities flags: 63486
|   Some Capabilities: Support41Auth, Speaks41ProtocolOld, DontAllowDatabaseTableColumn, ConnectWithDatabase, SupportsTransactions, ODBCClient, FoundRows, IgnoreSigpipes, IgnoreSpaceBeforeParenthesis, InteractiveClient, Speaks41ProtocolNew, SupportsLoadDataLocal, SupportsCompression, LongColumnFlag, SupportsMultipleStatments, SupportsMultipleResults, SupportsAuthPlugins
|   Status: Autocommit
|   Salt: RV7PmUA':1%dJ%uC-XSu
|_  Auth Plugin Name: mysql_native_password
MAC Address: 00:0C:29:8E:42:8F (VMware)
Device type: general purpose
Running: Linux 3.X|4.X
OS CPE: cpe:/o:linux:linux_kernel:3 cpe:/o:linux:linux_kernel:4
OS details: Linux 3.2 - 4.9
Network Distance: 1 hop
```

* `-sC`   `--script=default` 使用 Nmap 脚本进行探测
* `-sV`    探测目标机器上的服务信息
* `-O`    探测目标机器的操作系统信息

```shell
[root@kali ~]# nmap -sC -sV -O 192.168.3.8
Nmap scan report for 192.168.3.38
Host is up (0.00068s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.0 (protocol 2.0)
| ssh-hostkey:
|   3072 de:2c:af:fd:04:77:8f:67:69:38:eb:b8:6a:1d:d8:13 (RSA)
|   256 34:4d:9d:86:24:04:dc:1d:4c:86:8b:a4:66:eb:7b:d1 (ECDSA)
|_  256 2a:ac:d7:fb:2d:7c:4f:8c:1f:d5:f3:23:3d:47:11:9b (ED25519)
80/tcp   open  http    Apache httpd 2.4.37 ((centos))
| http-methods:
|_  Potentially risky methods: TRACE
|_http-server-header: Apache/2.4.37 (centos)
|_http-title: Target Machine
3306/tcp open  mysql   MySQL 5.5.5-10.5.8-MariaDB
| mysql-info:
|   Protocol: 10
|   Version: 5.5.5-10.5.8-MariaDB
|   Thread ID: 4
|   Capabilities flags: 63486
|   Some Capabilities: FoundRows, ConnectWithDatabase, IgnoreSigpipes, SupportsTransactions, IgnoreSpaceBeforeParenthesis, Speaks41ProtocolOld, Support41Auth, ODBCClient, SupportsCompression, InteractiveClient, DontAllowDatabaseTableColumn, SupportsLoadDataLocal, Speaks41ProtocolNew, LongColumnFlag, SupportsMultipleStatments, SupportsMultipleResults, SupportsAuthPlugins
|   Status: Autocommit
|   Salt: Jc5{1{;UvtdyRoVC+M$i
|_  Auth Plugin Name: mysql_native_password
MAC Address: 00:0C:29:8E:42:8F (VMware)
Device type: general purpose
Running: Linux 3.X|4.X
OS CPE: cpe:/o:linux:linux_kernel:3 cpe:/o:linux:linux_kernel:4
OS details: Linux 3.2 - 4.9
Network Distance: 1 hop
```

### 主机发现

* `-sn`    使用 ping 探测主机存活性, 扫描过程用到了 `TCP SYN` 扫描, `ICMP echo Request` 等来探测主机存活, 禁用了端口扫描, `-sP` 结果相同
* `-oX`    将扫描结果保存为 xml 文件, `-oN` 保存为文本, `-oS` 保存为 script, `-oG` 保存为 kiddi3

```shell
[root@kali ~]# nmap -sn 192.168.3.0/24 -oX scan.xml
Nmap scan report for 192.168.3.1
Host is up (0.0066s latency).
MAC Address: A8:0C:63:5F:CD:F9 (Huawei Technologies)
Nmap scan report for 192.168.3.24
Host is up (0.036s latency).
MAC Address: 74:38:B7:34:5C:2F (Canon)
Nmap scan report for 192.168.3.38
Host is up (0.00050s latency).
MAC Address: 00:0C:29:8E:42:8F (VMware)
```

### 端口探测

* `-p`    指定端口进行测试
  * 使用 `,` 分割多个端口, `m-n` 指定端口范围, `-` 检测所有端口
  * `T:80,U:53` 可以通过 `T` 和 `U` 关键字指定协议, udp 协议需要时使用 `-sU`
  * 可以直接通过协议名查看端口, 如 `http`, `dns` 等, 协议名可以使用 `*` 模糊匹配

```shell
[root@kali ~]# nmap -p- 192.168.3.38
Nmap scan report for 192.168.3.38
Host is up (0.0011s latency).
Not shown: 65532 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
3306/tcp open  mysql
MAC Address: 00:0C:29:8E:42:8F (VMware)
```

### NSE (Nmap Script Engine)

* Nmap 内置许多针对特定任务的扫描脚本, 使用 `--script` 指定需要执行的脚本
* Linux 版本 Nmap 内置脚本位于 `/usr/share/nmap/scripts/` 目录中

```shell
[root@kali ~]# nmap --script http-title,http-headers 192.168.3.38
Nmap scan report for 192.168.3.38
Host is up (0.000059s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
| http-headers:
|   Date: Mon, 11 Jan 2021 08:08:27 GMT
|   Server: Apache/2.4.37 (centos)
|   Last-Modified: Mon, 04 Jan 2021 06:23:16 GMT
|   ETag: "1f5-5b80d201a5b45"
|   Accept-Ranges: bytes
|   Content-Length: 501
|   Connection: close
|   Content-Type: text/html; charset=UTF-8
|
|_  (Request type: HEAD)
|_http-title: Target Machine
3306/tcp open  mysql
MAC Address: 00:0C:29:8E:42:8F (VMware)
```

* Nmap 使用 vuln 分类脚本可以更快找到目标的信息与弱点

```shell
[root@kali ~]# nmap -sV --script vuln 192.168.3.38
Pre-scan script results:
| broadcast-avahi-dos:
|   Discovered hosts:
|     224.0.0.251
|   After NULL UDP avahi packet DoS (CVE-2011-1002).
|_  Hosts are all up (not vulnerable).
Nmap scan report for 192.168.3.38
Host is up (0.00097s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.0 (protocol 2.0)
| vulners:
|   cpe:/a:openbsd:openssh:8.0:
|       CVE-2020-15778  6.8     https://vulners.com/cve/CVE-2020-15778
|       CVE-2019-16905  4.4     https://vulners.com/cve/CVE-2019-16905
|_      CVE-2020-14145  4.3     https://vulners.com/cve/CVE-2020-14145
80/tcp   open  http    Apache httpd 2.4.37 ((centos))
| http-csrf:
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=192.168.3.38
|   Found the following possible CSRF vulnerabilities:
|
|     Path: http://192.168.3.38:80/mutillidae/
|     Form id:
|     Form action: https://www.paypal.com/cgi-bin/webscr
|
|     Path: http://192.168.3.38:80/mutillidae/index.php?page=secret-administrati
```