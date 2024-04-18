import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.ByOCcFwP.js";const g=JSON.parse('{"title":"Windows 精简利器 MSMG Toolkit","description":"","frontmatter":{"title":"Windows 精简利器 MSMG Toolkit","date":"2020-06-21T10:14:34.000Z","categories":"windows","tags":["os"]},"headers":[],"relativePath":"devops/windows/msmg-toolkit.md","filePath":"devops/windows/msmg-toolkit.md"}'),e={name:"devops/windows/msmg-toolkit.md"},t=p(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>MSMG Toolkit 是基于命令行的 Windows 系统精简工具, 可以对 Windows 镜像进行深度精简, 彻底删除不需要的软件和功能(包括微软的同步服务, 照片查看器和视频播放器等), 可以自定义 list 批量删除内置软件, 虽然没有华丽的 GUI, 但绝对称得上是神器, 免费使用, 个人感觉比 NTLite(免费许可) 好用</p><p>官网: <a href="https://msmgtoolkit.in/" target="_blank" rel="noreferrer">https://msmgtoolkit.in/</a></p><p>下载地址: <a href="https://msmgtoolkit.in/download.html" target="_blank" rel="noreferrer">https://msmgtoolkit.in/download.html</a></p><ul><li>官方下载地址是 MEGA 网盘, 部分地区需要科学上网</li><li><a href="https://yzbtdiy.lanzoui.com/b04yrlnpa" target="_blank" rel="noreferrer">蓝奏云下载</a> 不定期更新</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>下载完解压得到以下文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Bin                 //精简工具二进制文件</span></span>
<span class="line"><span>Custom              //自定义资源</span></span>
<span class="line"><span>Drivers             //驱动</span></span>
<span class="line"><span>DVD                 //ISO 内文件的拷贝 </span></span>
<span class="line"><span>ISO                 //MSDN 原版 ISO 存放位置</span></span>
<span class="line"><span>Logs                //日志</span></span>
<span class="line"><span>Mount               //win文件挂载目录</span></span>
<span class="line"><span>Packs               //附加软件包</span></span>
<span class="line"><span>Temp                //临时目录</span></span>
<span class="line"><span>Updates             //更新补丁</span></span>
<span class="line"><span>WHD                 //WHD 文件目录</span></span>
<span class="line"><span>Changelog.txt       //更新日志</span></span>
<span class="line"><span>CREDITS.txt         //第三方程序说明</span></span>
<span class="line"><span>DONATE.jpg          //捐赠</span></span>
<span class="line"><span>LICENSE.txt         //许可协议</span></span>
<span class="line"><span>README.txt          //README 文件</span></span>
<span class="line"><span>Start.cmd           //开始脚本</span></span>
<span class="line"><span>Toolkit.cmd         //工具脚本</span></span>
<span class="line"><span>Website.url         //官网链接</span></span></code></pre></div><p>解压后运行 Start.cmd 或 Tookit.cmd 均可, 启动时输入 &quot;A&quot; 同意使用协议, 然后回车添加环境变量, 会出现以下选项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[1]   Source      //镜像源, 可以直接选 iso 文件,也可自行解压至 dvd 目录</span></span>
<span class="line"><span>[2]   Convert     //格式转化 esd &lt;==&gt; wim</span></span>
<span class="line"><span>[3]   Integrate   //集成驱动, 更新等</span></span>
<span class="line"><span>[4]   Remove      //精简系统自带软件和功能</span></span>
<span class="line"><span>[5]   Customize   //启用或禁用系统功能, 通过 xml 文件配置 Metro Apps</span></span>
<span class="line"><span>[6]   Apply       //保存更改</span></span>
<span class="line"><span>[7]   Target      //生成新的 iso 或制作启动盘</span></span>
<span class="line"><span>[8]   Tools       //wim 另存为, 一些配置选项</span></span>
<span class="line"><span>[X]   Quit        //退出</span></span></code></pre></div><ul><li>汉化版更新不是太及时, 建议使用英文原版</li><li>务必集成更新后精简系统, 否则会报错</li><li>Bin 目录下的 Lists 目录可以自定义精简软件或功能列表, XXX_Templates 文件夹内是模板</li><li>精简后的系统可能无法安装累计更新补丁</li></ul><h2 id="感受" tabindex="-1">感受 <a class="header-anchor" href="#感受" aria-label="Permalink to &quot;感受&quot;">​</a></h2><p>个人使用 MSMG Toolkit 精简了除了 Microsoft Store 的所有应用, 彻底删除了 Windows Defender, 也干掉了微软同步, 系统异常干净, 除了不能安装每个月的累计更新外没有其他问题</p>`,13),l=[t];function i(o,c,r,d,m,h){return n(),a("div",null,l)}const _=s(e,[["render",i]]);export{g as __pageData,_ as default};
