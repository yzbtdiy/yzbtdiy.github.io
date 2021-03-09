---
title: 更新 Hexo5 & NexT8
date: 2020-08-31 19:58:30
categories: default
tags:
- site
---

7 月 29 日 静态网站生成器 Hexo 发布了 5.0.0 版本, 由于担心主题的兼容问题, 没有第一时间更新

8 月 1日 NexT 8 主题发布 RC5 版本, 更新了 Hexo 5 相关文档, 在本地尝试了一下, 没有线上部署

8 月 31 日 NexT 8 终于发布正式版了, 此时 Hexo 也更新至 5.1.0 了, 可以放心更新了

参考文档: [https://theme-next.js.org/docs/](https://theme-next.js.org/docs/)

升级需要注意: 

* Hexo 5 主题可以作为第三方依赖包直接通过 npm 或 yarn 安装
* 覆盖主题配置文件位置及命名发生改变
  * old: `source/data/next.yml`
  * new: `_config.next.yml`

