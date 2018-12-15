import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Problem from '@/views/Problem/Problem'
import News from '@/views/News'
import Descr from '@/views/Problem/Descr'
import Sub from '@/views/Problem/Sub'
import Stat from '@/views/Problem/Stat'
import Discuss from '@/views/Discuss/Discuss'
import DisDescr from '@/views/Discuss/DisDescr'
import Info from '@/views/Info'
import Status from '@/views/Status'
import Ranklist from '@/views/Ranklist'
import Contest from '@/views/Contest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/newsdetail/:nid',
      name: 'Newsdetail',
      component: News,
      props: true
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
    },
    {
      path: '/user/:id',
      name: 'Info',
      component: Info
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/ranklist',
      name: 'Ranklist',
      component: Ranklist
    },
    {
      path: '/contest',
      name: 'Contest',
      component: Contest
    }
  ]
})
