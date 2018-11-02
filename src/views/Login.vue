<template>
  <v-content>
    <v-layout align-center justify-center>
      <v-flex xs12 sm4 md4 px-2>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>注册/登录一体化</v-toolbar-title>
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
              <v-text-field prepend-icon="person" name="login" label="登录请输入6位文明ID" type="number" :messages="['创建新文明时无需输入']"></v-text-field>
              <v-text-field v-if="isPassword" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" to="/home">创建新文明</v-btn>
            <v-btn color="primary" to="/home">进入</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
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


