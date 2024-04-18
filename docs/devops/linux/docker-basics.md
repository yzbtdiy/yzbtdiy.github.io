---
title: docker 基础用法
date: 2019-07-02 11:32:27
categories: linux
tags:
- docker
- golang
---

## 获取 docker

* 可以通过 centos7 的 extras 源直接安装 docker
* 从 docker 官方获取最新版 docker ce    
参考：https://docs.docker.com/install/linux/docker-ce/centos/
* docker 中的程序未加载至内存中运行为 image（镜像），加载至内存中运行为 container（容器）

**以下为最新版 docker ce 的安装使用**

## 获取 yum 源

```bash
[root@server ~]## curl https://download.docker.com/linux/centos/docker-ce.repo > /etc/yum.repos.d/docker.repo
```

## 安装 docker ce 并运行

```bash
[root@server ~]## yum -y install docker-ce docker-ce-cli containerd.io
[root@server ~]## systemctl restart docker
```

<!-- more -->

## 查看本地网络

* 本地出现名为 docker0 的 connection 以及 device

```bash
[root@server ~]## nmcli con show
NAME     UUID                                  TYPE      DEVICE
docker0  bca532d6-7c78-4437-84b7-8fab094d7118  bridge    docker0
ens33    e0b955f8-ae58-4b8c-b5cf-dc6eb7c4a45f  ethernet  ens33
```

* device docker0 为 bridge 类型

```bash
[root@server ~]## nmcli device show docker0
GENERAL.DEVICE:                         docker0
GENERAL.TYPE:                           bridge
GENERAL.HWADDR:                         02:42:52:49:72:87
GENERAL.MTU:                            1500
GENERAL.STATE:                          100 (connected)
GENERAL.CONNECTION:                     docker0
GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/ActiveConnection/3
IP4.ADDRESS[1]:                         172.17.0.1/16
IP4.GATEWAY:                            --
IP4.ROUTE[1]:                           dst = 172.17.0.0/16, nh = 0.0.0.0, mt = 0
IP6.GATEWAY:                            --
```

## 在 dockerhub 中搜索 image

```bash
[root@server ~]## docker search httpd
NAME                                 DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
httpd                                The Apache HTTP Server Project                  2537                [OK]
centos/httpd                                                                         23                                      [OK]
centos/httpd-24-centos7              Platform for running Apache httpd 2.4 or bui…   22
```

## 下载 image 到本地

```bash
[root@server ~]## docker pull centos/httpd
Using default tag: latest
latest: Pulling from centos/httpd
a02a4930cb5d: Pull complete
628eaef4a9e0: Pull complete
20c0ca1c0cd5: Pull complete
30cf2fb1a57e: Pull complete
Digest: sha256:26c6674463ff3b8529874b17f8bb55d21a0dcf86e025eafb3c9eeee15ee4f369
Status: Downloaded newer image for centos/httpd:latest
```

### 国内源加速

`/etc/docker/daemon.json` 文件添加镜像站点

```json
{
  "registry-mirrors": [
    "http://f1361db2.m.daocloud.io",
    "https://hub-mirror.c.163.com",
    "https://ustc-edu-cn.mirror.aliyuncs.com"
  ]
}
```

[DaoCloud](https://www.daocloud.io/mirror) 镜像加速脚本

### 设置代理

* 使用国内镜像站加速可能遇到某些情况下latest并不是最新版,设置代理从原始镜像站下载可解决此问题

**systemd 配置 proxy**

```shell
[root@localhost~]# vim /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:10809"
Environment="HTTPS_PROXY=http://127.0.0.1:10809"
Environment="NO_PROXY=localhost,127.0.0.1"
[root@localhost ~]# systemctl daemon-reload
[root@localhost ~]# systemctl restart docker
```

**docker 实例配置proxy**(测试未成功)

```shell
[root@localhost ~]# vim  ~/.docker/config.json
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://127.0.0.1:10809",
     "httpsProxy": "http://127.0.0.1:10809",
     "noProxy": "127.0.0.0/8,localhost"
   }
 }
}
[root@localhost ~]# systemctl restart docker
```

## 查看本地 images

```shell
[root@server ~]## docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos/httpd        latest              2cc07fbb5000        6 months ago        258MB
```

## 运行 web container

* -d 后台运行
* --name 容器的名字
* -p 端口映射，对外提供服务
* -v 卷映射，实现数据持久化

```bash
[root@server ~]## docker run -d --name myweb -p 80:80 -v /data/web:/var/www/html centos/httpd
a7ff084c8207d20c3ba91c0a87b7e9c0a6dd141c404f302d5cca6926abf0233d
```

## 查看运行中的 container

* -a 显示已退出的 container

```bash
[root@server ~]## docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                NAMES
a7ff084c8207        centos/httpd        "/run-httpd.sh"     4 seconds ago       Up 3 seconds        0.0.0.0:80->80/tcp   myweb
```

## 删除 container

```bash
[root@server ~]## docker stop myweb
myweb
[root@server ~]## docker rm myweb
myweb
```

## 删除 image

```bash
[root@server ~]## docker rmi centos/httpd:latest
Untagged: centos/httpd:latest
Untagged: centos/httpd@sha256:26c6674463ff3b8529874b17f8bb55d21a0dcf86e025eafb3c9eeee15ee4f369
Deleted: sha256:2cc07fbb5000234e85b7ef63b6253f397491959af2a24251b6ae20c207beb814
Deleted: sha256:b6a8d07fb6bd99c422d23fbe6972939859126de0210b25daeed5c37e9255d91d
Deleted: sha256:365791a9af5080b5d029c9d3a230576a0bfd495a86651f2226d78877b64d9f0b
Deleted: sha256:e7da76d398f3e25f9ba9dc6181501f1181fc13d057a6a10e03bccc41c7bfbb32
Deleted: sha256:071d8bd765171080d01682844524be57ac9883e53079b6ac66707e192ea25956
```