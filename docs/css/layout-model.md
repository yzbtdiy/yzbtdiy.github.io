---
title: css 布局模型
date: 2019-12-08 14:47:44
categories: css
tags:
- flow
- float
- layer
- position
- flex
---

##  布局模型

css 包含 3 种基本的布局模型，分别是：Flow、Layer 和 Float

在网页中，元素有三种布局模型：

* 流动模型（Flow）
* 浮动模型 (Float)
* 层模型（Layer）

<!-- more -->

## 流动模型-flow

* 流动布局，又称为标准流或文档流，是网页默认的布局模式
* 块元素独占一行垂直分布，内联元素从左至右水平分布
* 块元素可以设置宽和高，内联元素设置宽高无效

## 浮动模型-float

```css
float: left;
       right;
```

* 设置 `float` 属性后，元素会处于半脱离标准流的状态，当元素设置浮动后，不再具备之前的显示模式，也称为浮动流
* 浮动用来做网页的行向布局，实现块元素水平排列
* 不论是块元素还是内联元素，设置浮动后，均可以设置宽高
* 浮动最初的作用是实现文本环绕效果

## 层模型-layer

### 相对定位

```css
position: relative;
left: XXpx;
top: XXpx;
```

* 相对定位，也叫占位定位，设置偏移量后，参照自身在标准流中的位置进行移动
* 相对定位不影响其他的元素，但在标准流中的位置始终存在

### 绝对定位

```css
position: absolute;
left: XXpx;
top: XXpx;
```

* 绝对定位使元素处于完全脱离标准流的状态，设置宽高起作用
* 默认参考点 left，top 位于 body 左上，right，bottom 位于窗口第一屏右下
* 绝对定位的参考点会根据距离最近的设置定位的父辈元素确定

### 固定定位

```css
position: fixed;
left: XXpx;
top: XXpx;
```

* 固定定位将元素固定带到浏览器窗口的某个位置，固定定位的参考点永远是浏览器窗口

### 定位偏移量

* `left` 正值向右，负值向左
* `right` 正值向左，负值向右
* `top` 正值向下，负值向上
* `bottom` 正值向上，负值向下
* 水平或垂直两个值都存在时，`left` 和 `top` 优先

### 定位层级

* 设置定位的元素可以设置 `z-index` 层级属性
* 层级的值是一个整数，正值位于标准流之上，负值位于标准流之下，默认值为 0

### 定位元素居中

* 水平居中：`left: 50%; margin-left: 负自身宽度的一半`
* 垂直居中：`top: 50%; margin-top: 负自身高度的一半`

### 定位溢出隐藏

* 绝对定位元素溢出参考点的父辈元素且父辈元素设置了 `overflow: hidden;` 后，溢出部分会被隐藏

## flex 布局

* 弹性布局又称 flex 布局，弹性盒子，伸缩盒子或伸缩布局
* 任何一个元素都可以为其子元素开启弹性空间，位于弹性空间的子元素又称为弹性项或弹性元素（flex item）
* 开启 flex 布局的元素称为 flex 容器（flex container） ，默认存在两根轴
* 主轴（main axis）：默认水平，从左至右排列，起始 main start，结束 main end
* 交叉轴（cross axis）：又称侧轴，默认垂直，从上至下排列，起始 cross start，结束cross end
* 弹性元素默认沿主轴排列，单个元素占据主轴空间称为 main size，占据交叉轴空间叫做 cross size

**容器属性**

### flex-flow

```css
flex-flow: row nowrap;
```

* `flex-flow` 是 `flex-direction` 和 `flex-wrap` 的复合属性

### flex-direction

```css
flex-direction: row;            /*水平左至右*/
                row-reverse;    /*水平右至左*/
                column;         /*垂直上至下*/
                column-reverse; /*垂直下至上*/
```

* `flex-direction` 属性指定主轴方向，默认水平由左至右

### flex-wrap

```css
flex-wrap: nowrap;            /*不换行，进行压缩，默认*/
           wrap;              /*换行，第一行在上方*/
           wrap-reverse;      /*换行，第一行在下方*/
```

* 弹性元素默认都排在一条轴线上，若轴线空间不够会进行压缩
* `flex-wrap` 属性可以设置当轴线不能容纳所有元素是否换行

### justify-content

```css
justify-content: flex-start;     /*左对齐，默认*/
                 flex-end;       /*右对齐*/
                 center;         /*居中*/
                 space-between;  /*两端对齐，两侧无间距*/
                 space-around;   /*两侧间距是元素间距的一半*/
```

* `justify-content` 指定了弹性元素在主轴的对齐方式

### align-items

```css
align-items: stretch;        /*默认，未设置高度占满整个容器*/
             flex-start;     /*交叉轴起点对齐*/
             flex-end;       /*交叉轴终点对齐*/
             center;         /*交叉轴居中对齐*/
             baseline;       /*第一行文字基线对齐*/
```

* `align-items` 属性指定弹性元素在交叉轴上的对齐方式（单轴线）

### align-content

```css
align-content: stretch;        /*默认，轴线占满交叉轴*/
               flex-start;     /*交叉轴起点对齐*/
               flex-end;       /*交叉轴终点对齐*/
               center;         /*交叉轴居中对齐*/
               space-between;  /*交叉轴两端对齐，轴线间隔平均分布*/
               space-around;   /*轴线间距是边框到轴线间距的2倍*/
```

* `align-content` 属性指定多根轴线的对齐方式，只有一根轴线时无效

**元素属性**

### flex

```
flex: 0 1 auto;
      auto;         /*相当于 1 1 auto*/
      none;         /*相当于 0 0 auto*/
```

* `flex`是 `flex-grow`，`flex-shrink` 和 `flex-basis` 的复合属性

### order

```css
order: NUMBER;
```

* 设置 `order` 属性的元素从小到大排在未设置元素之后

### flex-grow

```css
flex-grow: NUMBER;
```

* `flex-grow` 属性定义元素的放大比例，默认为 0，不会占用剩余空间，数值越大占用空间越大

### flex-shrink

```css
flex-shrink: NUMBER;
```

* `flex-grow` 属性定义空间不足时元素的缩小比例，默认为 1，为 0 时不缩小，数值越大缩小越多

### flex-basis

```css
flex-basis: auto;
            LENGTH;
```

* `flex-basis` 属性指定在分配多余空间之前，元素占据主轴的空间（main size）
* 默认值 `auto` 为元素自身大小，可以设置为与 width 或 height 相同的值，元素会占据固定空间

### align-self

```css
align-self: auto;
            flex-start;
            flex-end;
            center;
            baseline;
            stretch;
```

* 设置单个元素其他元素不同的对齐方式，可以覆盖 `align-items` 属性
* 默认值 `auto` 表示继承父元素属性，若没有父元素相当于 `stretch`