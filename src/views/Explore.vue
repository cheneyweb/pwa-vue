<template>
  <v-layout row>
    <v-flex xs12>
      <v-list subheader three-line>
        <v-subheader>外星文明</v-subheader>
        <v-list-tile v-for="item in items" :key="item.title" avatar ripple @click="diplomacy">
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            <v-btn icon>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        active: true,
        title: "火星文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        action: "15 min"
      },
      {
        active: true,
        title: "赛亚人文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        action: "15 min"
      },
      {
        title: "三体文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        action: "15 min"
      },
      {
        title: "阿凡达文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        action: "15 min"
      }
    ]
  }),
  methods: {
    diplomacy() {
      console.log("外交");
    }
  }
};
</script>
