---
title: 安装新版 wordpress
date: 2019-05-06 09:22:11
categories: linux
tags:
- lnmp
- wordpress
---

>不知不觉，wordpress 已经更新到 5.X 了，第一次接触 wordpress 还在新浪云上，那时候实名认证后每个月有免费的云豆，wordpress 版本是 3.6，那时作为初中生的我有了一个 wordpress 博客激动了好久，如今 wordpress 已经更新到 5.X 了，新版 wordpress 对安装环境有了新的要求。5.X 的 wordpress 不再支持 php5 了，需要安装 php7 才行。

## 添加 yum 源

添加 epel，ius，mariadb，nginx 的 yum 源

```bash
bash <(curl -s -L https://git.io/fjlc4)
```

## 安装所需软件

```bash
yum -y install nginx mariadb-server php72u-common php72u-mysqlnd php72u-fpm-nginx php72u-gd php72u-pecl-memcached php72u-opcache
```

<!-- more -->

## 环境初始化

### nginx 配置

nginx 配置文件 `/etc/nginx/conf.d/default.conf`

```conf
server {
    listen       80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html/wordpress;
        index  index.php index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        root           /usr/share/nginx/html/wordpress;
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

### mariadb 初始化

```bash
systemctl start mariadb
mysql_secure_installation      #设置root密码
mysql -uroot -p密码 -e "create database wordpress;"
```

### 启动服务

```bash
systemctl restart nginx mariadb php-fpm
```

## 下载 WordPress 并解压

```bash
wget https://wordpress.org/latest.tar.gz
tar Cxf /usr/share/nginx/html/ latest.tar.gz
```

## 权限处理

```bash
chown -R php-fpm:php-fpm /usr/share/nginx/html/wordpress
```

## 浏览器输入域名或 ip 地址开始安装向导