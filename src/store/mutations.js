import * as types from './mutation-types'

const mutations = {
  [types.SET_NOW_CLASSIFY] (state, classify) {
    state.nowClassify = classify
  },
  [types.SET_CLASSIFY_SESSION] (state, classify) {
    state.classify = classify
  },
  [types.SET_BRAND_LIST] (state, list) {
    state.brandList = list
  }
}

export default mutations
