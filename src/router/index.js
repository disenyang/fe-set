import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['@views/layout'], resolve)
// const Overview = resolve => require(['@views/layout/overview'], resolve)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'home'
    }
  },

  {
    path: '/',
    component: Layout,
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@views/home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: 'threadIndex',
      name: 'threadIndex',
      redirect: {
        name: 'spec-list'
      },
      component: Layout,
      meta: {
        title: '组件'
      },
      children: [{
        path: 'highlight',
        name: 'highlight',
        component: () => import('@documents/highlight.md'),
        meta: {
          title: 'Highlight 高亮'
        }
      }]
    }
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: 'error',
    children: [{
      path: '401',
      name: 'page401',
      component: () => import('@views/error/401'),
      meta: {
        title: 'page401'
      }
    },
    {
      path: '404',
      name: 'page404',
      component: () => import('@views/error/404'),
      meta: {
        title: 'page404'
      }
    }
    ]
  },

  {
    path: '*',
    redirect: {
      name: 'page404'
    }
  }
  ]
})
