import * as types from './mutation-types'
import {saveClassify, saveNowClassify, saveBrandList} from '../common/cache'

export const saveClassifySession = function ({commit}, classify) {
  commit(types.SET_CLASSIFY_SESSION, saveClassify(classify))
}

export const saveNowClassifySession = function ({commit}, classify) {
  commit(types.SET_NOW_CLASSIFY, saveNowClassify(classify))
}

export const saveBrandListSession = function ({commit}, list) {
  commit(types.SET_BRAND_LIST, saveBrandList(list))
}
