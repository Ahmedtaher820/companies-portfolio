<template>
  <div class="cards pt-4">
    <card-comp v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import CardComp from "./Card-Comp.vue";
export default {

  components: { CardComp },
  computed:{
    posts(){
      return this.$store.state.allPosts
    }
  }
};
</script>

<style lang="scss">
.cards {
  display: flex;
  gap: 4%;

  .card {
    width: 48%;

    @media (max-width: 768px) {
      width: 98%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
