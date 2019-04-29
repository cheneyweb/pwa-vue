<template>
  <!-- <v-container fluid grid-list-sm> -->

  <v-layout row wrap>
    <v-btn fab fixed top right dark color="teal" @click="changeDrawer">
      <!-- <v-badge overlap> -->
      <!-- <span slot="badge">3</span> -->
      <v-avatar>
        <v-icon size="40">person</v-icon>
      </v-avatar>
      <!-- </v-badge> -->
    </v-btn>

    <v-flex xs12>
      <CardMain/>
    </v-flex>
    <v-flex xs12>
      <CardLevel/>
    </v-flex>
    <v-flex xs12>
      <SliderTax/>
    </v-flex>
    <v-flex xs12>
      <SelectExpend/>
    </v-flex>
    <v-snackbar v-model="snackbar" top auto-height color="error">
      三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾
      <v-btn color="gray" flat @click="snackbar = false">关闭</v-btn>
    </v-snackbar>
  </v-layout>
  <!-- </v-container> -->
</template>

<script>
import CardMain from "../components/CardMain";
import CardLevel from "../components/CardLevel";
import SliderTax from "../components/SliderTax";
import SelectExpend from "../components/SelectExpend";

export default {
  beforeRouteEnter(to, from, next) {
    /* console.log(this, 'beforeRouteEnter'); // undefined
    console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
    console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
    console.log(next, '组件独享守卫beforeRouteEnter第三个参数'); */
    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      //console.log(vm);//当前组件的实例
      if (localStorage.dayCompany == "dayCompany") {
        //localStorage.removeItem('dayCompany')
      }
    });
  },
  components: {
    CardMain,
    CardLevel,
    SliderTax,
    SelectExpend
  },
  created() {},
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  //   document.documentElement.scrollTop = this.$store.state.homeScroll;
  // },
  data() {
    return {
      snackbar: true,
      // homeScrollNum: 0
    };
  },

  methods: {
    changeDrawer() {
      this.$store.commit("changeDrawer", !this.$store.state.drawer);
      this.$store.commit("changeBanScorll", !this.$store.state.banScorll);
    }
    // handleScroll() {
    //   this.homeScrollNum =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    // }
  }
  // beforeDestroy() {
  //   this.$store.commit("setHomeScroll", this.homeScrollNum);
  // }
};
</script>

<style>
</style>
