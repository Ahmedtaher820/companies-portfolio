<template>
  <div class="d-flex justify-content-between align-items-center py-5">
    <button class="main-btn" :disable="prev === null" @click="prevPage">Prev</button>
    <button class="main-btn" :disable="next === null">Next</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      prev:null,
      next:50,
    }
  },
  methods:{
    prevPage(){
      console.log("done")
    }
  }
};
</script>

<style>

</style>
