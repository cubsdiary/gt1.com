import storage from 'good-storage'

const CLASSIFY = '__gt1_classify__'

export function loadClassify () {
  return storage.session.get(CLASSIFY, [])
}

export function saveClassify (classify) {
  storage.session.set(CLASSIFY, classify)
  return classify
}
