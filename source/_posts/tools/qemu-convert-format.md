---
title: qemu 转化虚拟硬盘格式
date: 2019-05-14 10:53:33
categories: tools
tags:
- qemu
- virt
---

## qcow2 转 vmdk

```bash
qemu-img convert -f qcow2 source.qcow2 -O vmdk destination.vmdk
```

## vmdk 装 qcow2

```bash
qemu-img convert -f vmdk source.vmdk -O qcow2 destination.qcow2
```

## qed 装 vmdk

```bash
qemu-img convert -f qed source.qed -O vmdk destination.vmdk
```