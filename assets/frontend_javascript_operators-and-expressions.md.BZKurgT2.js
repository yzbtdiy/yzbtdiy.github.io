import{_ as d,c as e,o as t,a5 as o}from"./chunks/framework.ByOCcFwP.js";const p=JSON.parse('{"title":"javascript 运算符和表达式","description":"","frontmatter":{"title":"javascript 运算符和表达式","date":"2019-12-18T09:25:56.000Z","categories":"javascript","tags":["operators","expressions"]},"headers":[],"relativePath":"frontend/javascript/operators-and-expressions.md","filePath":"frontend/javascript/operators-and-expressions.md"}'),a={name:"frontend/javascript/operators-and-expressions.md"},r=o('<h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><p><strong>运算符优先级</strong>：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank" rel="noreferrer">MDN</a></p><h3 id="算数运算符" tabindex="-1">算数运算符 <a class="header-anchor" href="#算数运算符" aria-label="Permalink to &quot;算数运算符&quot;">​</a></h3><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td><code>+</code></td><td>求和</td></tr><tr><td><code>-</code></td><td>求差</td></tr><tr><td><code>*</code></td><td>求积</td></tr><tr><td><code>/</code></td><td>求商</td></tr><tr><td><code>%</code></td><td>求余</td></tr><tr><td><code>++</code></td><td><code>i++</code>：++ 在后，先把 i 赋值给 i++，然后 i 自增 1<br><code>++i</code>：++ 在前，先让 i 自加 1，然后把 i 赋值给 ++i</td></tr><tr><td><code>--</code></td><td><code>i--</code>：-- 在后，先把 i 赋值给 i--，然后 i 自减 1<br><code>--i</code>：-- 在前，先让 i 自减 1，然后把 i 赋值给 --i</td></tr></tbody></table><p><strong><code>%</code> 用途：</strong></p><ul><li>求余，判断一个数是否能被另一个数整除，取余求得的余数为 0 则被整除，如判断一个数是否为偶数可以对 2 取余</li><li>获取一个数字每个位上的数字，如 678 的百位 678/100，十位 678/10%10，个位 678%10</li><li>获取某个范围内的随机数，任何一个数字对 6 取余，结果都位于 0~5 之间，取余后加 1 可以获得 1~6 随机数</li></ul><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h3><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td><code>=</code></td><td>赋值，等号左侧为变量，右侧为值，把等号右侧的值赋予左侧的变量</td></tr><tr><td><code>+=</code></td><td><code>i+=6</code> 等价于 <code>i=i+6</code></td></tr><tr><td><code>-=</code></td><td><code>i-=6</code> 等价于 <code>i=i-6</code></td></tr><tr><td><code>*=</code></td><td><code>i*=6</code> 等价于 <code>i=i*6</code></td></tr><tr><td><code>/=</code></td><td><code>i/=6</code> 等价于 <code>i=i/6</code></td></tr></tbody></table><h3 id="条件-比较-运算符" tabindex="-1">条件（比较）运算符 <a class="header-anchor" href="#条件-比较-运算符" aria-label="Permalink to &quot;条件（比较）运算符&quot;">​</a></h3><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&gt;=</code></td><td>大于或等于</td></tr><tr><td><code>&lt;=</code></td><td>小于或等于</td></tr><tr><td><code>==</code></td><td>值相等，不区别类型</td></tr><tr><td><code>!=</code></td><td>不相等，不区别类型</td></tr><tr><td><code>===</code></td><td>值相等，严格区别类型</td></tr><tr><td><code>!==</code></td><td>不相等，严格区别类型</td></tr></tbody></table><ul><li>比较运算符表达式最终的值都是布尔值</li></ul><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>与，前面为真取后面的值作为表达式的值<br>前面为假取后面的值作为表达式的值</td></tr><tr><td>`</td><td></td></tr><tr><td><code>!</code></td><td>非，非真即假，非假即真，最终结果为布尔值</td></tr></tbody></table><h3 id="问号冒号表达式" tabindex="-1">问号冒号表达式 <a class="header-anchor" href="#问号冒号表达式" aria-label="Permalink to &quot;问号冒号表达式&quot;">​</a></h3><p><code>?:</code> 先判断问号前的表达式的值是否为真（不是布尔值会转化为布尔值），若为真则取冒号前表达式的值作为整个表达式的值，冒号后的表达式不会执行，若为假，则去冒号后的值作为整个表达式的值，冒号前的表达式不执行</p><h2 id="数据类型转化" tabindex="-1">数据类型转化 <a class="header-anchor" href="#数据类型转化" aria-label="Permalink to &quot;数据类型转化&quot;">​</a></h2><h3 id="显式转化" tabindex="-1">显式转化 <a class="header-anchor" href="#显式转化" aria-label="Permalink to &quot;显式转化&quot;">​</a></h3><table><thead><tr><th>调用函数</th><th>转化结果</th></tr></thead><tbody><tr><td><code>Number()</code></td><td>纯数字字符串转化为数字，非纯数字字符串转化为 <code>NaN</code>，空字符串或空白字符串转化为 0<br>布尔值 <code>true</code> 转化为 1，<code>false</code> 转化为 0<br><code>undefined</code> 转化为 <code>NaN</code><br><code>null</code> 转化为 0</td></tr><tr><td><code>parseInt()</code></td><td>从字符串开头提取整数，可以有空白字符</td></tr><tr><td><code>parseFloat()</code></td><td>从字符串开头提取小数，可以有空白字符</td></tr><tr><td><code>String()</code></td><td>任何类型转字符串会以字符串类型原样输出（相当于加引号）</td></tr><tr><td><code>Boolean()</code></td><td>数字类型的 0 和 <code>NaN</code> 为 <code>false</code>，其余为 <code>true</code><br>空字符串转化为 <code>false</code>，其余为 <code>true</code>，空白字符串也会转化为 <code>true</code><br><code>undefined</code> 转化为 <code>false</code><br><code>null</code> 转化为 <code>false</code></td></tr></tbody></table><h3 id="隐式转化" tabindex="-1">隐式转化 <a class="header-anchor" href="#隐式转化" aria-label="Permalink to &quot;隐式转化&quot;">​</a></h3><p>在进行运算和条件判断是会自动发生类型转化</p><h3 id="数字运算比较" tabindex="-1">数字运算比较 <a class="header-anchor" href="#数字运算比较" aria-label="Permalink to &quot;数字运算比较&quot;">​</a></h3><ul><li>1/0 infinity</li><li>0/1 0</li><li>0/0 NaN</li><li>-1/0 -infinity</li><li>1%0 NaN</li><li><code>NaN</code> 参与运算结果为 <code>NaN</code></li><li><code>NaN</code> 参与比较大小结果为 <code>false</code></li><li><code>NaN</code> 不等于 <code>NaN</code></li></ul><h3 id="字符串运算比较" tabindex="-1">字符串运算比较 <a class="header-anchor" href="#字符串运算比较" aria-label="Permalink to &quot;字符串运算比较&quot;">​</a></h3><ul><li>字符串相加为拼接字符串，其余均为转化为数字，大多数情况是 <code>NaN</code></li><li>字符串比较大小会根据字符串开头字符的 Unicode 码依次比较</li></ul><h3 id="布尔值运算比较" tabindex="-1">布尔值运算比较 <a class="header-anchor" href="#布尔值运算比较" aria-label="Permalink to &quot;布尔值运算比较&quot;">​</a></h3><ul><li>布尔值运算时转化为数字（1 true，0 false）</li><li>布尔值判等是不需要转化数字</li></ul><h3 id="undefined-运算比较" tabindex="-1">undefined 运算比较 <a class="header-anchor" href="#undefined-运算比较" aria-label="Permalink to &quot;undefined 运算比较&quot;">​</a></h3><ul><li><code>undefined</code> 运算时转化为数字 <code>NaN</code></li><li><code>undefined</code> 判等时不需要转化数字</li></ul><h3 id="null-运算比较" tabindex="-1">null 运算比较 <a class="header-anchor" href="#null-运算比较" aria-label="Permalink to &quot;null 运算比较&quot;">​</a></h3><ul><li><code>null</code> 参与运算时转化为 1</li><li><code>null</code> 判等时不需要转化为数字</li><li>空串和 <code>null</code> 不相等</li><li><code>false</code> 和 <code>null</code> 不相等</li><li><code>0</code> 和 <code>null</code> 不相等</li><li><code>undefined</code> 和 <code>null</code> 相等</li></ul>',30),c=[r];function l(i,n,h,s,u,b){return t(),e("div",null,c)}const N=d(a,[["render",l]]);export{p as __pageData,N as default};