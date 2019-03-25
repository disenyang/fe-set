import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['@views/layout'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'home'
      },
      component: Layout,
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@views/home'),
        meta: {
          title: '首页'
        }
      }
      ]
    },
    {
      path: '/components',
      name: 'components',
      redirect: {
        name: 'documents'
      },
      component: Layout,
      meta: {
        title: '组件'
      },
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: () => import('@views/upload/'),
          meta: {
            title: '上传'
          }
        },
        {
          path: 'documents',
          name: 'documents',
          component: () => import('@documents'),
          redirect: {
            name: 'installation'
          },
          meta: {
            title: '文档'
          },
          children: [
            {
              path: 'installation',
              name: 'installation',
              component: () => import('@documents/installation.md'),
              meta: {
                title: '安装'
              }
            },
            {
              path: 'quickstart',
              name: 'quickstart',
              component: () => import('@documents/quickstart.md'),
              meta: {
                title: '快速上手'
              }
            },
            {
              path: 'button',
              name: 'button',
              component: () => import('@documents/button.md'),
              meta: {
                title: '按钮'
              }
            },
            {
              path: 'icon',
              name: 'icon',
              component: () => import('@documents/icon.md'),
              meta: {
                title: '图标'
              }
            },
            {
              path: 'checkbox',
              name: 'checkbox',
              component: () => import('@documents/checkbox.md'),
              meta: {
                title: '复选框'
              }
            },
            {
              path: 'container',
              name: 'container',
              component: () => import('@documents/container.md'),
              meta: {
                title: '容器'
              }
            },
            {
              path: 'row',
              name: 'row',
              component: () => import('@documents/row.md'),
              meta: {
                title: '栅格'
              }
            },
            {
              path: 'highlight',
              name: 'highlight',
              component: () => import('@documents/highlight.md'),
              meta: {
                title: 'Highlight 高亮'
              }
            }
          ]
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
