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
    <v-snackbar v-model="snackbar" top auto-height color="error">三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾
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
  components: {
    CardMain,
    CardLevel,
    SliderTax,
    SelectExpend
  },
  data: () => ({
    snackbar: true
  }),
  created: function() {},
  methods: {
    changeDrawer() {
      this.$store.commit("changeDrawer", !this.$store.state.drawer);
    }
  }
};
</script>

<style>
</style>
