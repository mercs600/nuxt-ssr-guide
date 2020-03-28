export const actions = {
  async nuxtServerInit ({ commit }, { $http, error }) {
    try {
      const menu = await $http.$get('api/menu')
      commit('setMenu', menu)
    } catch (err) {
      return error(err)
    }
  }
}

export const state = () => ({
  menu: []
})

export const mutations = {
  setMenu(state, payload) {
    state.menu = payload
  }
}

