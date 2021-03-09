---
title: css 媒体查询
date: 2019-12-13 15:50:28
categories: css
tags:
- css
- media
---

## Media Query

```css
@media not print {
    @media (min-width:XXpx) and (max-width:XXpx) {
        @media (orientation:landscape){
        
        }
    }
}
```

<!-- more -->

### 大小限制

* `max-width` `max-height`
* `min-width` `min-height`
* `max-device-width` `max-device-height`
* `min-device-width` `min-device-height`

### Media Type

* all 所有设备
* screen 电脑，平板，智能手机等
* print 打印机

### 屏幕方向

* orientation:orientation  横竖屏
* orientation:landscape  横屏
* orientation:portrait   竖屏

### 运算符

* and 同时满足多个条件
* not 匹配不满足条件的
* 逗号 相当于 or，有一个匹配即可

## 外链式

```css
<link rel="stylesheet" type="text/css" href="phone.css" media="(max-width:760px)"/>
<link rel="stylesheet" type="text/css" href="pad.css" media="(min-width:760px) and (max-width:1000px)"/>
```