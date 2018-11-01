<template>
  <v-container>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      fixed
    >
      <v-btn dark to="/">
        <span>文明进程</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn dark to="/stat">
          <span>文明数据</span>
          <v-icon>trending_up</v-icon>
      </v-btn>
      <v-btn dark to="/about">
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

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
      }
    }
  }
};
</script>