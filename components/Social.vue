<template>
  <div class="social py-3 py-md-5">
    <div class="container">
      <h2 class="main-header text-center">Social</h2>
      <ul
        class="
          list-unstyled
          d-flex
          justify-content-around
          align-items-center
          pt-4
        "
      >
        <li>
          <a :href="social.socialLink.facebook">
            <i class="bi bi-facebook fs-2"></i>
          </a>
        </li>
        <li>
          <a :href="'mailto:' + social.email.gmail"
            ><i class="bi bi-envelope fs-2"></i>
          </a>
        </li>
        <li>
          <a :href="'tel:' + social.hotlines[0]">
            <i class="bi bi-telephone fs-2"></i>
          </a>
        </li>
        <li>
          <a :href="social.socialLink.linkedin">
            <i class="bi bi-linkedin fs-2"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: {
        socialLink: this.$store.state.selectedPost.social_links,
        email: this.$store.state.selectedPost.emails,
        hotlines: this.$store.state.selectedPost.hotlines,
        socialLink: this.$store.state.selectedPost.social_links,
      },
    };
  },
  created() {
    console.log(this.social);
  },
};
</script>

<style lang="scss">
.social {
  ul {
    li {
      display: inline-block;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-10px);
      }
      a {
        color: #333;
      }
    }
  }
}
</style>
