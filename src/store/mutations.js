import * as types from './mutation-types'

const mutations = {
  [types.SET_CLASSIFY_ID] (state, id) {
    console.log(id)
    state.classifyId = id
  },
  [types.SET_CLASSIFY_SESSION] (state, classify) {
    state.classify = classify
  }
}

export default mutations
