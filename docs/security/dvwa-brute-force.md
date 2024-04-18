---
title: DVWA Brute Force
date: 2020-12-18 13:01:48
categories: dvwa
tags: 
- brute
---

## 暴力破解

### low 级别

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-low.jpg)

Source

```php
SELECT * FROM `users` WHERE user = '$user' AND password = '$pass';
```

Username 输入 `admin' or '1' = '1` 进行 sql 注入

```php
SELECT * FROM `users` WHERE user = 'admin or '1' AND password = '';
```

<!-- more -->

### medium 级别

使用了 `mysqli_real_escape_string()` 函数转义在 SQL 语句中使用的字符串中的特殊字符

由于过滤掉了`'`,  sql 注入不可用, 可以使用 BurpSuite 进行爆破, low 级别也可使用此方法

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium1.jpg)

1. 配置代理, 使用 BurpSuite 抓取数据

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium2.jpg)

2. 将截断的数据发送到 Intruder

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium3.jpg)

3. 清除所有 playloads 标记, 单独为密码字段添加 payloads 标记 

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium4.jpg)

4. 选择 payloads 字典, 开始爆破

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium5.jpg)

5. 出现一个 Length 明显不同于其他长度的 payload, 则非常可能是密码

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/brute-force-medium6.jpg)