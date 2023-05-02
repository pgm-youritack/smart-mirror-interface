import { createRouter, createWebHistory } from 'vue-router'
import WeatherVue from '@/views/WeatherView.vue'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/ToDoView.vue'
import newsView from '../views/NewsView.vue'
import SpotifyMusicView from '../views/Music/SpotifyMusicView.vue'
import LocalMusicView from '../views/Music/LocalMusicView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
      path: '/News',
      name: 'News',
      component: newsView
    },
    {
      path: '/Music',
      name: 'Music',
      redirect: 'Music/Local',
      children: [
        {
          name: 'Spotify',
          path: 'Spotify',
          component: SpotifyMusicView
        },
        {
          name: 'Local',
          path: 'Local',
          component: LocalMusicView
        }
      ]
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
  ]
})

export default router
