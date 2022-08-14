import { arraySidebar } from 'vuepress-theme-hope'

export default arraySidebar([
  "",
  {
    text: "认识互联网",
    link: "Internet.md",
    icon: "icon-language1"
  },
  {
    text: "前端基础",
    link: "basic/",
    prefix: "basic/",
    icon: "icon-CodeSandbox-circle-f",
    children: [
      "js/",
      "css/",
      "html.md"
    ],
  },
  {
    text: "前端进阶",
    link: "advanced/",
    prefix: "advanced/",
    icon: "icon-iconfont31",
    children: [
      "js-senior/",
      "css-layout/",
    ],
  },
  {
    text: "项目实战",
    link: "project-training/",
    prefix: "project-training/",
    icon: "icon-iconfontihou",
    children: [
      "js-actual-combat/",
      "css-actual-combat/",
      "html-actual-combat/",
    ],
  },
]);