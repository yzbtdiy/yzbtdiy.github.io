import{_ as s,c as n,o as a,a5 as p}from"./chunks/framework.ByOCcFwP.js";const g=JSON.parse('{"title":"nginx 添加 tls 证书","description":"","frontmatter":{"title":"nginx 添加 tls 证书","date":"2019-05-07T09:29:43.000Z","categories":"linux","tags":["nginx","tls"]},"headers":[],"relativePath":"devops/linux/nginx-tls.md","filePath":"devops/linux/nginx-tls.md"}'),e={name:"devops/linux/nginx-tls.md"},l=p(`<h2 id="tls-证书申请" tabindex="-1">TLS 证书申请 <a class="header-anchor" href="#tls-证书申请" aria-label="Permalink to &quot;TLS 证书申请&quot;">​</a></h2><ul><li><a href="https://freessl.cn/" target="_blank" rel="noreferrer">freessl.cn</a></li><li><a href="https://www.wosign.com/DVSSL/DV_KuaiSSL_Free.htm" target="_blank" rel="noreferrer">wosign.com</a></li></ul><h2 id="保存到服务器" tabindex="-1">保存到服务器 <a class="header-anchor" href="#保存到服务器" aria-label="Permalink to &quot;保存到服务器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/etc/pki/tls/certs/server.pem</span></span>
<span class="line"><span>/etc/pki/tls/private/server.key</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>#网站基础配置</span></span>
<span class="line"><span>   listen       80;</span></span>
<span class="line"><span>   listen       443 ssl;</span></span>
<span class="line"><span>   server_name  example.com www.example.com;</span></span>
<span class="line"><span>   root         /usr/share/nginx/html/blog;</span></span>
<span class="line"><span>   index        index.html index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#ssl 配置</span></span>
<span class="line"><span>   ssl_certificate      /etc/pki/tls/certs/server.pem;</span></span>
<span class="line"><span>   ssl_certificate_key  /etc/pki/tls/private/server.key;</span></span>
<span class="line"><span>   ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>   ssl_session_timeout  5m;</span></span>
<span class="line"><span>   ssl_protocols        TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>   ssl_ciphers          HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>   ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#访问 80 重定向到 https </span></span>
<span class="line"><span>   if ($server_port = 80) {</span></span>
<span class="line"><span>      return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#wordpress 固定链接设置</span></span>
<span class="line"><span>   if (-f $request_filename/index.html){</span></span>
<span class="line"><span>     rewrite (.*) $1/index.html break;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (-f $request_filename/index.php){</span></span>
<span class="line"><span>     rewrite (.*) $1/index.php;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!-f $request_filename){</span></span>
<span class="line"><span>     rewrite (.*) /index.php;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#php fastcgi 配置</span></span>
<span class="line"><span>   location ~ \\.php$ {</span></span>
<span class="line"><span>     fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>     fastcgi_index  index.php;</span></span>
<span class="line"><span>     fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>     fastcgi_param  QUERY_STRING     $query_string;</span></span>
<span class="line"><span>     include        fastcgi_params;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6),i=[l];function t(c,r,o,_,h,d){return a(),n("div",null,i)}const f=s(e,[["render",t]]);export{g as __pageData,f as default};
