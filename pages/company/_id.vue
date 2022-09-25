<template>
  <div>
    <Header :str="str" :btnText="btnText" />
    <Social />
    <About />
    <ContactUs />
    <Owner @modalOwner="showModal = true" />
    <transition name="home">
      <Modal v-if="showModal" @closeModal="closeModal" />
    </transition>
  </div>
</template>
<script>
import Header from "../../components/CurrentCompany/Header.vue";
import Social from "../../components/Social.vue";
import About from "../../components/About.vue";
import ContactUs from "../../components/ContactUs.vue";
import Owner from "../../components/Owner.vue";
import Modal from "../../components/CurrentCompany/Modal.vue";

export default {
  layout: "NavLayout",
  transition: "home",
  data() {
    return {
      str:
        "Welcome To Our " +
        this.$store.state.selectedPost.name.value +
        " - Our Portfolio ",
      btnText: "EXPLORERE",
      showModal: false,
    };
  },
  // to make validate in params
  validate({ params }) {
    return !isNaN(params.id);
  },
  fetch({ $axios, store, params }) {
    if (store.state.selectedPost && store.state.selectedPost.id === params.id) {
      return;
    }
    return $axios.$get(`/posts/${params.id}`).then((res) => {
      store.commit("selectedPost", res);
    });
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  components: { Header, Social, About, ContactUs, Owner, Modal },
};
</script>
<style>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>

