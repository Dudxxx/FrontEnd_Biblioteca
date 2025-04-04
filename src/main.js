// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './style.css' // Certifique-se de que o Tailwind ou seus estilos estejam importados

createApp(App)
  .use(router)
  .mount('#app')
