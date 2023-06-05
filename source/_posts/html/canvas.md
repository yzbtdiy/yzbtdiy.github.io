---
title: canvas 画布
date: 2020-02-11 15:00:26
categories: html
tags: 
- canvas
---

## canvas

* `<canvas>` 标签是一个图形容器，需要使用 javascript 来绘制图形
* `<canvas>` 标签是 `inline-block` 元素，标签内部是浏览器不支持 `<canvas>` 标签时显示的内容
* `<canvas>` 元素默认宽度 300px，默认高度 150px，只能通过标签属性设置宽高，不能通过 css 设置（会改变像素的宽高比），不需要写单位，以像素计数

<!-- more -->

### 创建 canvas

**html 创建元素**

```html
<canvas id="theCanvas" width="400" height="400">
    您的浏览器不支持canvas，推荐使用 Chrome 或 Firefox 等现代浏览器
</canvas>
```

```css
#theCanvas {
    background-color: yellowgreen;
}
```



**获取 js 对象**

```js
//获取画布
let myCanvas = document.getElementById("theCanvas");
//获取渲染上下文（The rendering context），用来绘制或处理展示内容
let painting = myCanvas.getContext("2d");
```

## 绘制图形

* `fill` 与填充有关
* `storke` 与轮廓有关
* `rect` 与矩形有关
* 在原有 `fill` 基础上，`stroke` 里外均等分布

### 清空画布

```js
painting.clearRect(0, 0, myCanvas.width, myCanvas.height);
        //清除区域起始行坐标，清除区域起始纵坐标，清除宽区域度，清除区域高度
```

### 颜色

```js
//填充颜色，可以使用颜色单词，rgb，rgba，#HEX
painting.fillStyle = "green";
//轮廓颜色
painting.strokeStyle = "red";
```

### 线型（Line styles）

```js
//线条粗细
painting.lineWidth = "4";
//线条末端样式
painting.lineCap = "butt";  //方形结束
                   "round";  //圆形结束
                   "square"  //方形结束，增加半个矩形区域
lineJoin = "bevel";  //相连部分添加额外三角形区域，每个部分有各自独立矩形拐角
           "round";  //相连部分添加额外扇形
           "miter";  //相连部分边缘延伸，交于一点，形成额外菱形区域
```

### 绘制线段

```js
//新建一条路径，与上一次路径断开连接
painting.beginPath();
//路径起始位置
painting.moveTo();
//闭合路径，路径结束点与起始点相连
painting.closePath();
//通过线条绘制轮廓（可以不绘制轮廓）
painting.stroke();
//填充路径的闭合区域
painting.fill();
```

* 调用 `fill()` 函数时，所有没有闭合的形状都会自动闭合
* 调用 `closePath()` 函数时，没有闭合和形状不会自动闭合

### 绘制矩形

```js
//绘制填充矩形
painting.fillRect(x, y, width, height);
//绘制矩形路径
painting.strokeRect(x, y, width, height);
//清除矩形区域，使其透明
painting.clearRect(x, y, width, height);
```

四个参数分别为：

* 起始行坐标
* 起始纵坐标
* 矩形宽度
* 矩形高度

### 绘制圆

#### 圆弧 

```js
painting.arcTo(x1, y1, x2, y2, radius);
```

五个参数：

* 第一个控制点行坐标（切线交点）
* 第一个控制点纵坐标（切线交点）
* 第二个控制点行坐标（另一侧切点）
* 第二个控制点纵坐标（另一侧切点）
* 半径

#### 圆

```js
painting.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```

六个参数：

* 圆心行坐标
* 圆心纵坐标
* 半径
* 起始弧度（弧度 = 角度 * Math.PI / 180）
* 结束弧度
* 是否逆时针（默认 false 顺时针，true 逆时针）

## 图形变换

### 位移

```js
painting.translate(x, y);
```

**translate 会重新映射画布上的 (0,0) 位置，也就是对坐标轴进行位移**

两个参数：

* 水平偏移量
* 垂直偏移量


### 旋转

```js
painting.rotate(angle);
```

**rotate 会对坐标轴进行旋转**

* 一个参数：弧度（弧度 = 角度 * Math.PI / 180）

### 缩放

```js
painting.scale(scalewidth,scaleheight);
```

**scale 缩放整个坐标系**

两个参数：

* 行向缩放比例（1 为 100%）
* 纵向缩放比例