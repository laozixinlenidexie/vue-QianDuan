import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Search from '@/page/Search'
//配置路由
const routes = [
    //配置路由
  {
    path:"/home",
    name:"首页",
    component:Home,
    meta:{show:true}
  },
  {
    path:"/login",
    name:"登陆",
    component:Login,
    meta:{show:false}
  },
  {
    path:"/register",
    name:"注册",
    component:Register,
    meta:{show:false}
  },
  {
    path:"/search",
    name:"搜索页",
    component:Search,
    meta:{show:true}
  },
    // 重定向，在项目跑起来后直接跳转至首页
  {
    path:'/',
    redirect:'/home'
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
