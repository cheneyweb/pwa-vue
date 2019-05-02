<template>
  <v-card dark tile flat>
    <v-subheader>[文明支出]</v-subheader>
    <v-layout wrap>
      <v-flex md3 xs6>
        <v-card-text class="pt-0">
          <v-select :items="items" label="教育" outline></v-select>
        </v-card-text>
      </v-flex>
      <v-flex md3 xs6>
        <v-card-text class="pt-0">
          <v-select :items="items" label="医疗" outline></v-select>
        </v-card-text>
      </v-flex>

      <!-- <v-flex md6 xs6>
      <v-card-text class="pt-0">
        <v-select :items="items" label="保险" outline></v-select>
      </v-card-text>
      </v-flex>-->
      <v-flex md3 xs6>
        <v-card-text class="pt-0">
          <v-select :items="items" label="科技" outline></v-select>
        </v-card-text>
      </v-flex>

      <v-flex md3 xs6>
        <v-card-text class="pt-0">
          <v-select :items="items" label="军事" outline></v-select>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["不投入", "少量", "中等", "大量", "巨额"]
  })
};
</script>