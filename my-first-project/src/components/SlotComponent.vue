<template>
    <div> <!-- This div makes the card-like appearance -->
      <slot
      v-for="x in foods"
      :key="x"
      :foodName="x"
      ></slot>
        

      <!-- This is the way of teleporting something -->
       
      <!-- <Teleport to="body">
        <div id="teleported div"> Hello </div>

      </Teleport> -->
    </div>
    
  </template>

<script>
export default {
    data() {
      return {
        foods: ['Apple','Pizza','Rice','Fish','Cake']
      }
    }
  }
</script>