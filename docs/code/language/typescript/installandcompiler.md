---
title: 'TypeScirpt 安装和编译'
icon: typescript
article: false
---

## 一、TypeScript 安装

::: code-tabs

@tab npm
```shell
  npm install -g typescript
```
  
@tab cnpm  
```shell
   cnpm install -g typescript
```

@tab yarn

```shell
   yarn global add typescript
```

:::

## 二、TypeScript编译

1. 命令提示符(cmd)中输入

> 命令提示符中的路径必须为 `.ts` 文件所在的目录
```shell
   tsc helloWorld.ts   
```

2. 安装 ts-node插件

全局安装 `ts-node` 插件

```shell
   npm install --global ts-node
```
> 命令提示符中的路径必须为 `.ts` 文件所在的目录
```shell
  ts-node helloWorld.ts
```

## 三、命令编译报错
::: info
  [tsc命令报错:](https://blog.csdn.net/ddx2019/article/details/106252949/)
:::

按住win+x  选择 Windows PowerShell（管理员）
在cmd中输入：  
```shell
  set-ExecutionPolicy RemoteSigned
```
再输入 
```shell
  get-ExecutionPolicy 
```
```shell
  Restricted  
```

   


 


