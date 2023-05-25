import { createRouter, createWebHistory } from 'vue-router'
import WeatherVue from '@/views/WeatherView.vue'
import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/ToDoView.vue'
import newsView from '@/views/NewsView.vue'
import localmusicView from '@/views/MusicView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SetupView from '@/views/SetupView.vue'
import newsArticleVIew from '@/views/newsArticleView.vue'
import loginView from '@/views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Todo',
      name: 'home',
      component: TodoView
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: WeatherVue
    },
    {
      path: '/music',
      name: 'music',
      component: localmusicView
    },
    {
      path: '/News',
      name: 'News',
      component: newsView
    },

    {
      path: '/Setup',
      name: 'setup',
      component: SetupView
    },
    {
      path: '/News/:name',
      name: 'Article',
      component: newsArticleVIew
    },
    {
      path: '/Login',
      name: 'login',
      component: loginView
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '404'
    }
  ],
  linkActiveClass: 'selected'
})

export default router
