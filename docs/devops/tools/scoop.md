---
title: Windows 包管理工具 Scoop
date: 2020-05-01 22:26:07
categories: tools
tags:
- scoop
---

[Scoop](https://scoop.sh/) 是一款强大的 Windows 包管理工具，可以通过命令行便捷快速的安装软件，类似于 Linux 下的 yum，apt，pacman 等工具。

##  安装配置

**添加环境变量**（自定义安装路径，可选）

```powershell
# 用户环境变量
$env:SCOOP='D:\ScoopApp'
[environment]::setEnvironmentVariable('SCOOP',$env:SCOOP,'User')
# 全局环境变量
$env:SCOOP_GLOBAL='D:\GlobalScoopApps'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'Machine')
```

<!-- more -->

**执行安装脚本**

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
# or shorter
iwr -useb get.scoop.sh | iex
```

**允许当前用户 powershell  执行远程脚本**

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

**添加软件仓库**

```powershell
# 查看可添加仓库
scoop bucket known
# 添加仓库
scoop bucket add BUCKET_NAME
```

## 使用

**安装卸载**

```powershell
# 当前用户安装
scoop install/uninstall PACKAGE_NAME
# 全局安装
scoop install/uninstall PACKAGE_NAME -g
```

**搜索包**

```powershell
scoop search KEYWORD
```

**更新包**

```powershell
scoop update *
scoop update * -g
```

**删除旧版本**

```powershell
scoop cleanup *
scoop cleanup * -g
```

**清除缓存**

```powershell
scoop cache rm *
```

**设置代理，加速下载**

```powershell
scoop config proxy 127.0.0.1:10809
```

**切换版本，重装系统后可以用此命令修复环境变量**

```powershell
scoop reset PACKAGE_NAME
```

**使用aria2加速多线程下载**

```powershell
scoop install aria2 -g
scoop config aria2-enabled true  //启用 aria2
scoop config aria2-enabled false  //禁用 aria2
```