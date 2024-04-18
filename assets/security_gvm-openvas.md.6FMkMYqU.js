import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.ByOCcFwP.js";const E=JSON.parse('{"title":"新版 OpenVAS 安装使用","description":"","frontmatter":{"title":"新版 OpenVAS 安装使用","date":"2021-02-22T10:01:48.000Z","categories":"tools","tags":["scan"]},"headers":[],"relativePath":"security/gvm-openvas.md","filePath":"security/gvm-openvas.md"}'),t={name:"security/gvm-openvas.md"},n=e(`<h2 id="openvas-安装" tabindex="-1">Openvas 安装 <a class="header-anchor" href="#openvas-安装" aria-label="Permalink to &quot;Openvas 安装&quot;">​</a></h2><p>目前 OpenVAS 的最新版为 20.8.1, 安装包名与 cli 都已改名为 gvm, 以下为 kali linux 上的安装步骤</p><h3 id="安装-gvm" tabindex="-1">安装 gvm <a class="header-anchor" href="#安装-gvm" aria-label="Permalink to &quot;安装 gvm&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# apt install gvm -y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# gvm-setup</span></span></code></pre></div><p>如果 OpenVAS 的数据下载失败, 可以使用 proxychains 配置代理</p><h3 id="修改-admin-密码" tabindex="-1">修改 admin 密码 <a class="header-anchor" href="#修改-admin-密码" aria-label="Permalink to &quot;修改 admin 密码&quot;">​</a></h3><p><code>gvm-setup</code> 过程会生成非常复杂的密码, 不便于记忆, 可以通过如下命令修改密码</p><p>如果不使用 runuser 会无法修改密码</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# runuser -u _gvm -- gvmd --user=admin --new-password=password</span></span></code></pre></div><h3 id="修改侦听地址" tabindex="-1">修改侦听地址 <a class="header-anchor" href="#修改侦听地址" aria-label="Permalink to &quot;修改侦听地址&quot;">​</a></h3><p>OpenVAS 的 Web 控制台默认侦听地址为 127.0.0.1, 只能在安装 OpenVAS 的系统中访问</p><p>若 OpenVAS 安装到虚拟机中, 物理机浏览器无法访问, 修改侦听地址为 0.0.0.0 或 虚拟机 ip 即可</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# vim /lib/systemd/system/greenbone-security-assistant.service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/sbin/gsad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --listen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0.0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9392</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# systemctl daemon-reload</span></span></code></pre></div><h3 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h3><p>OpenVAS 的 Web 控制台默认端口是 9392, 需要通过 https 协议访问, 初次访问需要添加信任</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@kali </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# gvm-start</span></span></code></pre></div>`,16),l=[n];function p(h,r,k,o,d,c){return i(),a("div",null,l)}const u=s(t,[["render",p]]);export{E as __pageData,u as default};