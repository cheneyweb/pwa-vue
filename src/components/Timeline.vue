<template>
  <v-timeline>
    <v-timeline-item v-for="n in 5" :key="n" color="red lighten-2" small>
      <span slot="opposite">1—10代文明</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">原始文明</v-card-title>
        <v-card-text class="pt-0">当前文明进程中，您的人口增长率高达300%</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>