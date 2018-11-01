<template>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>我的文明</span>
        <span class="font-weight-light">MyCivilization</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
          >
            <v-btn icon slot="activator">
                <v-badge overlap>
                  <span slot="badge">3</span>
                  <v-avatar size="36" color="purple red--after">
                    <v-icon dark>notifications</v-icon>
                  </v-avatar>
                </v-badge>
              </v-btn>

            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>John Leider</v-list-tile-title>
                    <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn
                      :class="fav ? 'red--text' : ''"
                      icon
                      @click="fav = !fav"
                    >
                      <v-icon>favorite</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch v-model="message" color="purple"></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>Enable messages</v-list-tile-title>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch v-model="hints" color="purple"></v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>Enable hints</v-list-tile-title>
                </v-list-tile>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn flat @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" flat @click="menu = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
      </v-toolbar-items>

      
    </v-toolbar>
</template>
