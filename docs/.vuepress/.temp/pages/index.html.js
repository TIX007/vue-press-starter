import comp from "D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"lang\":\"zh-CN\",\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"去使用\",\"link\":\"/guide/InvoiceCar/index.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁易上手\",\"details\":\"开箱即用，简洁易上手适用多种发票类型\"},{\"title\":\"Vue框架\",\"details\":\"基于vue框架进行开发\"},{\"title\":\"最新版\",\"details\":\"电子发票预览为税务局最新版的电子发票样式\"}],\"footer\":null},\"headers\":[],\"git\":{\"updatedTime\":1724999614000,\"contributors\":[{\"name\":\"lichong\",\"email\":\"1546214265@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
