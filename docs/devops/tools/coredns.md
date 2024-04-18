---
title: CoreDNS
date: 2023-09-18 12:12:04
categories: tools
tags:
- go
- dns server
---

## CoreDNS 简介

CoreDNS 是一个使用 Golang 开发的开源 DNS 服务器, 有丰富的扩展插件. 

Github: [coredns/coredns: CoreDNS is a DNS server that chains plugins (github.com)](https://github.com/coredns/coredns)

## CoreDNS 快速创建dns-server

### 创建 CoreDNS 配置文件

文件名为 `coredns.conf`

```
localtest.com {
    file localtest.com.data
    log
}

. {
    forward . 180.76.76.76
    log
}
```

### 创建DNS区域文件

文件名为 `localtest.com.data`

```
$ORIGIN localtest.com.
@	3600 IN	SOA localtest.com. localtest.com. (
				2017042745 ; serial
				7200       ; refresh (2 hours)
				3600       ; retry (1 hour)
				1209600    ; expire (2 weeks)
				3600       ; minimum (1 hour)
				)

	3600 IN NS 192.168.1.192.

www     IN A     192.168.1.192
        IN AAAA  ::1
```

### 运行 CoreDns

```
.\coredns.exe -conf .\coredns.conf
```

