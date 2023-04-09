import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import './assets/styles/setup/_typography.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
