---
title: Linux网卡绑定(聚合)
date: 2023-06-05 17:28:02
categories: linux
tags:
  - linux
  - bonding
  - lacp
---

## bond模式

| bonding模式                            | 对应switch配置             |
| -------------------------------------- | -------------------------- |
| mode=0, (balance-rr) 平衡轮询模式      | LACP mode on, 强制链路聚合 |
| mode=1, (active-backup) 主备模式       | access端口, 无需特别配置   |
| mode=2, (balance-xor) hash均衡模式     | LACP mode on, 强制链路聚合 |
| mode=3, (brodcast) 广播模式            | LACP mode on, 强制链路聚合 |
| mode=4, (IEEE802.3ad) 动态链路聚合模式 | LACP动态协商, 建议主动模式 |
| mode=5, (balance-tlb) 发送负载均衡模式 | access端口, 无需特别配置   |
| mode=6, (balance-alb) 接收负载均衡模式 | access端口, 无需特别配置   |

<!--more-->


## nmcli命令创建bond接口

### 创建bond接口并配置地址

```shell
nmcli con add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup"

nmcli connection add type ethernet slave-type bond con-name bond0-port1 ifname ens33 master bond0

nmcli connection add type ethernet slave-type bond con-name bond0-port2 ifname ens34 master bond0

nmcli con modify bond0 ipv4.addresses "192.168.1.200/24" ipv4.gateway 192.168.1.1 ipv4.method manual
```

### 生成的配置文件如下

#### `ifcfg-bond0`

```conf
BONDING_OPTS=mode=active-backup
TYPE=Bond
BONDING_MASTER=yes
PROXY_METHOD=none
BROWSER_ONLY=no
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=bond0
UUID=432d4cd2-6ea7-4b8a-a9cf-9f82a1f758b2
DEVICE=bond0
ONBOOT=yes
BOOTPROTO=none
IPADDR=192.168.1.200
PREFIX=24
GATEWAY=192.168.1.1
```

#### `ifcfg-bond0-port1`

```conf
TYPE=Ethernet
NAME=bond0-port1
UUID=bd8fd4f8-2d59-41ec-9972-87c862364651
DEVICE=ens33
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```

#### `ifcfg-bond0-port2`

```conf
TYPE=Ethernet
NAME=bond0-port2
UUID=64027180-3fc2-435b-b571-b909409136c4
DEVICE=ens34
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```


* [7.3. 使用 NetworkManager 命令行工具 nmcli 进行网络绑定 Red Hat Enterprise Linux 7 | Red Hat Customer Portal](https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/networking_guide/sec-network_bonding_using_the_networkmanager_command_line_tool_nmcli)

## 修改配置文件创建 bond 接口


### 1.修改bond配置

以 mode 0 为例

```
modprobe bonding miimon=100 mode=0
echo "alias bond0 bonding" >> /etc/modprobe.d/bond.conf
echo "options bond0 miimon=100 mode=0" >> /etc/modprobe.d/bond.conf
```

**miimon是用来进行链路监测, miimon=100 表示系统每100ms监测一次链路连接状态，如果有一条线路不通就转入另一条线路**

### 2.修改网卡配置文件

在 `/etc/sysconfig/network-scripts` 新建bond口聚合网卡配置文件`ifcfg-bond0`

```
NAME=bond0                                #网卡名称为bond0
BOOTPROTO=static                          #配置静态ip
USERCTL=no                                #禁止非root用户管理此网卡
ONBOOT=yes                                #网络服务启动激活此网卡连接
TYPE=Bond                                 #网络类型为Bond
BONDING_MASTER=yes                        #作为bond的管理设备
BONDING_OPTS="mode=0 miimon=100"          #bond配置
IPADDR=192.168.1.128                      #ip地址
NETMASK=255.255.255.0                     #掩码
GATEWAY=192.168.1.1                       #网关
```

编辑需要作为 bond0 的 slave 设备配置文件

```
NAME=ens32
DEVICE=ens32
ONBOOT=yes
BOOTPROTO=none
USERCTL=no
MASTER=bond0
SLAVE=yes
```

### 3.重启NetworkManager服务

```
systemctl restart NetworkManager
```

**若重启NetworkManager未生效则需要重启Linux系统**

## 删除bond接口

### 1.删除bond0配置文件

```
rm -rf /etc/sysconfig/netwrok-scripts/ifcfg-bond0
rm -rf /etc/modprobe.d/bond.conf
```

### 2.修改网卡配置文件

删除作为 slave 网卡配置的 bond 相关参数(`MASTER=bond0`  `SLAVE=yes`)

### 3.卸载bonding模块

```
rmmod bonding
```

### 4.重启网络服务

```
systemctl restart NetworkManager
```
