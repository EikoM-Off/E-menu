import store from '../store'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const locales = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter (key) {
  const locale = store.getters.getAccountData.locale || 'en-US'
  return locales[locale][key] || `[Localize error]: key ${key} not found`
}
