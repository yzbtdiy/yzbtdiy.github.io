import{_ as t,c as a,o as e,a5 as d}from"./chunks/framework.ByOCcFwP.js";const P=JSON.parse('{"title":"360 路由 P2 刷老毛子Padavan固件","description":"","frontmatter":{"title":"360 路由 P2 刷老毛子Padavan固件","date":"2019-09-09T11:51:07.000Z","categories":"linux","tags":["360p2","rom"]},"headers":[],"relativePath":"devops/linux/360p2-brush-padavan.md","filePath":"devops/linux/360p2-brush-padavan.md"}'),n={name:"devops/linux/360p2-brush-padavan.md"},s=d(`<h2 id="刷机原因" tabindex="-1">刷机原因 <a class="header-anchor" href="#刷机原因" aria-label="Permalink to &quot;刷机原因&quot;">​</a></h2><p>使用 360 P2 有 3 年了，去年运营商相继提供了 IPv6 网络，然而 360 的官方固件并未提供对 IPv6 的支持，所以决定试试第三方固件，在众多第三方固件中，我选择了 HIBOY 编译的 Padavan 固件，这应该是定制化功能最多的固件，360 P2 对应固件名 <code>360P2_3.4.3.9-099.trx</code></p><p>固件更新地址：<a href="https://opt.cn2qq.com/padavan/" target="_blank" rel="noreferrer">https://opt.cn2qq.com/padavan/</a></p><h2 id="刷机文件" tabindex="-1">刷机文件 <a class="header-anchor" href="#刷机文件" aria-label="Permalink to &quot;刷机文件&quot;">​</a></h2><p>打包下载：<a href="https://www.lanzous.com/b04xx85ih" target="_blank" rel="noreferrer">https://www.lanzous.com/b04xx85ih</a> 密码:360p2</p><table><thead><tr><th>文件</th><th>作用</th></tr></thead><tbody><tr><td>tftpd32</td><td>32位tftp服务器，传输文件</td></tr><tr><td>tftpd64</td><td>64位tftp服务器，传输文件</td></tr><tr><td>breed-mt7628-hiwifi-hc5661a.bin</td><td>breed，路由器的 Recovery</td></tr><tr><td>hfs.exe</td><td>简易 web 服务器</td></tr><tr><td>360P2_3.4.3.9-099.trx</td><td>HIBOY 编译的 Padavan 固件，扩展功能多</td></tr><tr><td>Tomato-Phoenix-MT76X8-MT7612E-WLLLL-V106@2018-01-13.trx</td><td>不死鸟固件，非常简洁</td></tr><tr><td>降级固件-360POP-P2-V1.0.25.36330.bin</td><td>降级固件，2.0 版本以上需要降级</td></tr><tr><td>调试版固件-360POP-P2-DEBUG-V1.0.42.42668.bin</td><td>调试版固件，默认开启 telnet</td></tr></tbody></table><h2 id="刷机过程" tabindex="-1">刷机过程 <a class="header-anchor" href="#刷机过程" aria-label="Permalink to &quot;刷机过程&quot;">​</a></h2><p><strong>刷机时务必使用网线连接至路由器 LAN 口进行操作</strong></p><ol><li>关闭 windows 防火墙，退出杀毒软件，设置 ip 为自动获取</li><li>开启 windows telnet 客户端，使用第三方终端软件也可以（如 XShell，MobaXterm 等）</li><li>路由器 web 控制台恢复出厂设置，刷入降级固件 <code>360POP-P2-V1.0.25.36330.bin</code></li><li>路由器 web 控制台刷入调试版固件</li><li>运行 tftpd，备份路由器固件，终端执行</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>telnet 192.168.0.1    #用户名 admin，密码是路由器登录密码</span></span>
<span class="line"><span>cd /tmp</span></span>
<span class="line"><span>cat /dev/mtd0 &gt; all.bin</span></span>
<span class="line"><span>tftp -p -l all.bin -r all.bin 192.168.0.x     #windows 的 IP 地址</span></span></code></pre></div><ol start="6"><li>运行 hfs，把 <code>breed-mt7628-hiwifi-hc5661a.bin</code> 拖入 hfs 主窗口，得到一个 web 地址： <code>http://192.168.0.x:8080/breed-mt7628-hiwifi-hc5661a.bin</code>，终端执行</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget http://192.168.0.x:8080/breed-mt7628-hiwifi-hc5661a.bin</span></span>
<span class="line"><span>mtd_write erase /dev/mtd1</span></span>
<span class="line"><span>cat breed-mt7628-hiwifi-hc5661a.bin &gt; /dev/mtd1</span></span></code></pre></div><ol start="7"><li>断电，戳 reset，通电 5 秒左右放开 reset，浏览器访问 <code>http://192.168.1.1</code> 进入 breed</li><li>breed 中恢复出厂设置，刷入固件 <code>360P2_3.4.3.9-099.trx</code></li><li>浏览器访问 <code>http://192.168.123.1</code>，用户名 admin，密码 admin，进入老毛子Padavan 固件 web 控制台，可自选开启IPv6</li></ol>`,13),i=[s];function r(l,p,o,c,h,b){return e(),a("div",null,i)}const _=t(n,[["render",r]]);export{P as __pageData,_ as default};