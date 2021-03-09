---
title: mariadb galera 简单模拟
date: 2019-05-15 10:56:31
categories: linux
tags:
- mariadb
- galera
---

## 环境

* 操作平台：VMWare Workstation 15.2
* 网络模式：桥接，能访问互联网
* 三个节点系统均为 CentOS7.6

## 修改hosts文件

```bash
[root@master ~]## cat >> /etc/hosts <<eof
192.168.3.219 node2
192.168.3.210 node1
192.168.3.211 master
node1和node2都需要修改hosts文件
```

<!-- more -->

## 配置 yum 源

```bash
[root@master ~]## cat >> /etc/yum.repos.d/mariadb.repo <<eof
[mariadb]
name=mariadb
baseurl=https://mirrors.tuna.tsinghua.edu.cn/mariadb//mariadb-10.3.12/yum/centos/7/x86_64/
enabled=1
gpgcheck=0
eof
```

## 安装MariaDB

```shell
[root@master ~]## yum -y install MariaDB-server MariaDB-client galera
```

## 编辑配置文件

参数介绍：https://mariadb.com/kb/en/library/full-list-of-mariadb-options-system-and-status-variables/

```bash
[root@master ~]## vim /etc/my.cnf.d/server.cnf
[galera]
## 是否启用了wsrep复制
wsrep_on=ON

## wsrep库的位置
wsrep_provider=/usr/lib64/galera/libgalera_smm.so

## 启动时要连接的群集节点的地址
wsrep_cluster_address="gcomm://192.168.3.210,192.168.3.211,192.168.3.219"
##wsrep_sst_auth=tt:tt123
binlog_format=row

## 集群的名称，节点无法连接到不同名称的群集
wsrep_cluster_name="mariadb_cluster"

## 本节点的网络地址
wsrep_node_address=192.168.3.211

## 用于进行状态快照传输（SST）的方法
wsrep_sst_method=rsync

## 默认存储引擎
default_storage_engine=InnoDB

## 自动增量值的锁定模式，0是传统的锁模式，1是连续的，2是交错的
innodb_autoinc_lock_mode=2

## InnoDB缓冲池大小（以字节为单位）
innodb_buffer_pool_size=120M

## Allow server to accept connections on all interfaces.
bind-address=0.0.0.0

## 并行写入线程数
wsrep_slave_threads=3

## 日志何时写入
innodb_flush_log_at_trx_commit=0
```

## 拷贝配置文件至其他节点

```bash
[root@master ~]## scp /etc/my.cnf.d/server.cnf root@node1:/etc/my.cnf.d/
[root@master ~]## scp /etc/my.cnf.d/server.cnf root@node2:/etc/my.cnf.d/
在node1和node2上修改wsrep_node_address为该主机对应IP地址
```

## 启动第一个节点

```bash
[root@master ~]## galera_new_cluster
```

## 启动其他节点

```bash
[root@node1 ~]## systemctl restart mariadb
[root@node2 ~]## systemctl restart mariadb
```

## 验证

```bash
MariaDB [(none)]> show status like '%wsrep_cluster%';
+--------------------------+--------------------------------------+
| Variable_name            | Value                                |
+--------------------------+--------------------------------------+
| wsrep_cluster_conf_id    | 43                                   |
| wsrep_cluster_size       | 3                                    |
| wsrep_cluster_state_uuid | 1d02e7d0-1b92-11e9-ad2c-f313ceeb262e |
| wsrep_cluster_status     | Primary                              |
| wsrep_cluster_weight     | 3                                    |
+--------------------------+--------------------------------------+
5 rows in set (0.002 sec)

```

## galera 强制选项

| 选项 | 值 |
| --- | --- |
| wsrep_provider                | galera库位置               |
| wsrep_cluster_address         | 集群节点地址                |
| binlog_format=ROW             | 二进制日志格式              |
| default_storage_engine=InnoDB | 默认存储引擎                |
| innodb_autoinc_lock_mode=2    | 自动增量值的锁定模式         |
| innodb_doublewrite=1          | 双写缓冲                   |
| query_cache_size=0            | 高速缓存启动方法及参数详解，仅对MariaDB Galera Cluster 5.5.40，MariaDB Galera Cluster 10.0.14和MariaDB 10.1.2之前的MariaDB版本必需 |
| wsrep_on=ON                   | 启用wsrep复制（从10.1.1开始） |