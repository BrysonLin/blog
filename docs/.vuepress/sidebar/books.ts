import { arraySidebar } from 'vuepress-theme-hope'

export default arraySidebar([
  "",
  {
    text: "基础介绍",
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
      "js/",
      "typescript/",
      "markdown/",
    ],
  },
]);