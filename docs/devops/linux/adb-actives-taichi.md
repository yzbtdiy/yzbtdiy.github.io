---
title: Adb 激活太极阴阳门
date: 2020-06-18 10:56:31
categories: linux
tags:
- android
---

有个朋友用 vivo Y93s, 想要 QQ 微信防撤回, 所以给他推荐了太极, 后来由于 vivo 安装非应用商店软件每次都要输密码, 手机也 root 不了, 只能想别的办法搞掉应用商店了, 这时我想到了太极的阴阳门 ...

1. 首先进入手机 [设置 - 帐户], 删除所有的帐户
2. `adb shell pm list users` 查看用户列表, 确定是否有除了机主以外其他用户
3. `adb shell pm remove-user USER` 删除除了机主外的其他用户, 没有其他用户无需操作
4. `adb shell dpm set-device-owner me.weishu.exp/.DeviceAdmin` 设置太极为管理员用户, 出现 `success` 即为成功
5. 进入 [太极-阴阳门] 冻结自带应用商店, 如果不使用 vivo 账号可以一起冻结, 之后安装非应用商店软件就不需要 vivo 账号了
6. 安装酷安, 替代官方应用商店 (其他应用商店也行, 个人比较喜欢酷安)

总结: OV 手机真不适合想折腾的人... , 尤其是像我这种 "无 root, 不 android" 的人