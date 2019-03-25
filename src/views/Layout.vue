<template>
  <div>
    <Home v-show="showMenu == 0"></Home>
    <Stat v-show="showMenu == 1"></Stat>
    <Explore v-show="showMenu == 2"></Explore>
    <Bottom/>
    <Drawer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Bottom from "../components/Bottom";
import Home from "./Home";
import Stat from './Stat.vue'
import Explore from './Explore.vue'
export default {
  components: {
    Header,
    Drawer,
    Bottom,
    Home,
    Stat,
    Explore,
  },
  data() {
    return {
      showMenu: 0
    };
  },
  methods: {
    showView(param) {
      this.showMenu = param
    }
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
