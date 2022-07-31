---
title: Vscode 编译 ts
icon: typescript
article: false
---

## TypeScript 开发工具 Vscode 自动编译 .ts 文件

<!-- more -->

1. 创建 tsconfig.json 文件         tsc --init  生成配置文件

2. 老版本 vscode 点击: 任务->运行任务-> tsc:监视-tsconfig.json 然后就可以自动生 成代码了

3. 最新版本 vscode 点击: 终端->运行任务->typescript->tsc:监视-tsconfig.json 然后就 可以自动生成代码了

4. 命令行：

   ```cmd
   tsc -w
   ```