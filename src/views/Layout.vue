<template>
  <div>
    <!-- <Home v-show="showMenu == 0"></Home>
    <Stat v-show="showMenu == 1"></Stat>
    <Explore v-show="showMenu == 2"></Explore>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Bottom/>
    <Drawer/>
  </div>
</template>

<script>
// import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Bottom from "../components/Bottom";
import Home from "./Home";
import Stat from "./Stat.vue";
import Explore from "./Explore.vue";
export default {
  components: {
    // Header,
    Drawer,
    Bottom,
    Home,
    Stat,
    Explore
  },
  data() {
    return {
      showMenu: 0,
      scrollNum: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollNum =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    });
  },
  methods: {
    showView(param) {
      // 前置页面滚动条位置保存
      switch (this.showMenu) {
        case 0:
          this.$store.commit("setHomeScroll", this.scrollNum);
          break;
        case 1:
          this.$store.commit("setStatScroll", this.scrollNum);
          break;
        case 2:
          this.$store.commit("setExploreScroll", this.scrollNum);
          break;
      }
      // 显示页面滚动条位置恢复
      switch (param) {
        case 0:
          this.$nextTick(() => {
            // setTimeout(() => {
            document.documentElement.scrollTop = this.$store.state.homeScroll;
            // }, 100);
          });
          break;
        case 1:
          this.$nextTick(() => {
            // setTimeout(() => {
            document.documentElement.scrollTop = this.$store.state.statScroll;
            // }, 0);
          });
          break;
        case 2:
          this.$nextTick(() => {
            // setTimeout(() => {
            document.documentElement.scrollTop = this.$store.state.exploreScroll;
            // }, 0);
          });
          break;
      }
      // 显示当前页面
      this.showMenu = param;
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
