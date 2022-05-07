import './staticLoader'
import { createApp } from 'vue'
import App from './App.vue'
import { httpService } from '@/services'
import { clickaway, droppable, focus } from '@/directives'
import router from '@/router'

httpService.init()
router.init()

const app = createApp(App)

app.directive('koel-focus', focus)
app.directive('koel-clickaway', clickaway)
app.directive('koel-droppable', droppable)

/**
 * For Ancelot, the ancient cross of war
 * for the holy town of Gods
 * Gloria, gloria perpetua
 * in this dawn of victory
 */
app.mount('#app')

navigator.serviceWorker.register('./sw.js').then((): void => console.log('Service Worker Registered'))