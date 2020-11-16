import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home= () => import ('@/view/home/home')
const Category= () => import ('@/view/category/category')
const Profile= () => import ('@/view/profile/profile')
const Cart= () => import ('@/view/cart/cart')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
