import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "代码笔记", icon: "code", link: "/code/" },
  { text: "使用指南", icon: "creative", link: "/use-guide/" },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
