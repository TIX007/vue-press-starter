import { defineClientConfig } from 'vuepress/client'
import templateInvoiceCar from '../../packages/templateInvoiceCar.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(templateInvoiceCar)
    },
    setup() { },
    rootComponents: [],
})