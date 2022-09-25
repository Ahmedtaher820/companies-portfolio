<template>
  <div class="owner-cover" title="Owner" @click="$emit('modalOwner')">
    <img :src="ownerCover" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    ownerCover() {
      return this.$store.state.selectedPost.owner.image["64px"];
    },
  },
};
</script>

<style lang="scss">
.owner-cover {
  padding: 8px;
  background-color: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
