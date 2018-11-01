<template>
  <v-card flat color="transparent">
    <v-subheader>【文明支出】</v-subheader>

    <v-card-text class="pt-0">
      <v-select
          :items="items"
          label="教育"
          outline
        ></v-select>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-select
          :items="items"
          label="医疗"
          outline
        ></v-select>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-select
          :items="items"
          label="保险"
          outline
        ></v-select>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-select
          :items="items"
          label="科技"
          outline
        ></v-select>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-select
          :items="items"
          label="军事"
          outline
        ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["不投入", "少量", "中等", "大量", "巨额"]
  })
};
</script>