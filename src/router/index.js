import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Problem from '@/components/Problem/Problem'
import News from '@/components/News'
import Descr from '@/components/Problem/Descr'
import Sub from '@/components/Problem/Sub'
import Stat from '@/components/Problem/Stat'
import Discuss from '@/components/Discuss/Discuss'
import DisDescr from '@/components/Discuss/DisDescr'

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
    },
    {
      path: '/news/:id',
      name: 'News',
      component: News
    },
    {
      path: '/problem/:id/descr',
      name: 'Descr',
      component: Descr
    },
    {
      path: '/problem/:id/sub',
      name: 'Sub',
      component: Sub
    },
    {
      path: '/problem/:id/stat',
      name: 'Stat',
      component: Stat
    },
    {
      path: '/discuss',
      name: 'Discuss',
      component: Discuss
    },
    {
      path: '/discuss/:id',
      name: 'DisDescr',
      component: DisDescr
    }
  ]
})
