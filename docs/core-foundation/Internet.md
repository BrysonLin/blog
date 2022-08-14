---
title: 认识互联网（基本原理）
icon: icon-language1
category: 互联网
timeline: false
star: true
article: false
---

::: info
 从前端角度了解互联网的基础知识
:::

## 1、在本地开发，在服务器共享

::: tip TIP
 程序开发人员->在本地开发（html、css、js）->上传到服务器（共享）->所有用户访问
:::

![image-20220308124109360.e91b7a37](/core-foundation/basic/html/assets/image-20220308124109360.e91b7a37.png)

## 2、关于 HTTP 协议

::: tip TIP
- HTTP 协议 （HyperText Transfer Protocol）超文本传输协议，是互联网数据传输的常见协议
- 一次 HTTP 事物由 "HTTP 请求" 和 "HTTP 响应" 构成
- 网址前的 http:// 就表示用 http 协议请求页面
:::

### HTTP 请求

![image-20220308153029292.5c31b757](/core-foundation/basic/html/assets/image-20220308153029292.5c31b757.png)

### HTTP 响应

::: tip TIP
用户发送 HTTP 请求给服务器 -> 服务器识别发来的 HTTP 请求 -> 返回给用户端 a.html 文件，一来一回用户就能看到当前的网页了，返回的这个过程就叫做 HTTP 响应
:::

![image-20220308153029292.5c31b757](/core-foundation/basic/html/assets/image-20220308153029292.5c31b757.png)

## 3、前后端请求交互基本流程

::: tip TIP

 - 用户发送 HTTP 请求
 - 在服务器上：Java，PHP，Python，NodeJS 等程序运行时执行数据库“增删查改” 等业务，他们就是后端语言
 - 服务器返回 HTTP 响应
 - 在浏览器中，HTML、CSS 和 JS 程序将运行， 执行页面结构渲染、美化、交互效果等业务，他们就是前端语言
:::
![image-20220308160021775.3d06fdcb](/core-foundation/basic/html/assets/image-20220308160021775.3d06fdcb.png)