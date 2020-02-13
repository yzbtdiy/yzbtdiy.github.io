#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成静态文件的目录
cd public

# git 初始化
git init
git add -A
git commit -m 'rebuild site file'

# 推送静态文件到 master 分支
git push -f https://github.com/yzbtdiy/yzbtdiy.github.io.git master

cd -