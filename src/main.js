/*
 * @Description: main.js文件
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:22:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/global.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import 'element-ui/lib/theme-chalk/index.css'
import { Table, TableColumn } from 'element-ui'
import AFTableColumn from 'af-table-column'
import './assets/theme/color.less'
Vue.use(AFTableColumn)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
