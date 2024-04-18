---
title: wsgi 获取访问者 ip
date: 2019-05-11 09:52:44
categories: python
tags:
- python
- wsgi
---

>WSGI 全称 Web Server Gateway Interface，基于 WSGI 的python 框架有 django，flask，tornado 等，我们可以很简单获取访问者 IP。

<!-- more -->

## 方案一：apache & mod_wsgi & python

创建 getip.wsgi，使用 apache 加载 getip.wsgi 文件，内容如下：

```py
#!/usr/bin/env python3

def application (environ, start_response):
  response_body = 'Your ip address is: %s\n' % environ['REMOTE_ADDR']
  status = '200 OK'
  response_headers = [('Content-Type', 'text/plain'),
                      ('Content-Length', '1'),
                      ('Content-Length', str(len(response_body)))]
  start_response(status, response_headers)
  return [response_body]
```

## 方案二：flask&python

创建 getip.py 文件，执行：（退出时使用exit，不要直接关闭终端）

```bash
nohup python3 getip.py &
```

getip.py 内容如下：

```py
#!/usr/bin/env python3

from flask import Flask,request

app = Flask(__name__)

@app.route("/")

def get_ip():
  user_ip = request.remote_addr
  user_agent = request.user_agent
  return 'Your ip address is %s'

if __name__ == '__main__':
  app.run(host='0.0.0.0',port=80)
```