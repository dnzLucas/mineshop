import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EndView from '../views/EndView.vue'
import NetherView from '../views/NetherView.vue'
import OverworldView from '../views/OverworldView.vue'
import MyCartView from '../views/MyCartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/end',
      name: 'end',
      component: EndView,
    },
    {
      path: '/nether',
      name: 'nether',
      component: NetherView,
    },
    {
      path: '/overworld',
      name: 'overworld',
      component: OverworldView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: MyCartView,
    }
  ],
})

export default router
