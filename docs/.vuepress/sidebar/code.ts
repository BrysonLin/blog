import { arraySidebar } from 'vuepress-theme-hope'

export default arraySidebar([
  "",
  {
    text: "基础知识",
    icon: "windows",
    children: [
      "basic/",
      "github/"
    ],
  },
  {
    text: "前端开发",
    icon: "map",
    children: [
      "vue/",
      "react/",
      "nodejs/",
    ],
  },
  {
    text: "语言",
    icon: "language",
    prefix: "language/",
    // link: "Language/",
    children: [
      "typescript/",
      "markdown/",
    ],
  },
]);