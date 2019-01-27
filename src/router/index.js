import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import News from '@/views/News'

import Problem from '@/views/Problem/Problem'
import Descr from '@/views/Problem/Descr'
import Sub from '@/views/Problem/Sub'
import Stat from '@/views/Problem/Stat'

import Discuss from '@/views/Discuss/Discuss'
import DisDescr from '@/views/Discuss/DisDescr'

import Info from '@/views/Info'
import Status from '@/views/Status'
import Ranklist from '@/views/Ranklist'

import Contest from '@/views/contest/Contest'
import ContestDetail from '@/views/contest/ContestDetail'

import DetailOverview from '@/views/contest/DetailOverview'
import DetailProblem from '@/views/contest/DetailProblem'
import DetailSubmit from '@/views/contest/DetailSubmit'
import DetailStatus from '@/views/contest/DetailStatus'
import DetailRanklist from '@/views/contest/DetailRanklist'

import Manage from '@/views/admin/Manage'
import UserEdit from '@/views/admin/UserEdit'
import GroupEdit from '@/views/admin/GroupEdit'
import AdminEdit from '@/views/admin/AdminEdit'
import TagEdit from '@/views/admin/TagEdit'
import NewsCreate from '@/views/admin/NewsCreate'
import ProblemCreate from '@/views/admin/ProblemCreate'
import ContestCreate from '@/views/admin/ContestCreate'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
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
      path: '/news/:nid',
      name: 'News',
      component: News,
      props: true
    },
    {
      path: '/problem/:pid/descr',
      name: 'Descr',
      component: Descr
    },
    {
      path: '/problem/:pid/sub',
      name: 'Sub',
      component: Sub
    },
    {
      path: '/problem/:pid/stat',
      name: 'Stat',
      component: Stat
    },
    {
      path: '/discuss',
      name: 'Discuss',
      component: Discuss
    },
    {
      path: '/discuss/:did',
      name: 'DisDescr',
      component: DisDescr
    },
    {
      path: '/user/:uid',
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
    },
    {
      path: '/contest/:cid',
      // name: 'ContestDetail',
      component: ContestDetail,
      requireAuth: true,
      children: [
        {
          path: '',
          name: 'DetailOverview',
          component: DetailOverview
        },
        {
          path: 'problem/:id',
          name: 'DetailProblem',
          component: DetailProblem
        },
        {
          path: 'problem/:id/submit',
          name: 'DetailSubmit',
          component: DetailSubmit
        },
        {
          path: 'status',
          name: 'DetailStatus',
          component: DetailStatus
        },
        {
          path: 'ranklist',
          name: 'DetailRanklist',
          component: DetailRanklist
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Manage,
      children: [
        {
          path: 'useredit',
          name: 'UserEdit',
          component: UserEdit
        },
        {
          path: 'groupedit',
          name: 'GroupEdit',
          component: GroupEdit
        },
        {
          path: 'adminedit',
          name: 'AdminEdit',
          component: AdminEdit
        },
        {
          path: 'tagedit',
          name: 'TagEdit',
          component: TagEdit
        }
      ]
    },
    {
      path: '/createnews',
      name: 'NewsCreate',
      component: NewsCreate
    },
    {
      path: '/createpro',
      name: 'ProblemCreate',
      component: ProblemCreate
    },
    {
      path: '/createcon',
      name: 'ContestCreate',
      component: ContestCreate
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     if (localStorage.getItem('userName')) {
//       next()
//     }
//   }
// })

export default router
