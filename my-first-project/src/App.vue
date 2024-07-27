<template>
  <h1>Food</h1>
  <p>Components created with v-for based on an array.</p>
  <button @click="removeItem">Remove Item</button>
  <div id="wrapper">
    <!-- style="background-color: beige;"    adding this line inside the food -item tag
     will make it a fall-through attribute: applied to child template -->
    <food-item v-for="(x, index) in foods" 
    :key="index" 
    :food-name="x.name" 
    :food-desc="x.desc"
    :is-favorite="x.favorite" 
    @toogle-favorite="receiveEmit" 
    style="background-color: aqua;" />
    
    <local-comp />

    <!-- Slot component example -->
    <!-- <slot-comp v-for="(x, index) in foods" :key="index" >
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-comp> -->

    <slot-comp v-slot="food" >
      <h4>{{food.foodName}}</h4>
    </slot-comp>

  </div>
  <h1>VUE HTTP REQUESTS</h1>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <pre v-if="data">{{ data }}</pre>
  </div>
</template>

<script>
import LocalComponent from './components/LocalComponent.vue'
import SlotComponent from './components/SlotComponent.vue'
export default {
  components: {
    'local-comp': LocalComponent,
    'slot-comp': SlotComponent
  },
  data() {
    return {
      data:null,
      foods: [
        {
          name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true
        },
        {
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        {
          name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false
        },
        {
          name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true
        },
        {
          name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false
        }
      ]
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("file.txt");
      this.data = await response.text();
    },
    removeItem() {
      this.foods.splice(1, 1);
    },
    receiveEmit(foodId) {
      const foundFood = this.foods.find(
        food => food.name == foodId

      );
      foundFood.favorite = !foundFood.favorite
      // alert("Emit received "+ foodId);
    }

  }
}
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  margin: 10px;
  padding: 0 20px;
  background-color: lightgreen;
}
</style>