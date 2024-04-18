import{_ as e,c as o,o as l,a5 as c}from"./chunks/framework.ByOCcFwP.js";const m=JSON.parse('{"title":"javascript 鼠标事件","description":"","frontmatter":{"title":"javascript 鼠标事件","date":"2020-01-08T18:26:48.000Z","categories":"javascript","tags":["dom","mouse","events"]},"headers":[],"relativePath":"frontend/javascript/dom-mouse-events.md","filePath":"frontend/javascript/dom-mouse-events.md"}'),t={name:"frontend/javascript/dom-mouse-events.md"},i=c('<h2 id="鼠标事件" tabindex="-1">鼠标事件 <a class="header-anchor" href="#鼠标事件" aria-label="Permalink to &quot;鼠标事件&quot;">​</a></h2><ul><li><code>onclick</code> 单击</li><li><code>onmouseover</code> / <code>onmouseout</code> 移入移出，从父元素移入子元素会切换事件对象，事件委派不应使用</li><li><code>onmounseenter</code> / <code>onmouseleave</code> 移入移出，从父元素移入子元素不会切换事件对象</li><li><code>onmousemove</code> 移动</li><li><code>onmousedown</code> / <code>onmouseup</code> 按下 / 弹起</li></ul><h2 id="拖拽" tabindex="-1">拖拽 <a class="header-anchor" href="#拖拽" aria-label="Permalink to &quot;拖拽&quot;">​</a></h2><h3 id="offset" tabindex="-1">offset <a class="header-anchor" href="#offset" aria-label="Permalink to &quot;offset&quot;">​</a></h3><ul><li><code>offsetWidth</code> content + padding + border 包含边框盒子的宽度，只读</li><li><code>offsetHeight</code> content + padding + border 包含边框盒子的高度，只读</li><li><code>offsetParent</code> 是 <code>offsetLeft</code> 和 <code>offsetTop</code> 最近的定位祖先元素，可以是： <ul><li>css 定位元素，即 <code>position</code> 为 <code>absolute</code>、<code>relative</code> 或 <code>fixed</code> 的元素</li><li><code>&lt;td&gt;</code>、<code>&lt;th&gt;</code>、<code>&lt;table&gt;</code></li><li><code>&lt;body&gt;</code></li></ul></li><li><code>offsetLeft</code> 相对于 <code>offsetParent</code> 的左侧边缘坐标</li><li><code>offsetTop</code> 相对于 <code>offsetParent</code> 的顶部边缘坐标</li></ul><h3 id="client" tabindex="-1">client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;client&quot;">​</a></h3><ul><li><code>clientWidth</code> content + padding 内容的宽度，包括内间距不包括边框和外间距，只读</li><li><code>clientHeight</code> content + padding 内容的高度，包括间距不包括边框和外间距，只读</li><li><code>clientTop</code> 上边框宽度，只读</li><li><code>clientLeft</code> 左边框宽度，只读</li></ul><h3 id="scroll" tabindex="-1">scroll <a class="header-anchor" href="#scroll" aria-label="Permalink to &quot;scroll&quot;">​</a></h3><ul><li><code>scrollWidth</code> 内容的宽度，包括内间距和可滚动的可视区域外尺寸，只读 <ul><li>内容未超出父元素等同于 <code>clientWidth</code></li><li>内容超出父元素等同于 content + 超出部分 + 一侧内间距 的宽度</li></ul></li><li><code>scrollHeight</code> 内容的高度，包括内间距和可滚动的可视区域外尺寸，只读 <ul><li>内容未超出父元素等同于 <code>clientHeight</code></li><li>内容超出父元素等同于 content + 超出部分 + 一侧内间距 的高度</li></ul></li><li><code>scrollTop</code> 上边框宽度，<strong>可写</strong></li><li><code>scrollLeft</code> 左边框宽度，<strong>可写</strong></li></ul><h3 id="鼠标坐标" tabindex="-1">鼠标坐标 <a class="header-anchor" href="#鼠标坐标" aria-label="Permalink to &quot;鼠标坐标&quot;">​</a></h3><ul><li><code>clientX</code> 和 <code>clientY</code> （Window-relative） <ul><li><code>clientX</code> 事件发生位置相对于与该事件关联的视口的水平坐标</li><li><code>clientY</code> 事件发生位置相对于与该事件关联的视口的垂直坐标</li></ul></li><li><code>pageX</code> 和 <code>pageY</code> （Document-relative） <ul><li><code>pageX</code> 事件发生位置相对于当前浏览器窗口的水平坐标</li><li><code>pageY</code> 事件发生位置相对于当前浏览器窗口的垂直坐标</li></ul></li><li><code>offsetX</code> 和 <code>offsetY</code> （Element-relative） <ul><li>事件发生位置相对于自身元素的水平坐标</li><li>事件发生位置相对于自身元素的垂直坐标</li></ul></li></ul><p>pageY = clientY + 文档垂直部分滚动的高度</p><p>pageX = clientX + 文档水平部分滚动的宽度</p>',13),d=[i];function a(n,s,r,u,f,h){return l(),o("div",null,d)}const _=e(t,[["render",a]]);export{m as __pageData,_ as default};