import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.ByOCcFwP.js";const g=JSON.parse('{"title":"Nodejs 基础","description":"","frontmatter":{"title":"Nodejs 基础","date":"2020-03-03T19:47:18.000Z","categories":"javascript","tags":["node"]},"headers":[],"relativePath":"frontend/javascript/nodejs.md","filePath":"frontend/javascript/nodejs.md"}'),t={name:"frontend/javascript/nodejs.md"},e=n(`<h2 id="nodejs-简介" tabindex="-1">Nodejs 简介 <a class="header-anchor" href="#nodejs-简介" aria-label="Permalink to &quot;Nodejs  简介&quot;">​</a></h2><p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。</p><ul><li>[Nodejs 中文网(<a href="http://nodejs.cn/api/" target="_blank" rel="noreferrer">http://nodejs.cn/api/</a>)</li><li><a href="https://www.nodejs.red/" target="_blank" rel="noreferrer">Node.js 技术栈</a></li></ul><h2 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h2><ul><li>Buffer 用于读取或操作二进制数据流，做为 Node.js API 的一部分使用时无需 require。</li><li>Buffer 用于操作网络协议、数据库、图片和文件 I/O 等一些需要大量二进制数据的场景。</li><li>Buffer 在创建时大小已经被确定且是无法调整的，在内存分配这块 Buffer 是由 C++ 层面提供而不是 V8。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建 Buffer，初始化为 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建 Buffer，不进行初始化，存在随机数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allocUnsafe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据字符串内容创建 Buffer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nodejs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将 Buffer 内容转化为字符串 .toString</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buffer3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 读取修改 Buffer 内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buffer3[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 78</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="fs" tabindex="-1">fs <a class="header-anchor" href="#fs" aria-label="Permalink to &quot;fs&quot;">​</a></h2><h3 id="文件写入" tabindex="-1">文件写入 <a class="header-anchor" href="#文件写入" aria-label="Permalink to &quot;文件写入&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 异步写入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH_TO_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CONTENT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OPTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CALLBACK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同步写入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH_TO_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CONTENT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CALLBACK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>OPTION 选项</p><ul><li><code>encoding</code> 默认 <code>&#39;utf8&#39;</code></li><li><code>mode</code> 默认 <code>0o666</code></li><li><code>flag</code> 默认 <code>&#39;w&#39;</code></li></ul>`,11),h=[e];function l(p,k,r,d,E,o){return a(),i("div",null,h)}const f=s(t,[["render",l]]);export{g as __pageData,f as default};
