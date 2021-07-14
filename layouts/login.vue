<template>
  <v-app dark>
    <v-card>
      <v-toolbar
        class="pt-1 pb-15"
        color="blue darken-4"
        dark
        flat
        height="90px"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h3 class="display-1 my-15 mx-auto">DBMS Project</h3>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute dark temporary>
      <v-list>
        <v-list-item-group v-model="group" mandatory>
          <v-list-item nuxt to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-weight-lifter</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nuxt to="/table-one">
            <v-list-item-icon>
              <v-icon>mdi-format-list-text</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Employee</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nuxt to="">
            <v-list-item-icon>
              <v-icon>mdi-weight-lifter</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Activities</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nuxt to="">
            <v-list-item-icon>
              <v-icon>mdi-calendar-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Events</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nuxt to="">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nuxt to="">
            <v-list-item-icon>
              <v-icon color="red">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="red--text">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Snackbar></Snackbar>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-spacer></v-spacer>
      <span class="center"
        >&copy; {{ new Date().getFullYear() }} Aditya Vijaykumar</span
      >
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'

export default {
  name: 'login',
  components: { Snackbar },
  data() {
    return {
      drawer: false,
      group: null,
      fixed: false,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style>
h1 {
  font-family: 'Poppins';
  font-size: 48px;
}
</style>