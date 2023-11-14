import { createApp } from 'vue'
import 'vant/lib/index.css'
import './assets/css/style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { Button, Toast, NavBar, Tabbar, TabbarItem, Checkbox, Icon, Popup, Swipe, SwipeItem, List, PullRefresh, ActionBarIcon } from 'vant'
import './utils/rem'

const app = createApp(App)
app.use(Button)
app.use(Toast)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Icon)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.use(PullRefresh)
app.use(ActionBarIcon)
app.use(Popup)
app.use(store)
app.use(router)
app.mount('#app')

