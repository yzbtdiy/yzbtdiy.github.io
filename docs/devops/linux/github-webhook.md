---
title: github webhook
date: 2020-01-04 13:42:46
categories: linux
tags:
- github
- webhook
---

##  webhook

使用 github webhook 实现网站自动部署，服务器端部署 webhook 客户端后，git push 操作触发服务器自动执行 git pull 操作，实现自动部署。 

## 客户端
github 上有一个 go 语言开发的客户端，部署非常方便：
https://github.com/adnanh/webhook

<!-- more -->

## webhook.json

```json
[
  {
    "id": "webhook",
    "execute-command": "/PATH-TO-BINARY/webhook.sh",
    "command-working-directory": "/GIT-REPOSITORY-DIR",
    "pass-arguments-to-command":
    [
      {
        "source": "payload",
        "name": "head_commit.id"
      },
      {
        "source": "payload",
        "name": "pusher.name"
      },
      {
        "source": "payload",
        "name": "pusher.email"
      }
    ],
    "trigger-rule":
    {
      "and":
      [
        {
          "match":
          {
            "type": "payload-hash-sha1",
            "secret": "YOUR SECRET",
            "parameter":
            {
              "source": "header",
              "name": "X-Hub-Signature"
            }
          }
        },
        {
          "match":
          {
            "type": "value",
            "value": "refs/heads/master",
            "parameter":
            {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

## webhook.sh

```bash
#!/bin/bash
WEB_PATH='/GIT-REPOSITORY-DIR'
cd $WEB_PATH
git fetch --all
git reset --hard origin/master
```

## systemd service

```service
[Unit]
Description=Webhooks

[Service]
ExecStart=/PATH-TO-BINARY/webhook -hooks /PATH-TO-BINARY/webhook.json -hotreload -port PORT

[Install]
WantedBy=multi-user.target
```

## Payload URL

github 后台配置 Payload URL
`http://SERVER-IP:PORT/hooks/WEBHOOK-ID`