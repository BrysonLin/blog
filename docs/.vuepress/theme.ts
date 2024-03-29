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
    orange: "#fb9b5f",
    orange1: "#FF770F",
    green: "#91B822",
    blue1: "#80D1C8"
  },
  // 返回顶部控件，默认情况下将在下滑 300px 后显示。设置为一个数字以更改默认的触发距离。
  backToTop: true, 

  // 作者
  author: {
    name: "BrysonLin",
    url: "https://brysonlin.github.io/blog/",  // 个人网站地址
  },

  
  // 阿里图标库
  iconAssets: "//at.alicdn.com/t/c/font_3537847_eymgysin1wj.css",  // 这是阿里图标库里自己创建的
  iconPrefix: "iconfont ",
  // iconAssets: "iconfont",  // 默认的官网图标库

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
    center: ["Links",], 
    right: ["Language", "Repo", "Outlook","Search",] 
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
    // mdEnhance: {
    //   enableAll: true,
    // }
    mdEnhance: {
      attrs: true,          // 你可以使用特殊标记为 Markdown 元素添加属性
      container: true,      // 主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。
      align: true,          // 段落对齐进行自定义。
      flowchart: true,      // 流程图
      footnote: true,       // 让你的 VuePress 站点中的 Markdown 文件支持脚注。
      sub: true,            // 启用下角标功能
      sup: true,            // 启用上角标
      tex: true,            // 支持公示
      chart: true,          // 文件支持图表。
      echarts: true,        // 文件支持echarts图表。
      mermaid: true,        // 甘特图、git图等
      vpre: true,           // Mustache  语法
      presentation: true,   // 是否启用幻灯片支持
      tabs: true,           // Markdown 文件支持供选项卡。
      codetabs: true,       // 代码块分组
      demo: true,           //让你的 VuePress 站点中的 Markdown 文件支持代码案例。
      tasklist: true,       //任务列表。 
      imageMark: true,      // 启用图片标记
      imageSize: true,      // 启用图片大小
      include: true,        // 导入其他文件。
      mark: true,           // Markdown 文件支持标记 ==标记==
    },
    components:[
      "Badge",
      "CodePen",
      "PDF",
    ],
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "BrysonLin 的个人博客",
        short_name: "BrysonLin Blog",
        description: "BrysonLin 的个人博客",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "分类",
            short_name: "分类",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "文章分类分组",
          },
          {
            name: "标签",
            short_name: "标签",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "文章标签分组",
          },
          {
            name: "时间线",
            short_name: "时间线",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "时间线文章列表",
          },
          {
            name: "个人介绍",
            short_name: "个人介绍",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "个人介绍",
          },
        ],
      },
    },
  },
});
