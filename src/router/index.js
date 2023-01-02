import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../views/Login')
const Register = () => import('../views/Register')
const Home = () => import('../views/Home')
const Rank = () => import('../views/Rank')
const SongSheet = () => import('../views/SongSheet')

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/rank',
        component: Rank,
    },
    {
        path: '/song_sheet',
        component: SongSheet,
    },
]
const router = new VueRouter({
    routes: routes,
})
export default router
