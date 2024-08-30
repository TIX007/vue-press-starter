# 机动车发票样式

将信息聚合在卡片容器中展示。

## 基础用法
包含标题，内容和操作。

<!-- @[code](../../../packages//templateInvoiceCar.vue) -->


::: details  直接使用`templateInvoiceCar`即可预览样式，`formData`为需要传输的数据
  ```vue
    <templateInvoiceCar ref="childInvoiceCar" :invoiceData="formData" />
  ```
:::

<CodeGroup>
  <CodeGroupItem title="vue" >

```vue
<templateInvoiceCar ref="childInvoiceCar" :invoiceData="formData" />
```

  </CodeGroupItem>
</CodeGroup>