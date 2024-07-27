import {createWebHashHistory, createRouter} from 'vue-router'

import FoodItem from './components/FoodItem.vue'

const routes=[
    {
        name:'FoodItem',
        path:'/',
        component: FoodItem
    }
]

const router= createRouter({
    history:createWebHashHistory,
    routes
})

export default router