import comp from "D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/guide/loading/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/loading/\",\"title\":\"持续更新中……\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1724999614000,\"contributors\":[{\"name\":\"lichong\",\"email\":\"1546214265@qq.com\",\"commits\":1}]},\"filePathRelative\":\"guide/loading/index.md\"}")
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
