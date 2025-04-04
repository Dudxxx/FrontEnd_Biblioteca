// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import BooksPage from './components/BooksPage.vue'
import UsersPage from './components/UsersPage.vue'

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/books', name: 'BooksPage', component: BooksPage },
    { path: '/users', name: 'UsersPage', component: UsersPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
