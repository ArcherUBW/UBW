import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  // linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'Home',
			component: Home
    },
		{
		  path: '/singer',
		  name: 'singer',
		  component: () => import( './views/Singer.vue')
		},
		{
		  path: '/ranklist',
		  name: 'ranklist',
		  component: () => import( './views/RankList.vue')
		},
		{
		  path: '/playback',
		  name: 'playback',
		  component: () => import( './views/Playback.vue')
		},
		
  ]
})
