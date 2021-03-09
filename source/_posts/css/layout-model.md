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
* [Flexbox Froggy](https://flexboxfroggy.com/#zh-cn) 在线练习flex布局(flex 青蛙练习)

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
* 元素默认 `order` 值为 0, 正负数字均可设置
* 设置 `order` 属性的元素从小到大排列

### flex-grow

```css
flex-grow: NUMBER;
```

* `flex-grow` 定义父元素的宽度大于子元素宽度之和时，剩余空间分配给子元素点的比率, 默认为 0，不会占用剩余空间，数值越大占用空间越大

### flex-shrink

```css
flex-shrink: NUMBER;
```

* `flex-shrink` 用来定义父元素宽度小于所有子元素的宽度的和时子元素如何缩小宽度
* 默认值为 1, 所有元素相加之后计算比率来进行空间收缩
* 数值越大缩小越多, 设置为 0 不缩小

### flex-basis

```css
flex-basis: auto;
            LENGTH;
```

* `flex-basis` 属性指定在分配多余空间之前，元素占据主轴的空间（main size）
* 默认值 `auto` 为元素自身大小，可以设置为固定宽度, 该属性优先级高于 `width`

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

## grid 布局

* 外层容器设置 `display: grid` 即可开启 grid 布局

### grid 模板

```css
.container {
  grid-template-columns: repeat(3, 1fr);
                         repeat(auto-fill, 100px);
                         100px 1fr 20%;
                         
  grid-template-rows: repeat(4, 1fr);
  
  grid-template-areas: 'header header heade'
                       'aside main main'
                       'aside main main'
                       '. footer .';
}
```

* `grid-template-columns` 对 grid 容器进行列拆分
* `grid-template-rows` 对 grid 容器进行行拆分
  * fr 为 grid 专用单位, 代表 grid 布局剩余空间的分配比率
  * `repeat(次数, 重复值)` 可以减少编写重复相同长度的
  * 容器大小不固定, 但单元格大小固定, 可以用 `auto-fill` , 每行尽可能多的分布
* `grid-template-areas`根据设置好的行和列分配区域
  * 上方生成了 4 行 3 列 的单元格
  * 此时第 1 行 为 header 区域
  * 第 2 和第 3 行的左侧 1/3 为 aside 区域, 右侧 2/3 为 main 区域
  * 第 4 行中间 1/3 为 footer 区域, 两侧未分配

### grid 元素间距

```css
gap: 8px;

column-gap: 10px;
row-gap: 20px;
```

* `gap` 同时设置行间距和列间距
* `column-gap` 用于设置列间距
* `row-gap` 用于设置行间距

### grid 区域分配

```css
.header {
  grid-areas: header
  // 等同于
  //grid-areas: 1/1/2/4
  //等同于
  //grid-row: 1/2
  //grid-column: 1/4    //等同于 1/ span 3   
}
```

* `grid-areas` 根据 `grid-template` 相关属性生成的模板进行布局
* 可以用 area 名定义区域, 也可以用轴线定义, 轴线比行或列数字多 1
* span 关键字表示当前轴线向后延伸

### grid 对齐方式

```css
justify-items: center;    //start end space-between
align-items: center;    //start end
```

* grid 容器内部元素对齐方式, 类似 flex
* `justify-items` 为水平对齐方式
* `align-items` 为垂直对齐方式

```css
justify-content: center;    //start end space-between
align-content: center;    //start end
```
* 行和列元素和小于 grid 容器时的对齐方式
