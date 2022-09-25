<template>
  <div class="card py-3 py-3 px-2">
    <div class="card-header">
      <div class="header-content d-flex gap-2 align-items-center pb-3">
        <img :src="post.logo['64px']" class="rounded-circle logo" alt="" />
        <div class="header-text">
          <h6 class="fs-6 mb-0">{{ post.name.key }}</h6>
          <span class="text-secondary">{{ post.name.value }}</span>
        </div>
      </div>
    </div>
    <div class="card-body py-3 border-top">
      <CarouselComp class="pb-3">
        <img
          v-for="(imgSrc, i) in post.cover_photos[0]"
          :key="i"
          :src="imgSrc"
          alt=""
        />
      </CarouselComp>
      <div
        class="
          border-top
          pt-3
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h6 class="mb-0">
          Owner: <span class="text-secondary">{{ post.owner.name }}</span>
        </h6>
        <div class="d-flex align-items-center gap-3">
          <h6 class="mb-0">Social:</h6>
          <a :href="'mailto:' + post.owner.email" class="text-dark"
            ><i class="bi bi-envelope fs-4"></i>
          </a>
          <a :href="'tel:' + post.owner.mobile" class="text-dark"
            ><i class="bi bi-telephone fs-4"></i>
          </a>
        </div>
      </div>
      <div class="d-flex gap-1 stars align-items-center">
        <h6 class="mb-0">Total Rate ({{ post.review }}):</h6>
        <div>
          <i
            class="bi bi-star-fill"
            v-for="star in parseInt(post.review)"
            :key="star"
          ></i>
        </div>

        <i
          class="bi bi-star"
          v-for="(star, ind) in Math.ceil(5 - post.review)"
          :key="ind"
        ></i>
      </div>
      <div class="card-link pt-3">
        <nuxt-link
          class="text-decoration-none"
          :to="{ path: '/company/' + post.id, params: { Id: post.id } }"
          >
          <span class="main-btn" @click="checkPosts(post)"> Show More </span>
          </nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  mounted() {
    console.log(this.post);
  },
  methods: {
    checkPosts(post) {
      this.$store.commit("selectedPost",post)
    },
  },
};
</script>
<style lang="scss">
.card {
  width: 50%;
  .card-header {
    background-color: #fff;
    .logo {
      width: 64px;
      height: 64px;
    }
  }
  .card-body {
    h5 {
      span {
        font-size: 18px;
        font-weight: normal;
      }
    }
    .stars {
      font-size: 16px;
      i {
        color: rgb(234, 230, 12);
      }
    }
    .card-link {
      .main-btn {
        padding: 8px 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
