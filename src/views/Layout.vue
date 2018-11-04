<template>
  <div>
    <!-- <Header/> -->
    <router-view/>
    <Bottom/>
    <Drawer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Bottom from "../components/Bottom";
export default {
  components: {
    Header,
    Drawer,
    Bottom
  },
  data() {
    return {};
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
