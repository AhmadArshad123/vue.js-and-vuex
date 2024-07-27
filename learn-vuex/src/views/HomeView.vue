<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <counter></counter>
    <!-- <div 
    :style="{color: $store.state.colorCode}"
    class="counter"
    >
      {{ $store.state.counter }}
    </div> -->

    <div class="counter-square">
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.squaredCounter }}
    </div>
    <div class="button">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>


    <!-- v-model="$store.state.colorCode"  {not a good practice to bind the input field directly to the input}-->
    <div>
      <input
      v-model="colorCode"
      placeholder="Enter color code"
      type="text"
      >
    </div>
   
  </div>
</template>

<script>
import Counter from '/Users/Ahmad/learn-vuex/src/components/Counter.vue'
export default {


  name: 'HomeView',

  computed: {
    colorCode: {
      get(){
        console.log(null);
        return this.$store.state.colorCode;
      },
     set(newValue){
      this.$store.commit('setColorCode',newValue)
     }
    }
  },
  components : {
    'counter': Counter
  }
  // data(){
  //   return{
  //     counter:0   {Moved to state in store}
  //   }
  // },
  // methods: {
  //   increaseCounter() {
  //     this.counter++;
  //   },
  //    decreaseCounter() {     // {Moved to mutations in store}
  //     this.counter--;
  //   }
  // }

}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}
.button button{
  font-size: 20px;
  width: 100px;
  margin: 0 10px;
}

</style>
