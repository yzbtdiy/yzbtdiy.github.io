---
title: 移动端屏幕适配
date: 2020-05-13 20:24:29
categories: html
tags:
- mobile
---

## 视口

* 视觉视口 (visual viewport)
  * 视觉视口默认等于当前浏览器的窗口大小 
  * 通过 `window.innerWidth` 或者 `window.visualViewport.width` 获取大小

* 布局视口 (layout viewport)
  * 布局视口是网页布局的基准， 大部分为移动设备布局视口默认值为 980px
  * 布局视口通过 `document.documentElement.clientWidth` 获取大小

* 理想视口 (ideal viewport)
  * 理想视口是页面在移动端展示的理想大小, 及布局视口和设备宽度一样
  * 通过 `window.screen.width` 获取大小

<!-- more -->

### meta viewport

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
/>
```

* `width`：布局视口宽度, 可以设置为固定的值或者 `device-width`（设备宽度）
* `initial-scale`：页面的初始缩放系数 (缩放系数 = 理想视口宽度 / 视觉视口宽度)
* `minimum-scale`：最小的缩放系数
* `maximum-scale`：最大的缩放系数
* `user-scalable`：用户缩放, no 为禁用用户缩放
* `width` 和 `initial-scale` 都会初始化布局视口, 浏览器取较大值

## 像素比

* 物理像素 (physical pixel)
  * 屏幕显示的最小单元, 可以单独设置颜色及亮度
* 设备独立像素 (density-indenpendent pixel)
  * 逻辑像素, css 设置的像素为设备独立像素
* 设备像素比 (device pixel ratio)
  * 设备像素比 (dpr) = 物理像素 / 设备独立像素
  * dpr 大于 1 的 retina 屏幕上 1px 会变粗

## 适配方案

### viewport 适配

* 通过改变页面的缩放系数来适配页面

```js
(function () {
  let visualWidth = 750;
  let scaleSize = document.documentElement.clientWidth / visualWidth;
  let metaNode = document.querySelector("meta[name=viewport]");
  metaNode.content = `initial-scale=${scaleSize},user-scalable=no,minimum-scale=${scaleSize},maximum-scale=${scaleSize}`;
})();
```

### rem 适配

* rem 适配需要设置 `initial-scale = 1`
* HTML 根标签的 font-size 属性值为 1rem 的大小
* 布局视口的宽设置为 16 份，每份的宽为 1rem
* 将设计图的位图像素分为 16 份，每份为 1rem 对应的位图像素
* 设计图对应元素的位图像素宽除以 1rem 的位图像素宽，得到该对应元素 rem 值

```sass
$phoneWidth : 750;    //设计稿宽度
@function px2rem( $width ){
  @return $width / $phoneWidth * 16rem;
}

div {
  font-size: px2rem(XXpx);
}
```

```js
(function () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px';
})();
```

* 可以先通过 px 布局，打包时用 pxtorem 库转化为 rem 布局

### vw 适配

* 将视口宽度 `window.innerWidth` 和视口高度 `window.innerHeight` 等分为 100 份
* vw : 1vw 为视口宽度的 1%
* vh : 1vh 为视口高度的 1%
* vmin : vw 和 vh 中的较小值
* vmax : 选取 vw 和 vh 中的较大值
* 通过 vw, vh 等相对单位进行布局实现适配