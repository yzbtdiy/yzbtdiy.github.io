---
title: nginx 添加 tls 证书
date: 2019-05-07 09:29:43
categories: linux
tags: 
- nginx
- tls
---

## TLS 证书申请

* [freessl.cn](https://freessl.cn/)
* [wosign.com](https://www.wosign.com/DVSSL/DV_KuaiSSL_Free.htm)

## 保存到服务器

```
/etc/pki/tls/certs/server.pem
/etc/pki/tls/private/server.key
```

<!-- more -->

## nginx 配置

```conf
server {
#网站基础配置
   listen       80;
   listen       443 ssl;
   server_name  example.com www.example.com;
   root         /usr/share/nginx/html/blog;
   index        index.html index.php;

#ssl 配置
   ssl_certificate      /etc/pki/tls/certs/server.pem;
   ssl_certificate_key  /etc/pki/tls/private/server.key;
   ssl_session_cache    shared:SSL:1m;
   ssl_session_timeout  5m;
   ssl_protocols        TLSv1 TLSv1.1 TLSv1.2;
   ssl_ciphers          HIGH:!aNULL:!MD5;
   ssl_prefer_server_ciphers  on;

#访问 80 重定向到 https 
   if ($server_port = 80) {
      return 301 https://$server_name$request_uri;
   }

#wordpress 固定链接设置
   if (-f $request_filename/index.html){
     rewrite (.*) $1/index.html break;
   }

   if (-f $request_filename/index.php){
     rewrite (.*) $1/index.php;
   }

   if (!-f $request_filename){
     rewrite (.*) /index.php;
   }

#php fastcgi 配置
   location ~ \.php$ {
     fastcgi_pass   127.0.0.1:9000;
     fastcgi_index  index.php;
     fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
     fastcgi_param  QUERY_STRING     $query_string;
     include        fastcgi_params;
   }
}
```