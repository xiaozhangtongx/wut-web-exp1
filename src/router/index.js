/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:22:31
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFound from '../views/error/404.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/',
    redirect: '/user/login',
  },
  // 登录,注册页面
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/User.vue'),
    children: [
      // 注册界面
      {
        path: '/user/register',
        name: 'Register',
        component: () => import('../views/user/Register.vue'),
      },
      // 登录界面
      {
        path: '/user/login',
        name: 'Login',
        component: () => import('../views/user/login/Login.vue'),
        children: [
          // pc端登录
          {
            path: '/user/login/pc',
            name: 'PCLogin',
            component: () => import('../views/user/login/pc/Pc.vue'),
          },
          // 移动端登录
          {
            path: '/user/login/mobile',
            name: 'MobileLogin',
            component: () => import('../views/user/login/mobile/Mobile.vue'),
          },
        ],
      },
      // 修改密码
      {
        path: '/user/resetpwd',
        name: 'ResetPwd',
        component: () => import('../views/user/ResetPassword.vue'),
      },
    ],
  },
  // 系统主界面
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/home',
    component: () => import('../views/main/Home.vue'),
    children: [
      {
        path: '/main/home',
        name: 'Main',
        component: () => import('../views/main/Home.vue'),
      },
    ],
  },
  // 404页面
  {
    path: '*',
    hideInMenu: true,
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start()
  }
  NProgress.done()
  next()
})

export default router
