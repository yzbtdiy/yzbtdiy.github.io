---
title: Git 基础 
date: 2020-07-29 19:56:17
categories: tools
tags:
- git
---

## Git 简介

Git 是一款开源的分布式的版本控制系统，由 Linux 之父 Linus Torvalds 开发，最初的目的是为了便于维护 Linux 内核，如今已成为最流行的版本控制系统。

官网：[https://git-scm.com/](https://git-scm.com/)

<!-- more -->

### 主要功能

* 代码备份
* 版本回退
* 协作开发
* 权限控制

### 三个区域

* 工作区（working Directory）  当前开发目录
* 暂存区（stage）  通过 `git add` 追踪后的变更会保存到暂存区
* 版本库（Repository）  通过 `git commit` 可以将暂存区的更改提交至版本库

### 文件三种状态

* 已修改（modified）  修改位于工作区
* 已暂存（staged）  修改保存暂存区
* 已提交（committed）  修改提交版本库

## Git 使用

### 初始化

初次使用 Git 需要保存开发者信息，提交会记录对应的开发者

```shell
git config --global user.name "USERNAME"
git config --global user.email "USERNAME@EXAMPLE.COM"
git config --global --list
git init
```

工作区创建 .gitignore 文件可以使 git 忽略某个文件或目录，如 node_modules

`git init` 初始化本地仓库，自动在当前目录创建 .git 目录，存放 git 相关文件

* `hooks` 目录包含客户端或服务端的钩子脚本
* `info` 包含一个全局性排除文件，可以配置文件忽略
* `logs` 目录保存日志信息
* `objects` 目录存储所有数据内容，本地的版本库存放位置
* `refs` 目录存储指向数据的提交对象的指针（分支）
* `config` 文件包含项目特有的配置选项
* `description` 文件用来显示对仓库的描述信息
* `HEAD` 文件指示目前被检出的分支
* `index` 文件保存暂存区数据

### 基础操作

```shell
# 保存修改到暂存区
git add FILE
git add -A

# 提交暂存区修改到版本库
git commit -m "modify information"

# 一步提交更改到版本库（只能用于已被 git 追踪的文件，新加文件无效）
git commit -a -m "modify information" FILE
# --date 可以自定义提交时间
git commit --date="Jun 26 9:05:20 2020 +0800" -am "modify information"
# 修改 commit 注释内容(进入vim)
git commit --amend

# 查看工作区与暂存区的差异（只比较已被 git 追踪的文件，新加文件不显示）
git diff

# 查看版本库与暂存区的差异
git diff --cached

# 移除暂存区保存的修改
git restore --staged .

# 回退工作区修改（暂存区有内容从暂存区回退，暂存区为空从版本库回退，新建文件不会删除）
git checkout -- .

# 从版本库移除文件
git rm --cached FILE
```

### 版本切换

```shell
# 查看当前的 HEAD 和它之前的提交记录
git log
git log --oneline

# 查看所有分支的所有操作记录
git reflog

# 切换指定版本
git reset --hard HASH

#--soft 不撤销代码改动, 撤销 commit, 不撤销git add
#--mixed 不撤销代码改动, 撤销 commit, 撤销 git add 
#--hard 撤销代码改动, 撤销 commit, 撤销 git add

# 回退前一个版本
git reset --hard HEAD^

# 回退前两个版本
git reset --hard HEAD^^
```

### 分支管理

```shell
# 创建分支
git branch NAME

# 切换分支
git checkout NAME

# 新建并切换到该分支
git checkout -b NAME

# 分支合并（通常是在 master 分支下合并）
git merge NAME

# 删除分支
git branch -d NAME
```

分支中同名文件合并可能会发生冲突，手动编辑冲突文件再次提交即可。

## 远程仓库

```shell
# 克隆远程仓库（本地没有 git 仓库，默认远程别名为 origin）
git clone REMORE_URL

# 添加远程仓库（本地有 git 仓库）
git remote add ALIAS REMORE_URL

# 本地仓库同步到远程仓库（-u 选项可以自动关联，后续可以直接使用 git push）
git push ALIAS BRANCH

# 从远程仓库获取更新（建议用 git fetch 和 git merge，不建议直接使用 git pull）
git fetch

# 从远程仓库获取更新并合并分支
git pull
git pull REMORE_URL REMOTE_BRANCH:LOCAL_BRANCH
```

### 设置代理

```shell
git config --global http.proxy 127.0.0.1:10809
git config --global https.proxy 127.0.0.1:10809
```