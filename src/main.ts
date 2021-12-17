import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ToyUI from '../packages';
import Preview from '@/components/Preview.vue'
import '@/assets/markdown.css'
import 'normalize.css'

const app = createApp(App)
app.component('Preview', Preview)
app.use(router).use(ToyUI).mount('#app')
