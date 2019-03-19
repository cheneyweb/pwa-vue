<template>
  <v-container v-if="isShowBottom" pt-0>
    <v-bottom-nav :active.sync="bottomNav" color="#4DBA87" :value="true" fixed height="42">
      <v-btn dark to="/home">
        <span>文明进程</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn dark to="/stat">
        <span>文明数据</span>
        <v-icon>trending_up</v-icon>
      </v-btn>
      <v-btn dark to="/explore">
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
  computed: {
    isShowBottom() {
      return this.$route.path == "/" ? false : true;
    },
    // color() {
    //   switch (this.bottomNav) {
    //     case 0:
    //       return "teal";
    //     case 1:
    //       return "cyan darken-2";
    //     case 2:
    //       return "brown";
    //   }
    // }
  }
};
</script>