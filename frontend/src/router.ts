import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import Post from './views/Post.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: Post },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
