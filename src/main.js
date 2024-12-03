import './assets/main.css'

import axios from 'axios'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// start axios codes
axios.defaults.baseURL = 'https://learning-laravel.test/'
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)
// end axios codes

app.use(createPinia())
app.use(router)

app.mount('#app')
