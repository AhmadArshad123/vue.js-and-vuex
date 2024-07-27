<!-- <p v-bind="$attrs">{{ foodDesc }}</p> thats how we catch the specific fall through attrs--> 
<template>
    
    <div v-on:click="countClicks" style="display: block;">
      <h2>{{ foodName }}</h2>
      <img src="/img_quality.svg" v-show="isFavorite">
      <p>{{ foodDesc }}</p>
      <button v-on:click="toggleFavorite">Favorite</button>
      <p id="red"> You have clicked me {{click}} times</p>
      
    </div>
  </template>
  
  <script>
  export default {
    props:[
        'foodName',
        'foodDesc',
        'isFavorite'
    ],
    emits: ['toggle-favorite'], // emits are documented for convenience 
    data() {
      return {
        click:0,
        //isFoodFavorite:this.isFavorite
      }
    },
    inheritAttrs: false,
    methods:{
        toggleFavorite(){
            //this.isFoodFavorite = !this.isFoodFavorite;
            this.$emit('toogle-favorite', this.foodName);
        },
        countClicks(){
            this.click++;
        }
    }
  };
  </script>

<style scoped>
  p{
    font-weight: bolder;
  }
  #red {
    font-weight: bold;
    color:orangered
  }
  img {
    height: 3.5em;
    float: left;
  }
</style>


<!-- if i want to make some specific tags to not be scoped limits to this component  then 
i will make anoother style tag -->
<!-- <style>
  p{
    font-weight: bolder;
  }

</style> -->