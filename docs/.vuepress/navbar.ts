import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  {
    text: "核心基础",
    icon: "launch",
    prefix: "/guide/",
    children: [
      {
        text: "前端基础",
        icon: "edit",
        prefix: "basics/",
        children: [
          { text: "HTML/HTML5", link: "HTML" },
          { text: "CSS/CSS3", link: "css" },
          { text: "JavaScript基础+高级", link: "js" },
          { text: "CSS布局+JS特效案例库", link: "case" },
          { text: "常见设计模式", link: "design-mode" },
        ],
      },
      { 
        text: "代码规范",
        children: [
          {
            text: "HTML/CSS代码规范",
            icon: "edit",
            link: "standard/",
          },
        ]
      },
      {
        text: "模块化、组件化",
        children: [
          {
            text: "ES6基础+高级",
            link: "components/ES6",
          },
          {
            text: "前后端数据交互",
            link: "components/interaction",
          },
          {
            text: "移动WebApp开发",
            link: "components/webApp",
          }
        ],
      },
     
    ],
  },
  { text: "使用指南", icon: "creative", link: "/use-guide/" },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
