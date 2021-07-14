<template>
  <div>
    <v-container>
      <v-row class="my-15">
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 1</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to="table-one">
                Open
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 2</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to=""> Open </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 3</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to=""> Open </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 4</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to=""> Open </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 5</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to=""> Open </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <h3 class="h3 text-center">Table 6</h3>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="my-3" nuxt to=""> Open </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
    async validate() {},
  },
  beforeCreate() {},
}
</script>

<style>
</style>