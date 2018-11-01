<template>
  <div>
    <Header/>
    <router-view/>
    <Bottom/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Bottom from "../components/Bottom";
export default {
  components: {
    Header,
    Bottom
  }
  // computed: {
  //   binding() {
  //     const binding = {};
  //     if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;
  //     return binding;
  //   }
  // }
};
</script>

<style>
</style>
