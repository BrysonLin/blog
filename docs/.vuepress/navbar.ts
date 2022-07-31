import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "代码笔记", icon: "code", link: "/code/" },
  /*{ text: "泛应用", icon: "create", link: "/use-guide/" },
  { text: "面试题解", icon: "create", link: "/use-guide/" },
  { text: "LeetCode", icon: "create", link: "/use-guide/" },*/
  { text: "书籍文档", icon: "enum", link: "/books/" },
  { text: "使用指南", icon: "create", link: "/use-guide/" },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
