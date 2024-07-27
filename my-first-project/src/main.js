import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
//import LocalComponent from './components/LocalComponent.vue'

const app= createApp(App)
app.component('food-item', FoodItem)
//app.component('local-comp' ,LocalComponent)

app.mount('#app')
