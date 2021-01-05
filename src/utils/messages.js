import localizeFilter from '@/filters/localize.filter'

export default {
  logout: localizeFilter('LoggedOut'),
  login: 'Для начала войдите в систему',
  'auth/user-not-found': 'Пользователя с таким email не существует',
  'auth/wrong-password': 'Неверный пароль',
  'auth/email-already-in-use': 'Email уже занят'
}
