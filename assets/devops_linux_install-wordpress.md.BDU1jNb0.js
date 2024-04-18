import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.ByOCcFwP.js";const F=JSON.parse('{"title":"安装新版 wordpress","description":"","frontmatter":{"title":"安装新版 wordpress","date":"2019-05-06T09:22:11.000Z","categories":"linux","tags":["lnmp","wordpress"]},"headers":[],"relativePath":"devops/linux/install-wordpress.md","filePath":"devops/linux/install-wordpress.md"}'),p={name:"devops/linux/install-wordpress.md"},e=n(`<blockquote><p>不知不觉，wordpress 已经更新到 5.X 了，第一次接触 wordpress 还在新浪云上，那时候实名认证后每个月有免费的云豆，wordpress 版本是 3.6，那时作为初中生的我有了一个 wordpress 博客激动了好久，如今 wordpress 已经更新到 5.X 了，新版 wordpress 对安装环境有了新的要求。5.X 的 wordpress 不再支持 php5 了，需要安装 php7 才行。</p></blockquote><h2 id="添加-yum-源" tabindex="-1">添加 yum 源 <a class="header-anchor" href="#添加-yum-源" aria-label="Permalink to &quot;添加 yum 源&quot;">​</a></h2><p>添加 epel，ius，mariadb，nginx 的 yum 源</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://git.io/fjlc4)</span></span></code></pre></div><h2 id="安装所需软件" tabindex="-1">安装所需软件 <a class="header-anchor" href="#安装所需软件" aria-label="Permalink to &quot;安装所需软件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-mysqlnd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-fpm-nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-gd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-pecl-memcached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php72u-opcache</span></span></code></pre></div><h2 id="环境初始化" tabindex="-1">环境初始化 <a class="header-anchor" href="#环境初始化" aria-label="Permalink to &quot;环境初始化&quot;">​</a></h2><h3 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h3><p>nginx 配置文件 <code>/etc/nginx/conf.d/default.conf</code></p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html/wordpress;</span></span>
<span class="line"><span>        index  index.php index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        root           /usr/share/nginx/html/wordpress;</span></span>
<span class="line"><span>        fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>        fastcgi_index  index.php;</span></span>
<span class="line"><span>        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        include        fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="mariadb-初始化" tabindex="-1">mariadb 初始化 <a class="header-anchor" href="#mariadb-初始化" aria-label="Permalink to &quot;mariadb 初始化&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql_secure_installation</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #设置root密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -uroot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p密码</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;create database wordpress;&quot;</span></span></code></pre></div><h3 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-fpm</span></span></code></pre></div><h2 id="下载-wordpress-并解压" tabindex="-1">下载 WordPress 并解压 <a class="header-anchor" href="#下载-wordpress-并解压" aria-label="Permalink to &quot;下载 WordPress 并解压&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://wordpress.org/latest.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cxf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/nginx/html/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest.tar.gz</span></span></code></pre></div><h2 id="权限处理" tabindex="-1">权限处理 <a class="header-anchor" href="#权限处理" aria-label="Permalink to &quot;权限处理&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-fpm:php-fpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/nginx/html/wordpress</span></span></code></pre></div><h2 id="浏览器输入域名或-ip-地址开始安装向导" tabindex="-1">浏览器输入域名或 ip 地址开始安装向导 <a class="header-anchor" href="#浏览器输入域名或-ip-地址开始安装向导" aria-label="Permalink to &quot;浏览器输入域名或 ip 地址开始安装向导&quot;">​</a></h2>`,19),t=[e];function l(h,r,d,o,k,c){return i(),a("div",null,t)}const u=s(p,[["render",l]]);export{F as __pageData,u as default};