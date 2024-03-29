import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "核心基础",
    icon: "icon-jisutuikuan",
    prefix: "/core-foundation/",
    children:[
      {
        text: "前端基础",
        prefix: "basic/",
        children:[
          // { text: "前端基础", link: "", icon: "strong", activeMatch: "^/core-foundation/$", },
          { text: "JavaScript", link: "js/", icon: "icon-js", },
          { text: "CSS/CSS3", link: "css/", icon: "icon-css3", },
          { text: "HTML/HTML5", link: "html/", icon: "icon-html5", },
        ]
      },
      {
        text: "前端进阶",
        prefix: "advanced/",
        children:[
          { text: "JavaScript 高级", link: "js-senior/", icon: "icon-java-script", },
          { text: "CSS 布局", link: "css-layout/", icon: "icon-CSS", },
        ]
      },
      {
        text: "项目实战",
        prefix: "project-training/",
        children:[
          { text: "JavaScript 实战案例", link: "js-actual-combat/", icon: "icon-Case", },
          { text: "CSS 实战案例", link: "css-actual-combat/", icon: "icon-Case", },
          { text: "HTML 实战案例", link: "html-actual-combat/", icon: "icon-Case", },
        ]
      }
    ] 
  },
  { 
    text: "跨端开发",
    icon: "icon-iconfontandroid1", 
    prefix: "/code/",
    children:[
      {
        text: "Vue 全家桶",
        prefix: "vue-family-meals/",
        children:[
          { text: "Vue 核心基础", link: "vue/", icon: "icon-vuejs-fill" },
          { text: "Vue-Router 路由管理", link: "vue-router/", icon: "icon-a-WifiRouter" },
          { text: "Vuex 状态管理", link: "vuex/", icon: "icon-clusterhealthstatus" },
          { text: "Vue-cli 脚手架", link: "vue-cli/", icon: "icon-clip" },
        ]
      },
      {
        text: "React 全家桶",
        prefix: "react-family-meals/",
        children:[
          { text: "React 核心基础", link: "react/", icon: "icon-react" },
        ]
      },
      {
        text: "语言",
        prefix: "language/",
        children:[
          { text: "TypeScript", link: "typescript/", icon: "icon-typescript" },
          { text: "Markdown", link: "markdown/", icon: "icon-markdown" },
        ]
      }
    ]
  },
  { text: "泛应用",
    icon: "icon-ai-module",
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
    icon: "icon-CodeSandbox-circle-f",
    prefix: "/whole-stack/",
    children:[
      {
        text: "后端开发",
        prefix: "service/",
        children:[
          { text: "NodeJS 基础+高级", link: "nodejs/", icon: "icon-node" },
          { text: "Koa 框架基础+实战", link: "koa/", icon: "icon-Koala" },
        ]
      },
      {
        text: "团队协同、工程化、运维监控",
        prefix: "team-collaboration/",
        children:[
          { text: "Git团队开发与跨团队开发", link: "github/", icon: "icon-createbug_Flat_icons" },
          { text: "项目自动化构建与自动化部署", link: "engineering/", icon: "icon-webpack" },
          { text: "Nginx负载均衡，日志与管理", link: "nginx/", icon: "icon-ai-module" },
        ]
      }
    ]
  },
  { 
    text: "学习笔记",
    icon: "icon-lamp",
    prefix: "/learning/",
    children:[
      { text: "Web前端", link: "web/", icon: "icon-weblock" },  
      { text: "书籍列表", link: "books/", icon: "icon-books" },  
      { text: "使用指南", link: "use-guide/",icon: "icon-zhinanzhidao" },
      {
        text: "主题文档",
        icon: "icon-pifuzhuti",
        link: "https://vuepress-theme-hope.github.io/v2/zh/",
      },
    ]
  },
]);
