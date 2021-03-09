---
title: mindoc 安装
date: 2019-06-22 11:39:08
categories: linux
tags:
- mindoc
---

## 简介 

>MinDoc 是基于 go 语言的开源文档管理系统。

* GitHub: [https://github.com/lifei6671/mindoc](https://github.com/lifei6671/mindoc)

>由于基于 go 语言，所以可以非常简单通过二进制文件部署。

## 下载最新 release

```bash
[root@server ~]# mkdir /usr/local/mindoc
[root@server ~]# cd /usr/local/mindoc
[root@server mindoc]# wget https://github.com/lifei6671/mindoc/releases/download/v2.0/mindoc_linux_amd64.zip
```

<!-- more -->

## 解压

```bash
[root@server mindoc]# unzip mindoc_linux_amd64.zip
```

## 创建数据库

```bash
CREATE DATABASE mindoc_db  DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci;
```

## 修改配置

```bash
[root@server mindoc]# vim conf/app.conf
... ...
db_adapter=mysql
db_host=127.0.0.1
db_port=3306
db_database=mindoc_db
db_username=root
db_password=db_password
... ...
```

## 创建 systemd unit

```bash
[root@server mindoc]# ./mindoc_linux_amd64 service install
```

## 启动服务，开机启动

```bash
[root@server mindoc]# systemctl start mindocd
[root@server mindoc]# systemctl enable mindocd
```

## nginx 代理

```conf
server {
    listen       80;
    server_name  docs.example.com;
    charset utf-8;
    access_log  /var/log/nginx/webhook.iminho.me/access.log;
    
    location / {
        try_files /_not_exists_ @backend;
    }

    location @backend {
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host            $http_host;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_pass http://127.0.0.1:8181;
    }
}
```

## caddy 代理

```conf
http://docs.example.com {
  gzip
  proxy / 127.0.0.1:8181 {
    header_upstream X-Forwarded-For {remote}
    header_upstream Host {host}
    header_upstream X-Forwarded-Proto {scheme}
  }
}
```