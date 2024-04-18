---
title: Github & jsDelivr & PicGo 免费图床
date: 2020-09-04 20:12:04
categories: tools
tags:
- cdn
---

虽然目前网络上免费图床有不少, 但图片保存到 Github 绝对是最不容易丢失的, 
加上 jsDelivr 的免费 cdn (目前延迟非常低, 自测联通宽带的延迟在 30ms 左右), 
配合 PicGo 桌面软件可以很方便的上传和获取外链地址, 是个很不错的选择

## 配置

具体配置参考[官方文档](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A)

简单就是以下几步: 

* 在 github 新建仓库
* settings --> developer settings --> personal access tokens 生成 token
* 在 PicGo 中 Github 图床选项中配置仓库, 分支, token, 存储路径, 自定义域名即可
  * 2020 年 10 月 1 日, github 官方将默认的 master 分支替换为 main [官方说明](https://github.com/github/renaming)
  * 自定义域名格式如下
  * `https://cdn.jsdelivr.net/gh/USERNAME/REPO_NAME@BRANCH_NAME/DIR_NAME/FILE_NAME`

<!-- more -->

## 刷新缓存

如果更新了同名文件, jsDelivr 缓存可能不会即使刷新, 
将资源路径的 `https://cdn.jsdelivr.net/` 替换为 `https://purge.jsdelivr.net/`后, 
在浏览器地址栏访问该地址后页面返回数据状态为 `"status":"ok"` 即刷新成功