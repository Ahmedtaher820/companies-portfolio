<template>
  <div class="about py-3 py-md-5" id="about">
    <div class="container">
      <h2 class="main-header mb-5">About Us</h2>
      <div class="row">
        <div class="col-md-6 position-relative">
          <div class="about-img">
            <img :src="imgBg" class="mx-auto d-block" alt="">
          </div>
        </div>
        <div class="col-md-6 text-center text-md-start mt-3 mt-md-0">
          <h4>We Are {{post.name.key}} Company</h4>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis repudiandae commodi natus cupiditate aliquam iure excepturi illo consectetur, vel dolores, maiores iusto, officia at eligendi quidem ea beatae eum.</p>
          <button class="main-btn">Show More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgBg: this.$store.state.selectedPost.cover_photos[0]["256px"],
    };
  },
  computed: {
    post() {
      return this.$store.state.selectedPost;
    },
  },
};
</script>

<style lang="scss">
.container {
    .about-img {
      img{
        height: 250px;
        width: 80%;

      }
    }

}
</style>
