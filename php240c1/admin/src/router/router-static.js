import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import jiedanxinxi from '@/views/modules/jiedanxinxi/list'
    import kehuxuqiu from '@/views/modules/kehuxuqiu/list'
    import youqinglianjie from '@/views/modules/youqinglianjie/list'
    import storeup from '@/views/modules/storeup/list'
    import yuangongfengcai from '@/views/modules/yuangongfengcai/list'
    import kehu from '@/views/modules/kehu/list'
    import discussjiazhengfuwu from '@/views/modules/discussjiazhengfuwu/list'
    import jiazhengfuwu from '@/views/modules/jiazhengfuwu/list'
    import messages from '@/views/modules/messages/list'
    import fuwuyuyue from '@/views/modules/fuwuyuyue/list'
    import shenghuozhishi from '@/views/modules/shenghuozhishi/list'
    import gongsijieshao from '@/views/modules/gongsijieshao/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '新闻信息',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/jiedanxinxi',
        name: '接单信息',
        component: jiedanxinxi
      }
      ,{
	path: '/kehuxuqiu',
        name: '客户需求',
        component: kehuxuqiu
      }
      ,{
	path: '/youqinglianjie',
        name: '友情链接',
        component: youqinglianjie
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yuangongfengcai',
        name: '员工风采',
        component: yuangongfengcai
      }
      ,{
	path: '/kehu',
        name: '客户',
        component: kehu
      }
      ,{
	path: '/discussjiazhengfuwu',
        name: '家政服务评论',
        component: discussjiazhengfuwu
      }
      ,{
	path: '/jiazhengfuwu',
        name: '家政服务',
        component: jiazhengfuwu
      }
      ,{
	path: '/messages',
        name: '用户留言',
        component: messages
      }
      ,{
	path: '/fuwuyuyue',
        name: '服务预约',
        component: fuwuyuyue
      }
      ,{
	path: '/shenghuozhishi',
        name: '生活知识',
        component: shenghuozhishi
      }
      ,{
	path: '/gongsijieshao',
        name: '公司介绍',
        component: gongsijieshao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
