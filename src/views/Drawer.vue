<template>
  <v-navigation-drawer v-model="drawer" width="200" right temporary app hide-overlay>
    <v-layout wrap row>
      <v-flex>
        <v-container>
          <v-btn large flat icon @click="setting">
            <v-icon>settings</v-icon>
          </v-btn>
          <v-btn dark color="teal" @click="logout">登出文明</v-btn>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="error">
            <v-card-text>三体文明发现了您，请尽快提升您的科技，否则您的文明将有灭顶之灾</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex>
        <v-container>
          <v-card color="info">
            <v-card-text>您的文明人口持续增长中</v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <span class="headline">文明设置</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="文明名称*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="文明密码*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="文明描述*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- <small>*必填字段</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">关闭</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        
        this.$store.commit("changeDrawer", val);
        this.$store.commit("changeBanScorll", val);
      }
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    setting() {
      this.dialog = true;
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

