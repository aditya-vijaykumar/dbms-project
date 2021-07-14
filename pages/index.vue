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
          <h3 class="text-h4">Login to Access the Database</h3>
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
              This web app explores how circular wait can be prevented!
            </v-card-title>
            <v-card-text>
              <p>
                Read more about Circular Waits and Deadlocks in our
                documentation
                <a
                  href="https://www.notion.so/Circular-Wait-Prevention-c5fa39d1dd954a8fb87a61c7158afc63"
                  class="primary--text"
                  target="_blank"
                  >here.</a
                >
                Take a look at our GitHub repo for the code
                <a
                  href="https://github.com/aditya-vijaykumar/circular-wait-prevention"
                  class="primary--text"
                  target="_blank"
                  >here.</a
                >
              </p>
              <p>
                Click on Continue to explore an interactive implementation of a
                technique to prevent circular waits in Operating Systems.
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