import { createRouter, createWebHistory, } from 'vue-router'
import type {RouteLocationNormalized} from 'vue-router'
import { useAuth } from '@/hooks'
const { getToken } = useAuth()
const routes = [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/LayoutView.vue'),
      redirect: {
        path: '/home'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home/HomeView.vue')
        },
        {
          path: '/system',
          name: 'system',
          component: () => import('@/layout/BlankView.vue'),
          children: [
            {
              path: 'menu',
              name: 'menu',
              component: () => import('@/views/System/MenuView.vue')
            },
            {
              path: 'user',
              name: 'user',
              component: () => import('@/views/System/UserView.vue')
            },
            {
              path: 'org',
              name: 'org',
              component: () => import('@/views/System/OrgView.vue')
            },
            {
              path: 'dict',
              name: 'dict',
              component: () => import('@/views/System/DictView.vue')
            },
            {
              path: 'role',
              name: 'role',
              component: () => import('@/views/System/RoleView.vue')
            },

            {
              path: 'resource',
              name: 'resource',
              component: () => import('@/views/System/ResourceView.vue')
            },{
              path:'setting',
              name:'setting',
              component: () => import('@/views/System/SettingView.vue')
            },
            {
              path:'login-log',
              name:'loginLog',
              component: () => import('@/views/System/LoginLog.vue')
            },
            {
              path:'opt-log',
              name:'optLog',
              component: () => import('@/views/System/OptLog.vue')
            },
            {
              path:'notice',
              name:'notice',
              component: () => import('@/views/System/NoticeView.vue')
            },{
              path:'notice-message',
              name:'noticeMessage',
              component:()=> import('@/views/System/NotifyMessage.vue')
            },{
              path:'system-info',
              name:'systemInfo',
              component:()=> import('@/views/System/SystemInfo.vue')
            }
          ]
        },
        //
        {
            path:'/data',
            name:'data',
            component: () => import('@/layout/BlankView.vue'),
            children:[
              {
                path:'dataset',
                name:'dataset',
                component:()=>import('@/views/Data/DataSet/index.vue')
              },
              {
                path:'datasource',
                name:'datasource',
                component:()=>import('@/views/Data/DataSource/index.vue')
              }
            ]          
        },
        //
        {
          path:'/lowcode',
          name:'lowcode',
          component:() => import('@/layout/BlankView.vue'),
          children:[
            {
              path:'form',
              name:'form',
              component:()=>import('@/views/LowCode/Form/FormList/FormList.vue')
            },
            {
              path:'table',
              name:'table',
              component:()=>import('@/views/LowCode/Table/TableList/TableList.vue')
            },
            {
              path:'dashboard',
              name:'dashboard',
              component:()=>import('@/views/LowCode/Dashboard/DashboardList/DashboardList.vue')
            }
          ]
        },
        {
          path: '/apply',
          name: 'apply',
          children: [

            {
              path: 'iframe',
              name: 'iframe',
              component: () => import('@/components/IframeView.vue'),
              props: (route:RouteLocationNormalized) => route.query
            }
          ]
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('@/views/ErrorTemplate/NotFound.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/LoginView.vue')
    },
    {
      path:'/preview-dashboard',
      name:'preview-dashboard',
      component:()=>import('@/views/LowCode/Dashboard/preview/DashboardPreview.vue'),
      props: (route:RouteLocationNormalized) => route.query
    },
    {
      path:'/design',
      name:'design',
      component: () =>import('@/layout/BlankView.vue'),
      children:[
        {
          path:'form',
          name:'form-design',
          component: () =>import('@/views/LowCode/Form/FormEditor/FormEditor.vue'),
          props: (route:RouteLocationNormalized) => route.query
        },
        {
          path:'table',
          name:'table-design',
          component: () =>import('@/views/LowCode/Table/TableDesign/TableDesign.vue'),
          props: (route:RouteLocationNormalized) => route.query
        },
        {
          path:'dataset',
          name:'dataset-design',
          component:()=>import('@/views/Data/DataSet/design/index.vue'),
          props: (route:RouteLocationNormalized) => route.query
        },
        {
          path:'dashboard',
          name:'dashboard-design',
          component:()=>import('@/views/LowCode/Dashboard/DashboardDesign/DashboardDesign.vue'),
          props: (route:RouteLocationNormalized) => route.query
        }
      ]
    }

  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
