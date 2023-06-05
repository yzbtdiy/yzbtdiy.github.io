---
title: css 文本样式
date: 2019-12-06 19:22:12
categories: css
tags: 
- css
- style
---

## 颜色

### 字体颜色

```css
color: red;
       rgb(255,0,0);
       #f00;
```

### 背景颜色

```css
background-color: green;
```

<!-- more -->

## 字体

### 复合属性

```css
font:加粗 斜体 小型大写 大小/行高 字体
```

* `大小 字体` 必须写，且位置在最后，前面三个无所谓
* 当复合属性和单属性同时存在时，复合属性要位于单属性之上

### 大小

```css
font-size: XXpx;
           XXem;
```

### 字体

```css
font-family: "宋体";
             "微软雅黑";
```

### 粗细

```css
font-weight: 100;
             400 normal; 
             700 bold;
```

### 斜体

```css
font-style: italic;
            oblique;
            normal;
```

### 小型大写字母

```css
font-variant: small-caps;
              normal;
```

## 间距

### 行高

`行间距 = line-height – font-size`

* 行高用于调整文本在元素中垂直方向的位置
* 元素无固定高度时，设置行高会设置相同的高度，文本始终垂直居中
* 设置固定高度是，高度不会随着行高的变化而变化，此时文本可以设置文本在元素中垂直位置
* 将行高设置为元素的高度时，文本垂直居中于当前元素
* 行高是关于文本的属性，可以被继承
* 文本分为四条线：顶线，中线，基线，底线
* 行间距是行与行之间的距离，也就是基线到基线之间的距离

```css
line-height: normal;
             X%;          字体尺寸的百分比
             NUMBER;      字体尺寸的倍数
             LENGTH;      固定行距
```

### 字母间距

```css
letter-spacing: LENGTH;   固定间距，可以使用正负值
                normal;

```

### 单词间距

```css
word-spacing: LENGTH;   固定间距，可以使用正负值
              normal;
```

## 文本

### 居中

```css
text-align: center;
            left;
            right;
            justify;    两边对齐
```

### 缩进

```css
text-indent: 2em;
```

### 下划线

```css
text-decoration: none;            无
                 underline;       下划线
                 overline;        上划线
                 line-through;    删除线
```

### 大小写

```css
text-transform: uppercase;        大写 
                lowercase;        小写
                capitalize;       首字母大写
                none;             正常
```

## css3 新增样式

### 文字阴影

```css
text-shadow: XXpx XXpx XXpx COLOR;
            /*水平偏移 垂直偏移 模糊程度 颜色*/
```

* 多组阴影用逗号隔开

### 文本边框

```css
-webkit-text-stroke: XXpx COLOR;
                    /*粗细  颜色 */
```