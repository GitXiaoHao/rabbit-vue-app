import {createApp} from 'vue'
import App from './App.vue'

import {loadPlugins} from "@/plugins/index.js";
import router from "@/router/Index.js";
//引入rabbit初始化样式
import '@/styles/common.scss'
// import './style.css'
const app = createApp(App)
/** 加载插件 */
loadPlugins(app)
/** 添加路由 */


app.use(router)
router.isReady().then(() => {
    app.mount("#app")
})