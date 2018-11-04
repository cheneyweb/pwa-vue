<template>
  <!-- <v-content> -->
  <v-layout d-flex justify-center fill-height>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="700">
  
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
                <v-text-field prepend-icon="person" name="login" label="新文明名称" type="text" :messages="['支持中英文数字']"></v-text-field>
                <v-text-field v-if="isPassword" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" to="/home">创建新文明</v-btn>
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
                <v-text-field prepend-icon="person" name="login" label="6位文明ID" type="number" :messages="['6位纯数字']"></v-text-field>
                <v-text-field v-if="isPassword" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/home">进入</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  
      <v-layout justify-center fill-height>
        <v-flex xs12 sm4>
          <v-img src="../img/icons/android-chrome-512x512.png" max-height="512" max-width="512">
          </v-img>
        </v-flex>
      </v-layout>
  
    </v-parallax>
  </v-layout>
  <!-- </v-content> -->
</template>

<script>
export default {
  data() {
    return {
      isPassword: false
    };
  }
};
</script>


