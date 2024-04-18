---
title: css 动画
date: 2019-12-12 20:47:39
categories: css
tags: 
- css
- 2d
- 3d
- animation
---

## 2D 属性

### 位移

```css
transform: translate(XXpx,XX%,XXrem);
           translateX(XXpx);
           translateY(XXpx);
           translateZ(XXpx);
           
           /*一个值：x轴偏移量*/
           /*两个值：x轴偏移量 y轴偏移量*/
           /*三个值：x轴偏移量 y轴偏移量 z轴偏移量（z轴偏移量不能用 %）*/
```

* 根据自身在标准流中的位置进行移动，移动后仍然占位，单位可以是 px 或 相对自身 %
* 设置百分比会根据自身的宽和高计算，配合定位可实现元素页面居中
* 水平正值向右，负值向左
* 垂直正值向下，负值向上

### 旋转

```css
transform: rotate(-180deg);     /*2D旋转*/
           rotatex(-180deg);    /*沿 x 轴3D旋转*/
           rotatey(-180deg);    /*沿 y 轴3D旋转*/
           rotatez(-180deg);    /*沿 z 轴3D旋转*/

transform-origin: top center XXpx;
                  /*一个值：x轴偏移量 （XXpx，XX%，center...）*/
                  /*两个值：x轴偏移量 y轴偏移量 （XXpx，XX%，center...）*/
                  /*三个值：x轴偏移量 y轴偏移量 z轴偏移量 （z轴偏移量只能用 XXpx）*/
```

* 沿 z 轴，顺时针为正值，逆时针为负值
* 沿 x 轴，从右侧看，顺时针为正值，逆时针为负值
* 沿 y 轴，从下方看，顺时针为正值，逆时针为负值
* 旋转和位移同时存在时，用空格隔开，先写位移后写旋转

<!-- more -->

### 缩放

```css
transform: scale(XX, XX);
            /*水平缩放系数 垂直缩放系数*/
```

### 斜切

```css
transform: skew(XXdeg, XXdeg);
              /*水平角度 垂直角度*/
```

### 背对屏幕不可见

```css
backface-visibility: hidden;
```

## 3D 属性

### 开启 3D 空间

```css
transform-style: preserve-3d;
```

* 给需要使用 3D 显示效果元素的父元素设置次属性

### 景深透视效果

```css
perspective: XXpx;
```

* 设置该值后，子元素会出现近大远小的效果
* 最佳效果取值范围为 800px ~ 1500px

## 过渡

* 过渡使元素样式改变时，有一个中间过程（至少有过渡的属性和过渡时间才能出现动画效果）

### 复合属性

```css
transition: 属性 时间 类型 延迟;  /*多组值逗号隔开*/
```

* 复合属相的参数顺序没有特定要求，但延迟必须在过渡时间之后，通常过渡的属性写开头
* 过渡添加的位置根据具体场景确定（添加至元素本身或者 hover 状态下）

### 过渡的属性

```css
transition-property: all;
                     none;
                     width/height/background-color/left/opacity...
```

### 持续时间

```css
transition-duration: 2s;    /*单位秒或毫秒*/
```

### 动画类型

```css
transition-timing-function: linear;        /*线性过渡，cubic-bezier(0.0, 0.0, 1.0, 1.0) */
                            ease;          /*平滑过渡，cubic-bezier(0.25, 0.1, 0.25, 1.0) */
                            ease-in;       /*由慢到快，cubic-bezier(0.42, 0, 1.0, 1.0) */
                            ease-out;      /*由快到慢，cubic-bezier(0, 0, 0.58, 1.0) */
                            ease-in-out;   /*由慢到快再到慢，cubic-bezier(0.42, 0, 0.58, 1.0) */
```

贝塞尔曲线可视化：[https://cubic-bezier.com/](https://cubic-bezier.com/)

### 延迟时间

```css
transition-delay:  1s;    /*单位秒或毫秒*/
```

## 动画属性

### 复合属性

```css
amimation: NAME TIME METHOD DELAY REPLAY DIRECTION;
         /*名称  时间  方式    延时  次数    方向*/
```

### 关键帧区间

```css
@keyframes NAME{
    from{
        
    }
    to{
    
    }
}
@keyframes NAME{
    %0{
    
    }
    50%{
    
    }
    100%{
    
    }
}
```

### 动画外属性

```css
animation-fill-mode: both;     /*开始前位于 from 位置，结束后停留在 to 位置*/
                     backwards; /*开始之前位于 from 位置*/
                     forwards;  /*结束之后停留 to 位置*/
```

* 定义动画开始之前和结束之后的位置

### 动画名称

```css
animation-name: NAME;
```

### 动画持续时间

```css
animation-duratioin: XXs;
```

* 单位可以是秒或毫秒

### 动画过渡方式

```css
animation-timing-function:  step(NUMBER);
                            linear;   /*匀速*/ 
                            ease;    /*平滑过渡*/ 
                            ease-in  /*由慢到快*/ 
                            ease-out  /*由快到慢*/ 
                            ease-in-out  /*由慢到快再到慢*/
                            cubic-bezier(n,n,n,n)  /*cubic-bezier 函数*/ 

```

### 动画状态

```css
animatioin-play-state: running;  /*执行动画效果*/
                       paused;   /*暂停*/       
```

### 动画延时

```css
animation-delay: XXs;
```

### 动画循环次数

```css
animation-iteration-count: infinite;
```

### 动画方向

```css
animation-direction: normal;               /*正常*/
                     reverse;              /*反向*/
                     alternate;            /*有来有去*/
                     alternate-reverse;    /*反向有来有去*/
```