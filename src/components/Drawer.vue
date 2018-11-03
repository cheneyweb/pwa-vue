<template>
  <v-navigation-drawer v-model="drawer" width="200" right temporary app hide-overlay>
    <v-layout wrap row>
      <v-flex>
        <v-container>
          <v-btn color="teal" to="/">登出/切换文明</v-btn>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="pink">
            <v-card-text>
              三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-text>
              您的文明人口持续增长中
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    computed: {
      drawer: {
        get() {
          return this.$store.state.drawer;
        },
        set(val) {
          this.$store.commit("changeDrawer", val);
        }
      }
    }
    // computed: {
    //   binding() {
    //     const binding = {};
    //     if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;
    //     return binding;
    //   }
    // }
  };
</script>

