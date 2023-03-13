import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-Message-box.css'
import 'element-plus/theme-chalk/el-drawer.css'
import '@/neom-ui/common/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
