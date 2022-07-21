import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";   
import sidebar from "./sidebar";  

export default hopeTheme({
  // 当前网站部署到的域名。
  hostname: "https://brysonlin.github.io/blog/",
  // 是否全屏按钮
  fullscreen: true,
  //主题色选择器
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // 返回顶部控件，默认情况下将在下滑 300px 后显示。设置为一个数字以更改默认的触发距离。
  backToTop: true, 

  // 作者
  author: {
    name: "BrysonLin",
    url: "https://brysonlin.github.io/blog/",  // 个人网站地址
  },

  // 阿里图标库
  iconAssets: "iconfont",  

  // 个人主页头像
  logo: "/img/logo.svg",  

  // 纯净模式
  // pure: true,

  // 仓库配置，用于在导航栏中显示仓库链接。
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否显示仓库按钮
  repoDisplay:false,  

  // 文档在仓库中的目录
  // docsDir: "demo/src",

  // 标题栏
  navbar: navbar,
  // 标题栏布局方式
  navbarLayout:{ 
    left: ["Brand"], 
    center: ["Links"], 
    right: ["Search","Language", "Repo", "Outlook"] 
  },

  // 侧边栏
  sidebar: sidebar,

  copyright: "Copyright © 2022-present Mr.BrysonLin",
  // footer: "vuepress-theme-hope | BrysonLin@outlook.com",
  displayFooter: true,
  

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    avatar: "/img/headImg.png",
    medias: {
      Gitee: "https://gitee.com/",
      GitHub: "https://github.com/BrysonLin/blog/tree/gh-pages",
      // juejing: "https://juejin.cn/",
      Zhihu: "https://www.zhihu.com/signin?next=%2F",
      Email: "https://outlook.live.com/mail/0/",
      // Wechat: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/use-guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: true,
    // 评论配置
    comment: {
      provider: "Giscus",
      repo: "BrysonLin/blog",
      repoId: "R_kgDOHrKHcQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHrKHcc4CQTUW",
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    // 增强Markdown语法的插件
    mdEnhance: {
      attrs: true,  // 你可以使用特殊标记为 Markdown 元素添加属性
      container: true, // 自定义容器
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,  // 让你的 VuePress 站点中的 Markdown 文件支持脚注。
      imageMark: true,
      presentation: true,   // 是否启用幻灯片支持
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },
  },
});
