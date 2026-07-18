import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'
import Post from './components/Post.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/Projects', component: Projects },
    { path: '/About', component: About },
    { path: '/Resume', component: Resume },
    { path: '/post/:id', component: Post },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
})

export default router
