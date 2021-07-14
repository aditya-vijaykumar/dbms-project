<template>
  <div>
    <v-container>
      <v-row class="mt-9 mb-15">
        <v-col
          lg="6"
          md="6"
          sm="8"
          cols="12"
          offset-md="3"
          offset-lg="3"
          offset-sm="2"
          class="text-center"
        >
          <h3 class="text-h4">Database Management System</h3>
          <hr
            style="
              margin: 1.6rem 13rem;
              height: 0.25rem;
              background-color: #fff;
            "
          />
          <v-card class="logo py-4 d-flex justify-center">
            <LogoReveal />
          </v-card>
          <v-card>
            <v-card-title>
              This web app explores CRUD Operation on various Tables!
            </v-card-title>
            <v-card-text>
              <p>
                Click on Continue to explore an interactive data table
                implementation of CRUD operations with a node.js backend and
                nuxt.js frontend. You can create new entried, modify previous
                ones, delete any entries as well as sort them.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" class="mr-3 mb-3" nuxt to="/dashboard">
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home Page',
  },
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      onSubmit: false,
      snackbar: false,
      errorMsg: '',
      usernameRules: [(v) => !!v || 'Username is required'],
    }
  },
  methods: {
    async validate() {
      this.$router.replace('/dashboard')
    },
    next() {
      this.$router.replace('/dashboard')
    },
  },
  beforeCreate() {},
}
</script>

<style>
</style>