import {loadClassify, loadNowClassify, loadBrandList} from '../common/cache'

const state = {
  classify: loadClassify(),
  nowClassify: loadNowClassify(),
  brandList: loadBrandList()
}

export default state
