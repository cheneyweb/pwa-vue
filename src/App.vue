<template>
  <v-app :class="{hidden:banScorll}">
    <v-content>
      <router-view /> 
    </v-content>
  </v-app>
</template>

<script>
import Layout from "./views/Layout";
export default {
  name: "App",
  components: {
    Layout
  },
  data() {
    return {
    }
  },
  computed:{
    banScorll: {
      get() {
        return this.$store.state.banScorll;
      }
    }
  }
  
};
</script>
<style>
.hidden {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>

