---
title: Podman 简介
date: 2020-12-30 14:32:27
categories: linux
tags:
- container
---

### 简介

Podman 是一个开源的容器运行时项目, 不需要在系统上运行任何守护进程, 并且可以在没有 root 权限的情况下运行. Podman 可以管理和运行任何符合 OCI (Open Container Initiative) 规范的容器和容器镜像. 

Podman 命令与 Docker 命令基本一致, 可以直接将 docker 作为 podman 的别名使用.

CentOS8 将 Podman 作为默认容器管理工具. 

<!-- more -->

```bash
vim ~/.bashrc
  alias docker='podman'
  alias docker-compose='podman-compose'

source ~/.bashrc
```

### 国内镜像加速

用户家目录的 `registries.conf` 配置会覆盖全局配置

```bash
vim ~/.config/containers/registries.conf
  unqualified-search-registries = ["docker.io"]

  [[registry]]
  prefix = "docker.io"
  location = "ustc-edu-cn.mirror.aliyuncs.com"
```