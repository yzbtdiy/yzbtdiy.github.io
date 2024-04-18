---
title: Git 保存用户凭据
date: 2019-10-24 13:30:40
categories: tools
tags:
- git
- credentials
---

```bash
git config --global credential.username USERNAME
git config --global credential.helper store
git config --global user.name USERNAME
git config --global user.email username@example.com
git config --global --list
```