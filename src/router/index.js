// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件


//创建并暴露一个路由器
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/coupons',
            component: () => import('@/views/coupons/index')
        },
        {
            path: '/franchise',
            component: () => import('@/views/franchise/index')
        },
        {
            path: '/pay',
            component: () => import('@/views/pay/index')
        },
        {
            path: '*',
            component: () => import('@/views/home/index')
        }
    ]
})
