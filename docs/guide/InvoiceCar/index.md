# 机动车发票样式

将信息聚合在卡片容器中展示。

## 基础用法
包含标题，内容和操作。

<!-- @[code](../../../packages//templateInvoiceCar.vue) -->


:::demo 你可以使用`color`属性来改变按钮颜色，除此之外还可以用`enterColor`改变鼠标滑入时颜色，`border`改变边框样式不传默认为按钮背景颜色，`enterTextColor`改变鼠标滑入时字体颜色，当然如果没有`enterTextColor`它会默认`color`属性为滑入颜色。
  ```vue
    <templateInvoiceCar ref="childInvoiceCar" :invoiceData="formData" />
  ```
:::