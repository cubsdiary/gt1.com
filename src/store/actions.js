import * as types from './mutation-types'
import {saveClassify} from '../common/cache'

export const saveClassifySession = function ({commit}, classify) {
  commit(types.SET_PLAY_HISTORY, saveClassify(classify))
}
