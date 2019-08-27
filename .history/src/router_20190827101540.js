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
      name: '企业空间',
      component:Enterprise,
      meta:{title:'企业空间'}
    },
    {
      path: '/Opinion2',
      name: '企业意见反馈',
      component:Opinion2,
      meta:{title:'企业意见反馈'}
    },
    {
      path: '/Record',
      name: '我的档案',
      component:Record,
      meta:{title:'我的档案'}
    },
    {
      path: '/Car',
      name: '车辆登记信息',
      component:Car,
      meta:{title:'车辆登记信息'}
    },
    {
      path: '/House',
      name: '房屋登记信息',
      component:House,
      meta:{title:'房屋登记信息'}
    },
    {
      path: '/License',
      name: '我的证照',
      component:License,
      meta:{title:'我的证照'}
    },
    {
      path: '/Footprint',
      name: '我的足迹',
      component:Footprint,
      meta:{title:'我的足迹'}
    },
    {
      path: '/Record2',
      name: '企业档案',
      component:Record2,
      meta:{title:'企业档案'}
    },
    {
      path: '/Footprint2',
      name: '企业足迹',
      component:Footprint2,
      meta:{title:'企业足迹'}
    },
    {
      path: '/License2',
      name: '企业证照',
      component:License2,
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
