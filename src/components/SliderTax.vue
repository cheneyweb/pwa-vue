<template>
  <v-card dark tile flat>
    <v-subheader>[文明税收]</v-subheader>

    <v-layout wrap>
      <v-flex md4 xs12>
        <v-card-text class="pt-0">
          <v-slider
            thumb-size="20"
            v-model="poor"
            :rules="rules"
            label="穷人"
            hint="滑动调节税率"
            persistent-hint
            thumb-label="always"
          ></v-slider>
        </v-card-text>
      </v-flex>

      <v-flex md4 xs12>
        <v-card-text class="pt-0">
          <v-slider
            thumb-size="20"
            v-model="middle"
            :rules="rules"
            label="中层"
            hint="滑动调节税率"
            persistent-hint
            thumb-label="always"
          ></v-slider>
        </v-card-text>
      </v-flex>

      <v-flex md4 xs12>
        <v-card-text class="pt-0">
          <v-slider
            thumb-size="20"
            v-model="rich"
            :rules="rules"
            label="富人"
            hint="滑动调节税率"
            persistent-hint
            thumb-label="always"
          ></v-slider>
        </v-card-text>
      </v-flex>
    </v-layout>
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