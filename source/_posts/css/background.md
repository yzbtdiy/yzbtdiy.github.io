---
title: css 背景属性
date: 2019-12-08 17:38:43
categories: css
tags:
- css
- background
---

## 背景剪裁
```css
background-clip: border-box;        /*从边框开始背景可见，默认*/
                 padding-box;       /*从 padding 开始可见*/
                 content-box;       /*从内容区域开始可见*/
```

<!-- more -->

## 背景起始位置
```css
background-origin: content-box;       /*起始位置位于边框左上，默认*/
                   padding-box;       /*起始位置位于padding左上，默认*/
                   border-box;        /*起始位置位于内容左上*/
```

## 背景缩放
```css
background-size: XXpx XXpx;
                 XX%  XX%;
                /*宽度 高度*/
                 cover;           /*根据较长边铺满，会截掉一部分图片 */
                 contain;         /*根据较短边铺满，会有一部分区域留白 */
```

## 固定背景
```css
background-attachment: fixed;    /*背景图以浏览器窗口作为参考，元素设置背景图后在固定位置能才看到*/
                       scroll;   /*背景图以盒子左上为参考，随盒子移动*/ 
```

## 多重背景
```css
background: url(bg1.jpg) no-repeat, url(bg2.jpg) no-repeat;
```
* 多个背景图用逗号隔开，先写的会压在后写的上面

## 文本背景裁切
```css
background: url(bg.jpg);
-webkit-background-clip: text;
color: transparent;
```

## 模糊属性
```css
filter: blur(XXpx);
```
* 处于标准流中，模糊属性对之前设置定位的元素有影响