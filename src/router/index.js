import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "views/home/home.vue"
import cart from "views/cart/cart.vue"
import profile from "views/profile/profile.vue"
import category from "views/category/category.vue"
import detail from "views/detail/detail.vue"
import login from "views/login/login"
import loginFrom from "../views/login/childCompoments/loginFrom";
import reqisterFrom from "../views/login/childCompoments/reqisterFrom";
Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect: "/home"
        },
        {
            path:"/home",
            name:"home",
            component:home
        },
        {
            path:"/category",
            name:"category",
            component:category
        },
        {
            path:"/profile",
            name:"profile",
            component:profile
        },
        {
            path:"/cart",
            name:"cart",
            component:cart
        },
        {
            path:"/detail/:iid",
            name:"detail",
            component:detail
        },
        {
            path:"/login",
            name:"login",
            component:login,
            redirect:"/login/loginFrom",
            children:[
                {
                   path:'loginFrom',
                   component:loginFrom
                },
                {
                    path:'reqisterFrom',
                    component:reqisterFrom
                }
            ]
        },

    ]
})
