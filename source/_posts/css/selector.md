---
title: css 选择器
date: 2019-12-06 19:18:23
categories: css
tags: 
- css
- selector
---

## css 书写位置

### 内嵌式

```html
<style type="text/css">

</style>
```

* css 代码写在 `<style>` 标签中， css 和 html 相对分离 
* 代码耦合度相对较低，偶尔使用

<!-- more -->

### 行内式

```html
<div style="width: 100px; height: 100px; background: green;">
```

* css 通过 `style` 属性写在标签内
* 代码耦合度高
* 易造成冗余代码，维护性差

### 外链式

```html
<link rel="stylesheet" type="text/css" href="css/style.css"/>
```

* 将 css 代码写到 css 文件中，css 和 html 绝对分离 
* 代码耦合度极低，维护性高
* 经常使用

## css 常用选择器

### 标签选择器

```css
h3{

}
p{

}
```

### 类选择器

```css
.className{

}
```

* 命名使用字母数字下划线中划线，数字不能开头
* 建议使用驼峰命名
* 类选择器可以重复调用

### id 选择器

```css
#idName{

}
```

* id 选择器唯一，不能重复


### 后代选择器

```css
div h2{

}
.className h3{

}
```

* 多个基础选择器使用空格隔开，前一个为后一个的祖辈

### 并集选择器

```css
div,.className,#idName{

}
```
* 同时为多个选择器设置相同样式，用 `,` 隔开

### 交集选择器

```css
div.className{

}
```

* 交集选择器由标签选择器和类选择器组成，中间没有空格
* 用于选择拥有某个类名且是特定标签 的元素，可以用来提升权重


### 子元素选择器

```css
div>p{

}
```

* 用 `>` 隔开，选择指定标签元素的第一代子元素
* 选择父元素为 div 的所有 p 标签

### 兄弟选择器

```css
div~p{

}
```

* 用 `~` 隔开，表示选择某元素后**所有同级**的指定元素

### 相邻兄弟选择器

```css
div+p{

}
```

* 用 `+` 隔开，表示选择某元素后**紧挨的**下一个相邻兄弟元素 

### 属性选择器

```css
div[class="nav"]{

}
```

* 选择具有某个属性值得元素
* `^=` 属性值开头关键字
* `$=` 属性值结束关键字
* `*=` 包含关键字的属性值
* `~=` 属性值中包含的关键词为独立单词

## 伪类选择器

### 链接伪类与动态伪类

四种状态同时设置时，要按照 lvha 的顺序

```css
a: link{               /*链接伪类，未访问链接，仅链接可用*/

}
a: visited{            /*链接伪类，访问后链接，仅链接可用*/

}
a: hover{              /*动态伪类，鼠标移入，非链接可用*/

}
a: active{             /*动态伪类，鼠标按下，非链接可用*/

}
```

* 出于隐私考虑，访问后的链接状态只支持一下样式

```
color:
background-color:
border-color:
```

### 结构性伪类

```css
div ELEMENT:nth-child(index){

}			
div ELEMENT:first-child{

}
div ELEMENT:last-child{

}
div ELEMENT:nth-last-child(index){

}
div ELEMENT:only-child{

}
```

* 匹配父元素中第 index 个子元素且这个子元素必须是 ELEMENT
* index 的值从1开始计数
* index 可以为变量n(只能是n)
* index 可以为even（偶数） odd（奇数）

```css
div ELEMENT:nth-of-type(index){

}
div ELEMENT:first-of-type{

}
div ELEMENT:last-of-type{

}
div ELEMENT:nth-last-type(index){

}
div ELEMENT:only-of-type{

}
```

* 匹配父元素中第 index 个的名为 ELEMENT 的元素

### 表单相关伪类

```css
input:enabled{    /*匹配可编辑的表单*/

}	  
input:disable{   /*匹配被禁用的表单*/

}
input:checked{   /*匹配被选中的表单*/

}	  
input:focus{    /*匹配获焦的表单*/
}
```

### 否定伪类

```css
button:not([DISABLED]){

}
```

* 选中某些元素，且排除符合某个条件的元素

### 空元素选择器

```css
div:empty{

}
```

* 选中元素里没有子元素，没有内容，没有空格

### `target` 伪类

```css
ul li:target{

}
```

* 通常用在 a 标签中，当单击a标签，目标到某个元素时，执行 target 伪类
* 可以用来实现简易轮播图

## 伪元素选择器

```css
div::before{

}
div::after{

}
div::firstLetter{

}
div::firstLine{

}
```

* 在标签内部的开始或结尾添加元素，不需要额外标签
* 默认显示效果是行内式，和正常标签用法相同

## 选择器详情

https://www.w3.org/TR/selectors-3/#selectors