<template>
  <div>
    <Header/>
    <router-view/>
    <Bottom/>
    <v-snackbar
      v-model="snackbar"
      top
      right
      multi-line
      color="error"
    >
    {{ eventMessage }}
      <v-btn
        color="gray"
        flat
        @click="snackbar = false"
      >
        关闭
      </v-btn>
    </v-snackbar>
    <v-navigation-drawer
      v-model="drawer"
      width="200"
      fixed
      right
      temporary
      app
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Bottom from "../components/Bottom";
export default {
  components: {
    Header,
    Bottom
  },
  data() {
    return {
      eventMessage:
        "三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾",
      snackbar: true
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("changeDrawer", val);
      }
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
