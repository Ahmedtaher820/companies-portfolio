<template>
  <nav class="navbar navbar-expand-lg bg-light px-4">
    <div class="container-fluid">
      <a class="navbar-brand fs-3" href="/">{{
        this.$store.state.selectedPost.name.key
      }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#header"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Josefin+Sans:wght@200;300;400;500;600;700&family=La+Belle+Aurore&family=Lobster&family=Lora:ital,wght@1,400;1,500;1,600;1,700&family=Mochiy+Pop+One&family=Open+Sans:wght@300;400;500;600;700&family=Pacifico&family=Poppins:wght@100;200;300;400;500;600;700;800&family=Quicksand:wght@300;400;600;700&family=Raleway:ital,wght@0,500;0,700;1,400&family=Roboto:wght@100&family=Shadows+Into+Light&display=swap");
.navbar {
  .navbar-brand {
    font-family: "Dancing Script", cursive;
    letter-spacing: 1.8px;
  }
}
</style>
