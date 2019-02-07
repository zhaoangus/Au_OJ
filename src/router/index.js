import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
// import News from '@/views/News'

import Problem from '@/views/Problem/Problem'
// import Descr from '@/views/Problem/Descr'
// import Sub from '@/views/Problem/Sub'
// import Stat from '@/views/Problem/Stat'

import Discuss from '@/views/Discuss/Discuss'
// import DisDescr from '@/views/Discuss/DisDescr'

import Info from '@/views/Info'
import Status from '@/views/Status'
import Ranklist from '@/views/Ranklist'

import Contest from '@/views/contest/Contest'
// import ContestDetail from '@/views/contest/ContestDetail'

// import DetailOverview from '@/views/contest/DetailOverview'
// import DetailProblem from '@/views/contest/DetailProblem'
// import DetailSubmit from '@/views/contest/DetailSubmit'
// import DetailStatus from '@/views/contest/DetailStatus'
// import DetailRanklist from '@/views/contest/DetailRanklist'

// import Manage from '@/views/admin/Manage'
// import UserEdit from '@/views/admin/UserEdit'
// import GroupEdit from '@/views/admin/GroupEdit'
// import AdminEdit from '@/views/admin/AdminEdit'
// import TagEdit from '@/views/admin/TagEdit'
// import NewsCreate from '@/views/admin/NewsCreate'
// import ProblemCreate from '@/views/admin/ProblemCreate'
// import ContestCreate from '@/views/admin/ContestCreate'

// 路由懒加载
const News = r => require.ensure([], () => r(require('@/views/News')), 'news')

const Descr = r => require.ensure([], () => r(require('@/views/Problem/Descr')), 'problem')
const Sub = r => require.ensure([], () => r(require('@/views/Problem/Sub')), 'problem')
const Stat = r => require.ensure([], () => r(require('@/views/Problem/Stat')), 'problem')

const DisDescr = r => require.ensure([], () => r(require('@/views/Discuss/DisDescr')), 'discuss')

const ContestDetail = r => require.ensure([], () => r(require('@/views/contest/ContestDetail')), 'contest')

const DetailOverview = r => require.ensure([], () => r(require('@/views/contest/DetailOverview')), 'detail')
const DetailProblem = r => require.ensure([], () => r(require('@/views/contest/DetailProblem')), 'detail')
const DetailSubmit = r => require.ensure([], () => r(require('@/views/contest/DetailSubmit')), 'detail')
const DetailStatus = r => require.ensure([], () => r(require('@/views/contest/DetailStatus')), 'detail')
const DetailRanklist = r => require.ensure([], () => r(require('@/views/contest/DetailRanklist')), 'detail')

const Manage = r => require.ensure([], () => r(require('@/views/admin/Manage')), 'admin')
const UserEdit = r => require.ensure([], () => r(require('@/views/admin/UserEdit')), 'admin')
const GroupEdit = r => require.ensure([], () => r(require('@/views/admin/GroupEdit')), 'admin')
const AdminEdit = r => require.ensure([], () => r(require('@/views/admin/AdminEdit')), 'admin')
const TagEdit = r => require.ensure([], () => r(require('@/views/admin/TagEdit')), 'admin')
const NewsCreate = r => require.ensure([], () => r(require('@/views/admin/NewsCreate')), 'admin')
const ProblemCreate = r => require.ensure([], () => r(require('@/views/admin/ProblemCreate')), 'admin')
const ContestCreate = r => require.ensure([], () => r(require('@/views/admin/ContestCreate')), 'admin')

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
