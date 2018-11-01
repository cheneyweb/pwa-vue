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
        Close
      </v-btn>
    </v-snackbar>
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
  data: () => ({
    eventMessage:
      "三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾",
    snackbar: true
  })
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
