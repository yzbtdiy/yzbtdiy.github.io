import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.ByOCcFwP.js";const g=JSON.parse('{"title":"docker 基础用法","description":"","frontmatter":{"title":"docker 基础用法","date":"2019-07-02T11:32:27.000Z","categories":"linux","tags":["docker","golang"]},"headers":[],"relativePath":"devops/linux/docker-basics.md","filePath":"devops/linux/docker-basics.md"}'),h={name:"devops/linux/docker-basics.md"},t=n(`<h2 id="获取-docker" tabindex="-1">获取 docker <a class="header-anchor" href="#获取-docker" aria-label="Permalink to &quot;获取 docker&quot;">​</a></h2><ul><li>可以通过 centos7 的 extras 源直接安装 docker</li><li>从 docker 官方获取最新版 docker ce<br> 参考：<a href="https://docs.docker.com/install/linux/docker-ce/centos/" target="_blank" rel="noreferrer">https://docs.docker.com/install/linux/docker-ce/centos/</a></li><li>docker 中的程序未加载至内存中运行为 image（镜像），加载至内存中运行为 container（容器）</li></ul><p><strong>以下为最新版 docker ce 的安装使用</strong></p><h2 id="获取-yum-源" tabindex="-1">获取 yum 源 <a class="header-anchor" href="#获取-yum-源" aria-label="Permalink to &quot;获取 yum 源&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## curl https://download.docker.com/linux/centos/docker-ce.repo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /etc/yum.repos.d/docker.repo</span></span></code></pre></div><h2 id="安装-docker-ce-并运行" tabindex="-1">安装 docker ce 并运行 <a class="header-anchor" href="#安装-docker-ce-并运行" aria-label="Permalink to &quot;安装 docker ce 并运行&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## yum -y install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## systemctl restart docker</span></span></code></pre></div><h2 id="查看本地网络" tabindex="-1">查看本地网络 <a class="header-anchor" href="#查看本地网络" aria-label="Permalink to &quot;查看本地网络&quot;">​</a></h2><ul><li>本地出现名为 docker0 的 connection 以及 device</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## nmcli con show</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     UUID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                  TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      DEVICE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bca532d6-7c78-4437-84b7-8fab094d7118</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bridge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    docker0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ens33</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    e0b955f8-ae58-4b8c-b5cf-dc6eb7c4a45f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ethernet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ens33</span></span></code></pre></div><ul><li>device docker0 为 bridge 类型</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## nmcli device show docker0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.DEVICE:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         docker0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.TYPE:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                           bridge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.HWADDR:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         02:42:52:49:72:87</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.MTU:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            1500</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.STATE:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                          100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (connected)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.CONNECTION:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     docker0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GENERAL.CON-PATH:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       /org/freedesktop/NetworkManager/ActiveConnection/3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP4.ADDRESS[1]:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         172.17.0.1/16</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP4.GATEWAY:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            --</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP4.ROUTE[1]:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                           dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 172.17.0.0/16,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.0.0.0,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP6.GATEWAY:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            --</span></span></code></pre></div><h2 id="在-dockerhub-中搜索-image" tabindex="-1">在 dockerhub 中搜索 image <a class="header-anchor" href="#在-dockerhub-中搜索-image" aria-label="Permalink to &quot;在 dockerhub 中搜索 image&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker search httpd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                 DESCRIPTION</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                     STARS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               OFFICIAL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            AUTOMATED</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">httpd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HTTP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Project</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                  2537</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                [OK]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">centos/httpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                                                         23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                      [OK]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">centos/httpd-24-centos7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bui…</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   22</span></span></code></pre></div><h2 id="下载-image-到本地" tabindex="-1">下载 image 到本地 <a class="header-anchor" href="#下载-image-到本地" aria-label="Permalink to &quot;下载 image 到本地&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker pull centos/httpd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">latest:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pulling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos/httpd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a02a4930cb5d:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> complete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">628eaef4a9e0:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> complete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20c0ca1c0cd5:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> complete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">30cf2fb1a57e:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> complete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Digest:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:26c6674463ff3b8529874b17f8bb55d21a0dcf86e025eafb3c9eeee15ee4f369</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Status:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Downloaded</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> image</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos/httpd:latest</span></span></code></pre></div><h3 id="国内源加速" tabindex="-1">国内源加速 <a class="header-anchor" href="#国内源加速" aria-label="Permalink to &quot;国内源加速&quot;">​</a></h3><p><code>/etc/docker/daemon.json</code> 文件添加镜像站点</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;http://f1361db2.m.daocloud.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://hub-mirror.c.163.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://ustc-edu-cn.mirror.aliyuncs.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://www.daocloud.io/mirror" target="_blank" rel="noreferrer">DaoCloud</a> 镜像加速脚本</p><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h3><ul><li>使用国内镜像站加速可能遇到某些情况下latest并不是最新版,设置代理从原始镜像站下载可解决此问题</li></ul><p><strong>systemd 配置 proxy</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost~]# vim /etc/systemd/system/docker.service.d/http-proxy.conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTTP_PROXY=http://127.0.0.1:10809&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTTPS_PROXY=http://127.0.0.1:10809&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NO_PROXY=localhost,127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# systemctl daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# systemctl restart docker</span></span></code></pre></div><p><strong>docker 实例配置proxy</strong>(测试未成功)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# vim  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/.docker/config.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &quot;proxies&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   &quot;default&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     &quot;httpProxy&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://127.0.0.1:10809&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     &quot;httpsProxy&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://127.0.0.1:10809&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     &quot;noProxy&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;127.0.0.0/8,localhost&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]# systemctl restart docker</span></span></code></pre></div><h2 id="查看本地-images" tabindex="-1">查看本地 images <a class="header-anchor" href="#查看本地-images" aria-label="Permalink to &quot;查看本地 images&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker images</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">REPOSITORY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          TAG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 IMAGE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            CREATED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             SIZE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">centos/httpd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              2cc07fbb5000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> months</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        258MB</span></span></code></pre></div><h2 id="运行-web-container" tabindex="-1">运行 web container <a class="header-anchor" href="#运行-web-container" aria-label="Permalink to &quot;运行 web container&quot;">​</a></h2><ul><li>-d 后台运行</li><li>--name 容器的名字</li><li>-p 端口映射，对外提供服务</li><li>-v 卷映射，实现数据持久化</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker run -d --name myweb -p 80:80 -v /data/web:/var/www/html centos/httpd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a7ff084c8207d20c3ba91c0a87b7e9c0a6dd141c404f302d5cca6926abf0233d</span></span></code></pre></div><h2 id="查看运行中的-container" tabindex="-1">查看运行中的 container <a class="header-anchor" href="#查看运行中的-container" aria-label="Permalink to &quot;查看运行中的 container&quot;">​</a></h2><ul><li>-a 显示已退出的 container</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker ps -a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CONTAINER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        IMAGE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               COMMAND</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             CREATED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              PORTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                NAMES</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a7ff084c8207</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        centos/httpd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;/run-httpd.sh&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> seconds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        0.0.0.0:80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">80/tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   myweb</span></span></code></pre></div><h2 id="删除-container" tabindex="-1">删除 container <a class="header-anchor" href="#删除-container" aria-label="Permalink to &quot;删除 container&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker stop myweb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myweb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker rm myweb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myweb</span></span></code></pre></div><h2 id="删除-image" tabindex="-1">删除 image <a class="header-anchor" href="#删除-image" aria-label="Permalink to &quot;删除 image&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]## docker rmi centos/httpd:latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Untagged:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos/httpd:latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Untagged:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos/httpd@sha256:26c6674463ff3b8529874b17f8bb55d21a0dcf86e025eafb3c9eeee15ee4f369</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deleted:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:2cc07fbb5000234e85b7ef63b6253f397491959af2a24251b6ae20c207beb814</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deleted:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:b6a8d07fb6bd99c422d23fbe6972939859126de0210b25daeed5c37e9255d91d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deleted:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:365791a9af5080b5d029c9d3a230576a0bfd495a86651f2226d78877b64d9f0b</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deleted:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:e7da76d398f3e25f9ba9dc6181501f1181fc13d057a6a10e03bccc41c7bfbb32</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deleted:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sha256:071d8bd765171080d01682844524be57ac9883e53079b6ac66707e192ea25956</span></span></code></pre></div>`,38),l=[t];function e(k,p,r,d,F,o){return a(),i("div",null,l)}const E=s(h,[["render",e]]);export{g as __pageData,E as default};