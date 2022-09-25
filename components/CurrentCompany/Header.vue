<template>
  <header class="position-relative text-center">
    <div class="container">
      <div
        class="
          content
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <div class="content-img">
          <img src="../../static/assets/logo.png" alt="" />
        </div>
        <div class="content-text">
          <h2 class="mb-4">
            {{ str }}
          </h2>
          <div class="line"></div>
          <a
            class="main-btn get-start text-decoration-none"
            href="#compnay-comp"
            type="button"
            >{{ btnText }}</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    str: {
      type: String,
      default: "R.PROTFOLIO - Creative Company Portfolio",
    },
    btnText: {
      type: String,
      default: "GET START",
    },
  },
};
</script>

<style lang="scss">
header {
  height: 100vh;
  background: url("../../static/assets/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    gap: 40px;
    h2 {
      font-size: 38px;
    }
    .line {
      width: 1px;
      height: 90px;
      background-color: #000;
      display: block;
      margin: 0px auto 20px;
    }
  }
}
</style>
