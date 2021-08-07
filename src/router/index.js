import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component:() => import('../views/home/index.vue'),
    redirect:'home' ,
    children:[
      {
        path:'home',
        name:"home",
        component: () => import('../views/home/pages/home.vue'),
      },
      {
        path:'brand',
        name:"brand",
        component: () => import('../views/home/pages/brand/brand.vue'),
      },
      // 产品地图
      {
        path:'productMap',
        name:"productMap",
        component: () => import('../views/home/pages/brand/productMap.vue'),
      },
      // 品牌馆详情
      {
        path:'brandDetail',
        name:"brandDetail",
        component: () => import('../views/home/pages/brand/brandDetail.vue'),
      },
      {
        path:'goods',
        name:"goods",
        component: () => import('../views/home/pages/goods/goods.vue'),
      },
      {
        path:'goodDetail',
        name:"goodDetail",
        component: () => import('../views/home/pages/goods/goodDetail.vue'),
      },
      {
        path:'demand',
        name:"demand",
        component: () => import('../views/home/pages/demand/demand.vue'),
      },
      {
        path:'demandDetail',
        name:"demandDetail",
        component: () => import('../views/home/pages/demand/demandDetail.vue'),
      },
      {
        path:'sendDemand',
        name:"sendDemand",
        component: () => import('../views/home/pages/sendDemand.vue'),
      },
    ],
  },
  {
    path:'/detail',
    name:"detail",
    component: () => import('../views/home/demandDetail.vue'),
  },
  {
    path:'/companyDetail',
    name:"companyDetail",
    component: () => import('../views/home/companyDetail.vue'),
  },
  {
    path:'/parkDetail',
    name:"parkDetail",
    component: () => import('../views/home/parkDetail.vue'),
  },
  
  {
    path:'/center',
    name:"center",
    component: () => import('../views/home/pages/center/center.vue'),
    children:[
      {
        path:'/person',
        name:"person",
        component: () => import('../views/home/pages/center/pages/person.vue'),
        children:[
          {
            path:'/personInfo',
            name:"personInfo",
            component: () => import('../views/home/pages/center/pages/person/personInfo.vue'),
          },
          {
            path:'/collect',
            name:"collect",
            component: () => import('../views/home/pages/center/pages/person/collect.vue'),
          },
          {
            path:'/demandManage',
            name:"demandManage",
            component: () => import('../views/home/pages/center/pages/person/demandManage.vue'),
          },
        ],
      },
      {
        path:'/company',
        name:"company",
        component: () => import('../views/home/pages/center/pages/company.vue'),
        children:[
          {
            path:'/companyInfo',
            name:"companyInfo",
            component: () => import('../views/home/pages/center/pages/company/companyInfo.vue'),
          },
          {
            path:'/productManage',
            name:"productManage",
            component: () => import('../views/home/pages/center/pages/company/productManage.vue'),
          },
          {
            path:'/companyInfoManage',
            name:"companyInfoManage",
            component: () => import('../views/home/pages/center/pages/company/companyInfoManage.vue'),
          },
          {
            path:'/commentManage',
            name:"commentManage",
            component: () => import('../views/home/pages/center/pages/company/commentManage.vue'),
          },
          {
            path:'/companyCollect',
            name:"collect",
            component: () => import('../views/home/pages/center/pages/company/companyCollect.vue'),
          },
          {
            path:'/companyDemandManage',
            name:"demandManage",
            component: () => import('../views/home/pages/center/pages/company/companyDemandManage.vue'),
          },
        ],
      },
      {
        path:'/completeInfo',
        name:"completeInfo",
        component: () => import('../views/home/pages/center/pages/completeInfo.vue'),
      }
    ],
  },
  {
    path:'/login',
    name:"login",
    component: () => import('../views/login/index.vue'),
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
