---
title: javascript dom 节点
date: 2020-01-05 21:16:53
categories: javascript
tags:
- dom
- nodes
---

##  子节点与父节点

### 子节点常用属性

|节点类型 | `nodeName` | `nodeType` | `nodeValue` |
| --- | --- | --- | --- |
| 文本节点 | `#text` | 3 | 文本内容 |
| 元素节点 | 大写元素标签 | 1 | `null` |
| 注释节点 | `#comment` | 8 | 注释内容 |

<!-- more -->

### 子节点

* `childNodes` 获取某个元素的子节点
  * 高版本浏览器 ：元素子节点，文本子节点（包括空格和换行），注释子节点
  * 低版本浏览器：元素子节点，文本子节点（不包括空格和换行），注释子节点
* `children`  获取某个元素的子元素节点
  * 高版本浏览器：元素子节点
  * 低版本浏览器：元素子节点，注释子节点
* `firstChild` 第一个子节点     `lastChild` 最后一个子节点，高低版本浏览器都适用
* `firstElementChild` 第一个子元素节点     `lastElementChild` 最后一个子元素节点，低版本浏览器不识别
* `previousSibling` 上一个兄弟节点    `nextSibling` 下一个兄弟节点，高低版本浏览器都适用
* `previousElementSibling` 上一个兄弟元素节点   `nextElementSibling` 下一个兄弟元素节点，低版本浏览器不识别

### 父节点

* `parentNode` 获取父节点，高低版本浏览器都适用
* `parentElement` 获取父元素，与 `parentNode` 相同，高低版本浏览器都适用

## 节点操作

### 创建节点

* `document.write();` 页面加载完成后使用会覆盖网页中其他 DOM 对象
* `innerHtml` 通过 `+=` 赋值包含标签的字符串
*  `document.createElement('tag')` 创建元素后父元素使用  `appendChild(追加的子节点);`

### 获取文本

* `textContent` 属性提供对元素中的 text 的访问权限：只提供文本，去掉所有的标签
  * `textContent` 可以获取隐藏元素的文本，包含换行和空白，IE8 及以下浏览器无法识别
* `innerText` 属性允许将元素中的 HTML 作为字符串来获取
  * `innerText` 不能获取隐藏元素的文本，获取到的文本不包含换行和空白
* `outerHTML` 属性用于获取元素的完整 HTML，包含文本，标签，换行和空白
  * `outerHTML` 可以获取隐藏元素完整标签及内容

### 子节点增加，替换，删除

* 插入子节点
  * `insertBefore(新子节点,参照子节点);`
* 追加子节点
  * `appendChild(追加的子节点);`
* 替换子节点
  * `replaceChild(新子节点,原子节点);`
* 删除子节点
  * `removeChild(删除的子节点);`
  * `子节点.remove;`    只有 PC 端可用，IE 和移动端不支持