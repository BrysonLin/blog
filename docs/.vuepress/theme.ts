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
    url: "https://mrhope.site",  // 个人网站地址
  },

  // 阿里图标库
  iconAssets: "iconfont",  

  // 个人主页头像
  logo: "/logo.svg",  

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

  copyright: "© 2022 BrysonLin",
  footer: "vuepress-theme-hope | BrysonLin@outlook.com",
  displayFooter: true,
  

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true, // 自动提取摘要,除了有手动提取的摘要外 | <!-- more --> 以上为手动摘要
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       * <script src="https://giscus.app/client.js"
          data-repo="BrysonLin/blog"
          data-repo-id="R_kgDOHrKHcQ"
          data-category="Announcements"
          data-category-id="DIC_kwDOHrKHcc4CQTUW"
          data-mapping="pathname"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="light"
          data-lang="zh-CN"
          data-loading="lazy"
          crossorigin="anonymous"
          async>
          </script>
       */
      provider: "Giscus",
      repo: "BrysonLin/blog",
      repoId: "R_kgDOHrKHcQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHrKHcc4CQTUW",



      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },
    // 增强Markdown语法的插件
    mdEnhance: {
      enableAll: true,  // 是否启用全部功能。
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
