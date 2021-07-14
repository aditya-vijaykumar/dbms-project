export const state = () => ({
  content: '',
  color: ''
})

export const getters = {
  content: state => state.content,
}

export const mutations = {
  showMessage(state, payload) {
    state.content = payload.content
    state.color = payload.color
  }
}

export const actions = {
  // usernameUpdate({ commit }, { username }) {
  //   console.log('Logout')
  //   commit('userSignedOut', {})
  // },
}