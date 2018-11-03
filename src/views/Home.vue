<template>
  <!-- <v-container fluid grid-list-sm> -->
  <v-layout row wrap>
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
    data: () => ({}),
    created: function() {}
  };
</script>

<style>
  
</style>
