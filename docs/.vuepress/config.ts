import { defineUserConfig } from "vuepress";
import theme from "./theme";  // vuepress-theme-hope 主题
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  lang: "zh-CN",
  title: "林初笔墨",
  description: "林初笔墨,林初笔墨的博客,Web前端博客,前端博客,Web全栈技术博客,前端工程师博客",
  
  base: "/blog/",  // 部署站点的基础路径。
  theme, // 主题配置
  plugins: [
    docsearchPlugin({
      appId: "F8DSR75O7J",
      apiKey: "0c6fffdc4c58479acdda2055c39d860c",
      indexName: "brysonlin",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],
});
