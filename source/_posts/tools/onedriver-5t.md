---
title: onedriver 5t 空间
date: 2019-04-25 11:14:45
categories: tools
tags:
- onedriver
- 5t
---

## 注册 Office365

>几个 4 月 25 日可用教育邮箱或者企业授权的邮箱：

http://mail.ac.id/

http://t.odmail.cn/

http://xkx.me/

>获取临时邮箱后注册：

https://signup.microsoft.com/signup?sku=student

https://signup.microsoft.com/signup?sku=faculty

<!-- more -->

**最简单是直接使用 OneDrive 客户端**

## Rclone 挂载本地磁盘

>下载 Rclone 和 WinFsp

https://rclone.org/downloads/

http://www.secfs.net/winfsp/download/

>先安装 WinFsp，然后解压 Rclone 并添加 Path 变量，Rclone 为命令行工具

```powershell
PS C:\Users\Administrator>rclone config    #配置 Rclone
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n     #新建远程设备
name> onedrive  #命名为 onedrive
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
... ...
16 / Local Disk
   \ "local"
17 / Mega
   \ "mega"
18 / Microsoft Azure Blob Storage
   \ "azureblob"
19 / Microsoft OneDrive
   \ "onedrive"
20 / OpenDrive
   \ "opendrive"
21 / Openstack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"

Storage>19    #选择 19 Microsoft OneDrive
** See help for onedrive backend at: https://rclone.org/onedrive/ **

Microsoft App Client Id
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_id>    #直接回车
Microsoft App Client Secret
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_secret>    #直接回车
Edit advanced config? (y/n)
y) Yes
n) No
y/n> n    #不配置高级选项
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine
y) Yes
n) No
y/n> y    #使用自动配置
If your browser doesn't open automatically go to the following link: http://127.0.0.1:53682/auth
Log in and authorize rclone for access
Waiting for code...    #在浏览器弹出页面登录并授权
Got code
Choose a number from below, or type in an existing value
 1 / OneDrive Personal or Business
   \ "onedrive"
 2 / Root Sharepoint site
   \ "sharepoint"
 3 / Type in driveID
   \ "driveid"
 4 / Type in SiteID
   \ "siteid"
 5 / Search a Sharepoint site
   \ "search"
Your choice>1    #选择 1 OneDrive Personal or Business
Found 1 drives, please select the one you want to use:
0: OneDrive (business) id=b!rBB-bJmTTUC5x4DdsFsegGqsdWsGdsWGdfNdGrecuRGawNsh67RL2w_VocbTcq
Chose drive to use:> 0    #选择发现的驱动器
Found drive 'root' of type 'business', URL: https://jxjjxy-my.sharepoint.com/personal/ydwrfree_t_odmail_cn/Documents
Is that okay?
y) Yes
n) No
y/n> y    #确认
--------------------
[onedrive]
type = onedrive
token = {"access_token":"eyB2rL8gqdaXUCq7jHK3A4GCyNpcTIFSOAApurpCZNChn7nW3QVcKlwuoIZFyoJrydQZq_Qhvy1xvrJ09NkRkCC_oomlSXKJ6Xf9bKWUsyRQ_R0OJPbE0xK2dR67kuwVUjtb1kU6LODsS3cNv9cgAA","expiry":"20190425T15:30:13.6779933+08:00"}
drive_id = b!rBB-bJmTTUC5x4K7p6gZPokxAgxHfN5Ph4rvjjNRYcuRGawNsh67RL2w_VocbTcq
drive_type = business
--------------------
y) Yes this is OK
e) Edit this remote
d) Delete this remote
y/e/d> y    #确认
Current remotes:

Name                 Type
====                 ====
onedrive             onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q    #退出配置

C:\Users\Administrator>start /b rclone mount onedrive:/ o: --cache-dir D:\Temp --allow-other --vfs-cache-mode writes --allow-non-empty    #挂载为本地 O 盘
```

>使用图形化工具 RaiDrive 挂载

https://www.raidrive.com/