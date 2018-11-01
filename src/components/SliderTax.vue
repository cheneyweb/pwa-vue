<template>
  <v-card flat color="transparent">
    <v-subheader>【文明税收】</v-subheader>

    <v-card-text class="pt-0">
      <v-slider
        v-model="poor"
        :rules="rules"
        label="穷人"
        hint="滑动调节税率"
        persistent-hint
        thumb-label="always"
      ></v-slider>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-slider
        v-model="middle"
        :rules="rules"
        label="中层"
        hint="滑动调节税率"
        persistent-hint
        thumb-label="always"
      ></v-slider>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-slider
        v-model="rich"
        :rules="rules"
        label="富人"
        hint="滑动调节税率"
        persistent-hint
        thumb-label="always"
      ></v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      poor: 5,
      middle: 10,
      rich: 15,
      rules: [v => v <= 45 || "重税"]
    };
  }
};
</script>