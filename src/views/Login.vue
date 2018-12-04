<template>
  <!-- <v-content> -->
  <v-layout d-flex justify-center fill-height>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="800">
      <div class="text-xs-center">建议您【添加到主屏幕】或【收藏】以便下次打开</div>
      <div class="text-xs-center">若添加失败，请在系统中对本浏览器应用允许开启【创建桌面快捷方式】权限</div>
      <v-layout align-center justify-center fill-height>
        <v-flex xs12 sm4 mr-1>
          <v-card class="elevation-12">
            <v-toolbar dark color="success">
              <v-toolbar-title>注册新文明</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-tooltip bottom>
                        <v-btn icon large :href="source" target="_blank" slot="activator">
                          <v-icon large>code</v-icon>
                        </v-btn>
                        <span>Source</span>
                      </v-tooltip> -->
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="regNickName" prepend-icon="person" name="login" label="新文明名称" type="text" :messages="['1-5位中英文数字']"></v-text-field>
                <v-text-field v-if="isPassword" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" @click="reg">创建新文明</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 ml-1>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>登录现有文明</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-tooltip bottom>
                        <v-btn icon large :href="source" target="_blank" slot="activator">
                          <v-icon large>code</v-icon>
                        </v-btn>
                        <span>Source</span>
                      </v-tooltip> -->
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="loginNickName" prepend-icon="person" name="login" label="文明名称/ID" type="number" :messages="['1-5位中英文数字']"></v-text-field>
                <v-text-field v-if="isPassword" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="reg" to="/home">进入</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  
      <v-layout justify-center fill-height>
        <v-flex xs12 sm4>
          <v-img src="../img/icons/android-chrome-512x512.png" max-height="512" max-width="512">
            <div class="text-xs-center">2018-2019 &copy; CheneyXu</div>
          </v-img>
        </v-flex>
  
        <!-- <v-flex xs12 sm14> -->
        <!-- </v-flex> -->
        <!-- </v-layout> -->
        <!-- <v-layout justify-center fill-height> -->
  
      </v-layout>
  
    </v-parallax>
    <v-snackbar v-model="err" top auto-height color="warning">
      {{errMsg}}
      <v-btn color="gray" flat @click="err = false">
        关闭
      </v-btn>
    </v-snackbar>
  </v-layout>
  <!-- </v-content> -->
</template>

<script>
  export default {
    data() {
      return {
        regNickName: "",
        loginNickName: "",
        isPassword: false,
        isAlert: false,
        err: false,
        errMsg: ""
      };
    },
    methods: {
      async reg() {
        let res = await this.$store.dispatch("reg", {
          nickName: this.regNickName
        });
        this.err = res.err;
        this.errMsg = res.res;
      }
    }
  };
</script>


