export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"安装"} }],
  ["/guide/InvoiceUsedCar/", { loader: () => import(/* webpackChunkName: "guide_InvoiceUsedCar_index.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/guide/InvoiceUsedCar/index.html.js"), meta: {"title":"二手车发票样式"} }],
  ["/guide/InvoiceCar/", { loader: () => import(/* webpackChunkName: "guide_InvoiceCar_index.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/guide/InvoiceCar/index.html.js"), meta: {"title":"机动车发票样式"} }],
  ["/guide/loading/", { loader: () => import(/* webpackChunkName: "guide_loading_index.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/guide/loading/index.html.js"), meta: {"title":"持续更新中……"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/software/newProject/dom/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
