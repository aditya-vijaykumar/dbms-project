<template>
  <v-snackbar v-model="show" :timeout="3000" bottom :color="color">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'showMessage') {
        this.message = state.content
        this.color = state.color
        this.show = true
      }
    })
  },
}
</script>