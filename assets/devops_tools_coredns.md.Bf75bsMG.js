import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.ByOCcFwP.js";const g=JSON.parse('{"title":"CoreDNS","description":"","frontmatter":{"title":"CoreDNS","date":"2023-09-18T12:12:04.000Z","categories":"tools","tags":["go","dns server"]},"headers":[],"relativePath":"devops/tools/coredns.md","filePath":"devops/tools/coredns.md"}'),t={name:"devops/tools/coredns.md"},p=e(`<h2 id="coredns-简介" tabindex="-1">CoreDNS 简介 <a class="header-anchor" href="#coredns-简介" aria-label="Permalink to &quot;CoreDNS 简介&quot;">​</a></h2><p>CoreDNS 是一个使用 Golang 开发的开源 DNS 服务器, 有丰富的扩展插件.</p><p>Github: <a href="https://github.com/coredns/coredns" target="_blank" rel="noreferrer">coredns/coredns: CoreDNS is a DNS server that chains plugins (github.com)</a></p><h2 id="coredns-快速创建dns-server" tabindex="-1">CoreDNS 快速创建dns-server <a class="header-anchor" href="#coredns-快速创建dns-server" aria-label="Permalink to &quot;CoreDNS 快速创建dns-server&quot;">​</a></h2><h3 id="创建-coredns-配置文件" tabindex="-1">创建 CoreDNS 配置文件 <a class="header-anchor" href="#创建-coredns-配置文件" aria-label="Permalink to &quot;创建 CoreDNS 配置文件&quot;">​</a></h3><p>文件名为 <code>coredns.conf</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>localtest.com {</span></span>
<span class="line"><span>    file localtest.com.data</span></span>
<span class="line"><span>    log</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>. {</span></span>
<span class="line"><span>    forward . 180.76.76.76</span></span>
<span class="line"><span>    log</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="创建dns区域文件" tabindex="-1">创建DNS区域文件 <a class="header-anchor" href="#创建dns区域文件" aria-label="Permalink to &quot;创建DNS区域文件&quot;">​</a></h3><p>文件名为 <code>localtest.com.data</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ORIGIN localtest.com.</span></span>
<span class="line"><span>@	3600 IN	SOA localtest.com. localtest.com. (</span></span>
<span class="line"><span>				2017042745 ; serial</span></span>
<span class="line"><span>				7200       ; refresh (2 hours)</span></span>
<span class="line"><span>				3600       ; retry (1 hour)</span></span>
<span class="line"><span>				1209600    ; expire (2 weeks)</span></span>
<span class="line"><span>				3600       ; minimum (1 hour)</span></span>
<span class="line"><span>				)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	3600 IN NS 192.168.1.192.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www     IN A     192.168.1.192</span></span>
<span class="line"><span>        IN AAAA  ::1</span></span></code></pre></div><h3 id="运行-coredns" tabindex="-1">运行 CoreDns <a class="header-anchor" href="#运行-coredns" aria-label="Permalink to &quot;运行 CoreDns&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.\\coredns.exe -conf .\\coredns.conf</span></span></code></pre></div>`,12),o=[p];function l(c,r,i,d,h,u){return n(),a("div",null,o)}const _=s(t,[["render",l]]);export{g as __pageData,_ as default};
