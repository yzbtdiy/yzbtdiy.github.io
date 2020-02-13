---
title: css 盒子模型
date: 2019-12-08 14:16:09
categories: css
tags:
- css 
- box
---

## 盒子属性

### 边框-border

#### 复合属性

```css
border-left:
border-right:
border-top:
border-bottom:
border: 粗细（默认3px）  样式  颜色
```

<!-- more -->

#### 粗细

```css
border-width: 5px;
```

#### 样式

```css
border-sytle: solid;         实线
              dashed;        虚线
              dotted;        点状线
```

#### 颜色

```css
border-color: red;
```

### 内边距-padding

* 元素设置内边距后，盒子在网页中的尺寸会撑大
* 希望保持元素的尺寸不变，要从宽高中减去相应的内边距
* 元素在网页中的尺寸=自身的宽高+内边距+边框
* 块元素未设置宽度时，宽度与父元素宽度一致，设置水平方向内边距会自动减去

```css
padding-left:
padding-right:
padding-top:
padding-bottom:
padding: 上 右 下 左
```

* 一个值：上下左右
* 两个值：上下    左右
* 三个值：上    左右    下
* 四个值：上    右    下    左
* 可以通过 `padding: ` 设置所有边框，不需要的单独设置为 `none`

### 外边距-margin

```css
margin-left:
margin-right:
margin-top:
margin-bottom:
margin: 上 右 下 左
```

* margin 的用法和值的顺序与 padding 一致
* **设置水平方向外边距为 `auto` 可以实现块元素的水平居中**

### 标准盒子模型（默认）

```css
box-sizing: content-box;
```

* 元素设置内边距和边框后，会撑大盒子

### 怪异盒子模型（内减模式，css3）

```css
box-sizing: border-box;
```

* 当元素设置内边距和边框后，盒子大小不变，自动从内部减去

### 盒子阴影

```css
box-shadow: XXpx XXpx XXpx XXpx COLOR inset;
            /*水平偏移 垂直偏移 模糊程度（可选） 扩展大小（可选） 内部阴影（可选，默认外部）*/
```

### 圆角属性

```css
border-radius: 左上（水平） 右上 左下 右下/左上（垂直） 右上 左下 右下
```

* 一个值：四个角同时设置
* 两个值：左上和右下     右上和左下
* 三个值：左上    右上和左下    右下
* 四个值：左上     右上    左下    右下
* 单位 px 或 %

## 高度问题

### 外边距合并

* 垂直排列块元素，上方设置向下的外边距，下方设置向上的外边距，会造成外边距合并
* 外边距合并，值相同取该值，值不同取较大值

### 外边距塌陷

* 嵌套的块元素，为第一个子元素设置向上的外边距，父元素会随子元素向下移动，出现上外边距塌陷
* 给父元素设置上边框，向上的 `padding` 或 `overflow` 属性可以解决外边距塌陷问题
* 父元素设置浮动或子元素设置浮动同样可以解决外边距塌陷问题

### 浮动高度塌陷

元素设置浮动后，若没有给父盒子设置高度，父盒子的高度为 0，之后的块元素会向上移动到浮动元素的下面，以下方式可以解决塌陷问题：

* 父盒子设置固定高度
* 父盒子设置 `overflow: hidden;` 属性
  * ```css
overflow: hidden;      溢出隐藏
              scroll;      溢出添加滚动条，未溢出显示滚动条
              auto;        只有内容溢出才显示滚动条
    ```
    
  * `overflow` 属性可以用来解决外边距塌陷和清除浮动带来的影响
* 浮动元素后添加块元素，设置 `clear: both;` 属性
* `::after` 伪元素选择器，不会添加额外标签
  * ```css
  .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    ```