<template>
  <v-container>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed>
      <v-btn flat color="teal" to="home" @click="showFatherView(0)">
        <span>文明进程</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="stat" @click="showFatherView(1)">
        <span>文明数据</span>
        <v-icon>trending_up</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="explore" @click="showFatherView(2)">
        <span>文明探索</span>
        <v-icon>search</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 0
    };
  },
  created: function() {},
  // computed: {
  //   isShowBottom() {
  //     return this.$route.path == "/" ? false : true;
  //   },
  //   // color() {
  //   //   switch (this.bottomNav) {
  //   //     case 0:
  //   //       return "teal";
  //   //     case 1:
  //   //       return "cyan darken-2";
  //   //     case 2:
  //   //       return "brown";
  //   //   }
  //   // }
  // },
  methods: {
    showFatherView(param) {
      this.$parent.showView(param);
    }
  }
};
</script>