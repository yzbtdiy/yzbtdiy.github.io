---
title: html 简介
date: 2019-12-06 10:59:34
categories: html
tags: 
- html
---

##  前端组成

### HTML
**HTML是网页内容的载体**。网页内容是页面上让用户浏览的信息，可以包含文字、图片、视频等。

### CSS
**CSS样式是表现**。标题字体、颜色变化，或为标题加入背景图片、边框等。所有这些用来改变内容外观的东西称之为表现。

### JavaScript
**JavaScript是用来实现网页上的特效效果**。如鼠标滑过弹出下拉菜单，鼠标滑过颜色改变，网页轮播图等，有动画的，有交互的一般都是用JavaScript来实现的。

<!-- more -->

## HTML 模板

### HTML4 模板

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
```

### XHTML 模板

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>Title</title>
  </head>
  <body>

  </body>
</html>
```

### HTML5 模板

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
  </head>
  <body>

  </body>
</html>
```

* `<html></html>` 称为根标签，所有的网页标签都在 `<html></html>` 中。
* `<head>` 标签用于定义文档的头部，它是所有头部元素的容器。头部元素有`<title>` 、`<script>` 、 `<style>` 、 `<link>` 、`<meta>`等标签。
* `<body></body>`标签之间的内容是网页的主要内容，如`<h1>`、`<p>`、`<a>`、`<img>`等网页内容标签，在这里的标签中的内容会在浏览器中显示出来。

### 字符集

* ASCII一共定义了128个字符,包括33个控制字符,和95个可显示字符。大部分的控制字符已经被废弃。
* Unicode涵盖的数据除了视觉上的字形、编码方法、标准的字符编码外，还包含了字符特性，如大小写字母。
* UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，也是一种前缀码。
* GB 2312标准共收录6763个汉字，其中一级汉字3755个，二级汉字3008个；同时收录了包括拉丁字母、希腊字母、日文平假名及片假名字母、俄语西里尔字母在内的682个字符。但对于人名、古汉语等方面出现的罕用字和繁体字，GB 2312不能处理。
* GB 2312-80只收录6763个汉字，有不少汉字，如部分在GB 2312-80推出以后才简化的汉字（如“啰”），部分人名用字（如中国前总理朱镕的“镕”字），台湾及香港使用的繁体字，日语及朝鲜语汉字等，并未有收录在内。
* GBK对GB 2312-80进行扩展, 总计拥有 23940 个码位，共收入21886个汉字和图形符号，其中汉字（包括部首和构件）21003 个，图形符号883 个。
* GB 18030 编码空间庞大，最多可定义161万个字元，支持中国国内少数民族的文字，不需要动用造字区，汉字收录范围包含繁体汉字以及日韩汉字。

来源：https://www.cnblogs.com/chiguozi/p/5860364.html