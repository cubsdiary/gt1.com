import * as types from './mutation-types'

const mutations = {
  [types.SET_CLASSIFY_ID] (state, id) {
    console.log(id)
    state.classifyId = id
  }
}

export default mutations
