import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Problem from '@/components/Problem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    }
  ]
})
