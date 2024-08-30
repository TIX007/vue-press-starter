export const themeData = JSON.parse("{\"lastUpdated\":\"最后一次更新\",\"repo\":\"TIX007/fengling-ui\",\"editLinks\":true,\"docsDir\":\"docs\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"repoLabel\":\"查看源码\",\"search\":true,\"searchMaxSuggestions\":10,\"sidebar\":{\"/guide/\":[{\"text\":\"开始\",\"collapsible\":true,\"children\":[\"\"]},{\"text\":\"组件\",\"collapsable\":true,\"prefix\":\"guide/\",\"children\":[\"/guide/InvoiceCar/index.md\",\"/guide/InvoiceUsedCar/index.md\",\"/guide/loading/index.md\"]}],\"/\":[{\"text\":\"组件\",\"path\":\"/guide/\"}]},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"组件\",\"prefix\":\"/guide/\",\"children\":[\"/guide/InvoiceCar/index.md\",\"/guide/InvoiceUsedCar/index.md\"]},{\"text\":\"外链\",\"children\":[{\"text\":\"Vue2组件库\",\"link\":\"https://tix007.github.io/Vue2-FengLing-UI/\"},{\"text\":\"Vue3组件库\",\"link\":\"https://tix007.github.io/vue3-liuying-ui/\"}]}],\"smoothScroll\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
