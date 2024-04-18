---
title: html 其他标签
date: 2019-12-06 15:00:26
categories: html
tags: 
- html
- tags
---

## 链接

### 内部链接和外部链接

```html
<a href="相对路径" target="_blank">另一个页面</a>
<a href="https://www.baidu.com" target="_blank"></a>
```

* 内部链接直接使用相对路径跳转
* 外部链接使用 URL 跳转
* `target` 为跳转方式
  * `target="_self"` 为当前选项卡跳转
  * `target="_blank"` 为新建选项卡跳转

<!-- more -->

### 空链接和锚点链接

```html
<a href="#"></a>
```

`#` 回到页面顶部
`#` 当前位置不变
`#ID` 为锚点链接，根据 ID 调到指定位置，ID 号唯一

## 列表

### 无序列表

```html
<ul>
  <li>列表项</li>
  <li>列表项</li>
  <li>列表项</li>
  <li>列表项</li>
</ul>
```

* 列表项有序排列
* `ul` 只能包含 `li`
* `li` 可以包含任何标签

### 有序列表

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  <li>列表项4</li>
</ol>

```
* 列表项无序排列
* `ol` 只能包含 `li`
* `li` 可以包含任何标签

### 自定义列表

```html
<dl>
  <dt>列表主题</dt>
  <dd>列表项</dd>
  <dd>列表项</dd>
  <dd>列表项</dd>
</dl>
```

* 列表项围绕 dt 主题
* dl 只能包含 dt 和 dd
* dt 和 dd 可以包含其他标签

## 表格

```html
<table>
	<caption><h1>标题</h1></caption>
	<tr>
		<th></th>
		<th></th>
		<th></th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```

##  表单

### 表单域

```html
<form action="https://www.baidu.com" method="post">
</form>
```

* 表单所有元素位于表单域中才可以提交
* `action` 提交地址     
* `method` 提交方式，`get` 通过 url 提交，`post` 通过请求报文提交

### 文本框

```html
<label for="txt1">姓名:</label>
<input type="txt" id="txt1">
<br><br>
<label for="txt2">密码:</label>
<input type="password" id="txt2">
```

### 单选框

```html
<h3>性别：</h3>
男<input type="radio" name="gender">
女<input type="radio" name="gender" checked>
```

### 多选框

```html
<h3>兴趣爱好：</h3>
音乐<input type="checkbox">
运动<input type="checkbox">
游戏<input type="checkbox" checked="checked">
```

### 下拉框

```html
<h3>您的国籍是：</h3>
<select>
	<optgroup label="亚洲">
		<option>中国</option>
		<option>朝鲜</option>
		<option>日本</option>
		<option>印度</option>
	</optgroup>
	<optgroup label="美洲">
		<option selected="selected">美国</option>
		<option>智利</option>
		<option>巴西</option>
		<option>秘鲁</option>
	</optgroup>
</select>
```

### 多行文本

```html
<h3>简介：</h3>
<textarea></textarea>
```

### 按钮

```html
<input type="button" value="普通按钮">
<input type="submit" value="提交">
<input type="reset" value="重置">

<button type="button">普通按钮<button>
<button type="submit">提交<button>
<button type="reset">重置<button>
```

### input type

* `text`      定义单行的输入字段，用户可在其中输入文本，默认宽度为 20 个字符
* `password`  定义密码字段，该字段中的字符被掩码
* `radio`     定义单选按钮
* `submit`    定义提交按钮，提交按钮会把表单数据发送到服务器 
* `checkbox`  定义复选框 
* `file`      定义输入字段和 "浏览"按钮，供文件上传 
* `hidden`    定义隐藏的输入字段 
* `image`     定义图像形式的提交按钮 
* `reset`     定义重置按钮。重置按钮会清除表单中的所有数据 
* `button`   定义可点击按钮（多数情况下，用于通过 JavaScript 启动脚本）