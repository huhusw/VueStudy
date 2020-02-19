import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Cate = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/cate',
      name:'cate',
      component:Cate
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    }
  ],
  mode:'history'
})
