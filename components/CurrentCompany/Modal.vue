<template>
  <div>
    <div class="full-scr" @click="$emit('closeModal')"></div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-4">
          <div class="left p-3 border-end text-center">
            <img :src="owner.image['64px']" alt="Owner Profile" />
            <h5 class="fa-5 my-2">Name: {{ owner.name }}</h5>
            <h6 class="fs-6">Gender: {{ owner.gender }}</h6>
          </div>
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          <div class="right">
            <div class="row">
              <div class="col-md-6">
                <label for="">Email</label>
                <p>{{ owner.email }}</p>
              </div>
              <div class="col-md-6">
                <label for="">Mobile</label>
                <p>{{ owner.mobile }}</p>
              </div>
              <div class="col-md-6">
                <label for="">BirthDate</label>
                <p>{{ owner.birthdate }}</p>
              </div>
              <div class="col-md-6">
                <label for="">Location</label>
                <p>
                  {{ owner.address_id.state }}, {{ owner.address_id.street }},
                  {{ owner.address_id.building }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  components: { Fragment },
  computed: {
    owner() {
      return this.$store.state.selectedPost.owner;
    },
  },
};
</script>

<style lang="scss">
div {
  .full-scr {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.231);
    z-index: 99;
  }
  .modal-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333;
    color: #f1f1f1;
    z-index: 100;
    padding: 50px 30px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    .left {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
}
.bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
