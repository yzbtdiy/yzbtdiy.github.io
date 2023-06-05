---
title: DVWA Command Injection
date: 2020-12-18 16:01:48
categories: dvwa
tags: 
- injection
---

## 命令注入

能够以 web 服务器执行者的身份执行某些命令, LAMP 环境下为 Apache

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/command-injection-low1.jpg)

<!-- more -->

### low 级别

无过滤, 直接执行命令

![](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/command-injection-low2.jpg)

### medium 级别

基础过滤, 只过滤掉了 `&&` 和 `;`

Source

```php
$substitutions = array(
  '&&' => '',
  ';'  => '',
);
```

### high 级别

过滤的字符较多, 虽然 `| ` 不可用, 但 `|` 没有空格仍然可用

Source

```php
$substitutions = array(
  '&'  => '',
  ';'  => '',
  '| ' => '',
  '-'  => '',
  '$'  => '',
  '('  => '',
  ')'  => '',
  '`'  => '',
  '||' => '',
);
```

### impossible 级别

将 ip 分为四个部分, 且都为数字

Source

```php
if( ( is_numeric( $octet[0] ) ) && ( is_numeric( $octet[1] ) ) && ( is_numeric( $octet[2] ) ) && ( is_numeric( $octet[3] ) ) && ( sizeof( $octet ) == 4 ) ) {
  // If all 4 octets are int's put the IP back together.
  $target = $octet[0] . '.' . $octet[1] . '.' . $octet[2] . '.' . $octet[3];
```
