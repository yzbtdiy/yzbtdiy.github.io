---
title: html5 新增标签
date: 2019-12-07 15:56:08
categories: html
tags: 
- html5
- tags
---

## 新增语义化标签

```html
<header>头部标签</header>
<nav>导航标签</nav>
<section>区域标签
	<aside>侧边栏标签</aside>
	<article>文章标签</article>
</section>
<footer>底部标签</footer>
```

<!-- more -->

## 新增表单属性

### 禁用属性 `disabled`

```html
<input type="button" value="按钮" disabled="disabled">
<input type="text" disabled>
```

### 非空验证 `required`

```html
<input type="text" required="required">
<input type="password" required>
```

### 获取焦点 `autofocus`

```html
<input type="text" autofocus="autofocus">
```

### 自动补全 `autocomplete`

```html
<input type="text" autocomplete="on" name="userName">
<input type="submit" value="提交">
```

* `autocomplete` 默认值为 `off`
* `autocomplete` 启用为 `on`，需要要配合 name 属性以组名的形式存储成功提交的记录

### `input` 新增 `type`

* `email` 邮件类型，验证是否使用 @ 等
* `url`   url 类型，验证是否使用网络协议头
* `number` 数字类型，只能输入数字，不能输入字母或特殊符号
* `color` 颜色类型，提供颜色选择器
* `search` 搜索类型，搜索框
* `datetime-local` 本地时间 
* `month` 月份
* `date` 某日
* `time` 时间
* `week` 周

### 新增下拉菜单 `datalist`

```html
<input type="text" list="country">
<datalist id="country">
	<option>中国</option>
	<option>美国</option>
	<option>日本</option>
	<option>韩国</option>
</datalist>
```

* `datalist` 配合输入框使用
* 输入框中的 `list` 属性值关联 `datalist` 的 `id` 值

## 新增音频标签 `audio`

```html
<audio src="music/music.mp3" controls="controls" autoplay="autoplay" loop="loop"></audio>

<audio autoplay="autoplay" controls="controls">
	<source src="music/music.ogg"></source>
	<source src="music/music.mp3"></source>
</audio>
```

* `controls` 属性指定是否使用控制面板
* `autoplay` 属性指定是否自动播放
* `loop`属性指定是否循环
* `source` 标签可以指定多个音频文件

## 新增视频标签 `video`

```html
<video src="video/movie.mp4" controls="controls" autoplay="autoplay"></video>

<video controls="controls">
	<source src="video/movie.webm"></source>
	<source src="video/movie.ogg"></source>
</video>
```