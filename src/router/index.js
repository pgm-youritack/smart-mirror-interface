import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.View.vue'
import TodoView from '@/views/ToDo.View.vue'
import newsView from '@/views/News.View.vue'
import NotFoundView from '@/views/NotFound.View.vue'
import SetupView from '@/views/Setup.View.vue'
import newsArticleVIew from '@/views/NewsArticle.View.vue'
import loginView from '@/views/Login.View.vue'
import RegisterView from '@/views/Register.View.vue'
import SuccessView from '@/views/Success.View.vue'
import musiclistView from '@/views/MusicList.View.vue'
import WeatherView from '@/views/Weather.View.vue'
import DesktopLayout from '@/views/DesktopLayout.View.vue'
const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DesktopLayout,
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          alias: '/Home',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/Todo',
          name: 'Todo',
          component: TodoView
        },
        {
          path: '/Weather',
          name: 'Weather',
          component: WeatherView
        },
        {
          path: '/music',
          name: 'MusicLIst',
          component: musiclistView
        },
        {
          path: '/News',
          name: 'News',
          component: newsView
        },
        {
          path: '/News/:name',
          name: 'Article',
          component: newsArticleVIew
        }
      ]
    },

    {
      path: '/Setup',
      name: 'Setup',
      component: SetupView
    },

    {
      path: '/Login',
      name: 'Login',
      component: loginView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/success',
      name: 'succes',
      component: SuccessView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '404'
    }
  ],
  linkActiveClass: 'selected'
})

export default router
