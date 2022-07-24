import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "代码笔记", icon: "code", link: "/code/" },
  { text: "必看书籍", icon: "enum", link: "/books/" },
  { text: "使用指南", icon: "create", link: "/use-guide/" },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
