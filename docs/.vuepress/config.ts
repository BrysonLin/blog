import { defineUserConfig } from "vuepress";
import theme from "./theme";  // vuepress-theme-hope 主题
import { searchPlugin } from "@vuepress/plugin-search";  // 搜索框

export default defineUserConfig({
  lang: "zh-CN",
  title: "林初笔墨",
  description: "林初笔墨,Web前端博客,前端博客,Web全栈技术博客,前端工程师博客",
  
  base: "/blog/",  // 部署站点的基础路径。
  theme, // 主题配置
  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
