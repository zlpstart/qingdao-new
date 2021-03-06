import Vue from 'vue'
import Router from 'vue-router'
import MySpace from './components/MySpace'
import Home from './components/Home'
import Enterprise from './components/Enterprise'
import Opinion from './components/Opinion'
import Opinion2 from './components/Opinion2'
import Record from './components/Record'
import Car from './components/Car'
import House from './components/House'
import License from './components/License'
import License2 from './components/License2'
import Footprint from './components/Footprint'
import Record2 from './components/Record2'
import Footprint2 from './components/Footprint2'
import NotFound from './components/NotFound'
import ceshi from './components/ceshi.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MySpace',
      component:MySpace,
      meta:{title:'青岛政务通'}
    },
    {
      path: '/Home',
      name: 'Home',
      component:Home,
      meta:{title:'导航栏'}
    },
    {
      path: '/Opinion',
      name: 'Opinion',
      component:Opinion,
      meta:{title:'意见反馈'}
    },
    {
      path: '/Enterprise',
      name: 'Enterprise',
      component:Enterprise,
      meta:{title:'企业空间'}
    },
    {
      path: '/Opinion2',
      name: 'Opinion2',
      component:Opinion2,
      meta:{title:'企业意见反馈'}
    },
    {
      path: '/Record',
      name: 'Record',
      component:Record,
      meta:{title:'我的档案'}
    },
    {
      path: '/Car',
      name: 'Car',
      component:Car,
      meta:{title:'车辆登记信息'}
    },
    {
      path: '/House',
      name: 'House',
      component:House,
      meta:{title:'房屋登记信息'}
    },
    {
      path: '/License',
      name: 'License',
      component:License,
      meta:{title:'我的证照'}
    },
    {
      path: '/Footprint',
      name: 'Footprint',
      component:Footprint,
      meta:{title:'我的足迹'}
    },
    {
      path: '/Record2',
      name: 'Record2',
      component:Record2,
      meta:{title:'企业档案'}
    },
    {
      path: '/Footprint2',
      name: 'Footprint2',
      component:Footprint2,
      meta:{title:'企业足迹'}
    },
    {
      path: '/License2',
      name: 'License2',
      component:License2,
      meta:{title:'企业证照'}
    },
    {
      path: '/License2',
      name: 'License2',
      component:License2,
      meta:{title:'企业证照'}
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component:ceshi,
      meta:{title:'企业证照'}
    },
    
    { /* 404必须是最后一个路由 */
      name: '404',
      path: '*',
      meta: {
          title: '找不到页面'
      },
      component: NotFound
  }
  ]
})
