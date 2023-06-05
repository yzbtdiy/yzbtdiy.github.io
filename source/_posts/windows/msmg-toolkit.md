---
title: Windows 精简利器 MSMG Toolkit
date: 2020-06-21 10:14:34
categories: windows
tags:
- os
---

## 简介

MSMG Toolkit 是基于命令行的 Windows 系统精简工具, 可以对 Windows 镜像进行深度精简, 彻底删除不需要的软件和功能(包括微软的同步服务, 照片查看器和视频播放器等), 可以自定义 list 批量删除内置软件, 虽然没有华丽的 GUI, 但绝对称得上是神器, 免费使用, 个人感觉比 NTLite(免费许可) 好用

官网: [https://msmgtoolkit.in/](https://msmgtoolkit.in/)

下载地址: [https://msmgtoolkit.in/download.html](https://msmgtoolkit.in/download.html)

* 官方下载地址是 MEGA 网盘, 部分地区需要科学上网
* [蓝奏云下载](https://yzbtdiy.lanzoui.com/b04yrlnpa)  不定期更新

<!-- more -->

## 使用

下载完解压得到以下文件

```
Bin                 //精简工具二进制文件
Custom              //自定义资源
Drivers             //驱动
DVD                 //ISO 内文件的拷贝 
ISO                 //MSDN 原版 ISO 存放位置
Logs                //日志
Mount               //win文件挂载目录
Packs               //附加软件包
Temp                //临时目录
Updates             //更新补丁
WHD                 //WHD 文件目录
Changelog.txt       //更新日志
CREDITS.txt         //第三方程序说明
DONATE.jpg          //捐赠
LICENSE.txt         //许可协议
README.txt          //README 文件
Start.cmd           //开始脚本
Toolkit.cmd         //工具脚本
Website.url         //官网链接
```

解压后运行 Start.cmd 或 Tookit.cmd 均可, 启动时输入 "A" 同意使用协议, 然后回车添加环境变量, 会出现以下选项

```
[1]   Source      //镜像源, 可以直接选 iso 文件,也可自行解压至 dvd 目录
[2]   Convert     //格式转化 esd <==> wim
[3]   Integrate   //集成驱动, 更新等
[4]   Remove      //精简系统自带软件和功能
[5]   Customize   //启用或禁用系统功能, 通过 xml 文件配置 Metro Apps
[6]   Apply       //保存更改
[7]   Target      //生成新的 iso 或制作启动盘
[8]   Tools       //wim 另存为, 一些配置选项
[X]   Quit        //退出
```

* 汉化版更新不是太及时, 建议使用英文原版
* 务必集成更新后精简系统, 否则会报错
* Bin 目录下的 Lists 目录可以自定义精简软件或功能列表, XXX_Templates 文件夹内是模板
* 精简后的系统可能无法安装累计更新补丁

## 感受

个人使用 MSMG Toolkit 精简了除了 Microsoft Store 的所有应用, 彻底删除了 Windows Defender, 也干掉了微软同步, 系统异常干净, 除了不能安装每个月的累计更新外没有其他问题