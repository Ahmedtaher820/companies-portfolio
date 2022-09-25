<template>
  <div>
    <Header />
    <CompanyCards id="compnay-comp" />
  </div>
</template>

<script>
import Header from "../components/CurrentCompany/Header.vue";
import CompanyCards from "../components/CompanyCards/index.vue";
export default {
  name: "IndexPage",
  components: { Header, CompanyCards },
  data() {
    return {
    };
  },
  fetch({ $axios , store }) {

    return $axios
      .$get("/posts")
      .then((res) => {
        store.commit("setAllPost" , res)
      })

  },
};
</script>

