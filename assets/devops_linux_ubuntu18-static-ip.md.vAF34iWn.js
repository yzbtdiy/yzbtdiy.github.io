import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.ByOCcFwP.js";const y=JSON.parse('{"title":"ubuntu18 设置固定 ip 地址","description":"","frontmatter":{"title":"ubuntu18 设置固定 ip 地址","date":"2019-09-20T11:45:25.000Z","categories":"linux","tags":["ubuntu"]},"headers":[],"relativePath":"devops/linux/ubuntu18-static-ip.md","filePath":"devops/linux/ubuntu18-static-ip.md"}'),e={name:"devops/linux/ubuntu18-static-ip.md"},l=n(`<h2 id="ip-配置" tabindex="-1">IP 配置 <a class="header-anchor" href="#ip-配置" aria-label="Permalink to &quot;IP 配置&quot;">​</a></h2><ul><li>ubuntu 18 网络管理使用的是 <code>networkd</code>，对应服务为 <code>systemd-networkd</code>，管理命令为 <code>netplan</code></li><li>设置固定 ip 需要修改 <code>/etc/netplan/</code> 目录下对应的 yaml 文件，格式可以参考 <code>man netplan</code></li><li>修改后使用 <code>netplan apply</code> 应用配置</li></ul><h2 id="dns-配置" tabindex="-1">DNS 配置 <a class="header-anchor" href="#dns-配置" aria-label="Permalink to &quot;DNS 配置&quot;">​</a></h2><ul><li><code>/etc/resolv.conf</code> 由 systemd-resolved 生成</li><li>修改 <code>/etc/netplan/</code> 目录下对应的 yaml 文件中的 DNS 参数同样有效</li><li>通过 <code>/etc/resolv.conf</code> 查看当前 dns 为 127.0.0.1</li><li>通过 <code>netstat</code> 可以发现本地 53 号端口由 <code>systemd-resolve</code> 进程侦听</li><li>查看 <code>/run/systemd/resolve/resolv.conf</code> 文件可以得知目前使用的真实 DNS</li></ul><p><code>/etc/netplan/</code> yaml 文件模板</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  renderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networkd</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ethernets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    eno1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      addresses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">10.0.0.10/24</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">11.0.0.11/24</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      nameservers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        addresses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.8.8.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.8.4.4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.0.0.0/0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        via</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        metric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.0.0.0/0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        via</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        metric</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span></code></pre></div>`,6),t=[l];function p(h,k,d,E,r,c){return a(),i("div",null,t)}const g=s(e,[["render",p]]);export{y as __pageData,g as default};
