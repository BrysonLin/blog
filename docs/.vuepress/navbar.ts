import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "核心基础",
    icon: "launch",
    prefix: "/core-foundation/",
    children:[
      {
        text: "前端基础",
        prefix: "basic/",
        children:[
          // { text: "前端基础", link: "", icon: "strong", activeMatch: "^/core-foundation/$", },
          "js/",
          "css/",
          "html/",
        ]
      },
      {
        text: "前端进阶",
        prefix: "advanced/",
        children:[
          "js-senior/",
          "css-layout/",
        ]
      },
      {
        text: "项目实战",
        prefix: "project-training/",
        children:[
          "js-actual-combat/",
          "css-actual-combat/",
          "html-actual-combat/",
        ]
      }
    ] 
  },
  { 
    text: "跨端开发",
    icon: "strong", 
    prefix: "/code/",
    children:[
      {
        text: "Vue 全家桶",
        prefix: "vue-family-meals/",
        children:[
          { text: "Vue 核心基础", link: "vue/", icon: "vue" },
          { text: "Vue-Router 路由管理", link: "vue-router/", icon: "vue" },
          { text: "Vuex 状态管理", link: "vuex/", icon: "vue" },
          { text: "Vue-cli 脚手架", link: "vue-cli/", icon: "vue" },
        ]
      },
      {
        text: "React 全家桶",
        prefix: "react-family-meals/",
        children:[
          { text: "React 核心基础", link: "react/", icon: "react" },
        ]
      },
      {
        text: "语言",
        prefix: "language/",
        children:[
          { text: "TypeScript", link: "typescript/", icon: "typescript" },
          { text: "Markdown", link: "markdown/", icon: "markdown" },
        ]
      }
    ]
  },
  { text: "泛应用",
    icon: "create",
    prefix: "/generic-application/",
    children:[
      "small-program/",
      "react-native/",
      "flutter/",
      "electron/",
      "hybrid-app/",
    ]  
  },
  /*
  { text: "面试题解", icon: "create", link: "/use-guide/" },
  { text: "LeetCode", icon: "create", link: "/use-guide/" },*/
  { 
    text: "全栈开发",
    icon: "enum",
    prefix: "whole-stack/",
    children:[
      {
        text: "后端开发",
        prefix: "service/",
        children:[
          { text: "NodeJS 基础+高级", link: "nodejs/", icon: "nodeJS" },
          { text: "Koa 框架基础+实战", link: "koa/", icon: "nodeJS" },
        ]
      },
      {
        text: "团队协同、工程化、运维监控",
        prefix: "team-collaboration/",
        children:[
          { text: "Git团队开发与跨团队开发", link: "github/", icon: "github" },
          { text: "项目自动化构建与自动化部署", link: "engineering/", icon: "markdown" },
          { text: "Nginx负载均衡，日志与管理", link: "nginx/", icon: "nginx" },
        ]
      }
    ]
  },
  { text: "学习笔记", icon: "enum", link: "/books/" },
  // { text: "使用指南", icon: "create", link: "/use-guide/" },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
