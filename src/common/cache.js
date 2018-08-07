import storage from 'good-storage'

const CLASSIFY = '__gt1_classify__'
const NOW_CLASSIFY = '__gt1_now_classify__'
const BRAND_LIST = '__brand_list__'

export function loadClassify () {
  return storage.session.get(CLASSIFY, [])
}

export function saveClassify (classify) {
  storage.session.set(CLASSIFY, classify)
  return classify
}

export function loadNowClassify () {
  return storage.session.get(NOW_CLASSIFY, {})
}

export function saveNowClassify (classify) {
  storage.session.set(NOW_CLASSIFY, classify)
  return classify
}

export function loadBrandList () {
  return storage.session.get(BRAND_LIST, [])
}

export function saveBrandList (list) {
  storage.session.set(BRAND_LIST, list)
  return list
}
