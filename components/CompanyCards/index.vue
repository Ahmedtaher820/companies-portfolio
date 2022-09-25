<template>
  <div class="company-card">
    <div class="container">
      <div class="conetnt d-flex justify-content-center flex-column">
        <h2 class="main-header">Our Companies</h2>
        <Cards/>
        <PrevNext />
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import PrevNext from "./PrevNext.vue";
export default {
  components: { Cards, PrevNext },
};
</script>

<style lang="scss">
.company-card {
  height: 100vh;
  padding: 100px 0px;
  .conetnt {

  }
}
</style>
