import firebase from 'firebase/app'

export default {
  actions: {
    async fetchInfo_Menu ({ commit }) { // Load Menu info from BD
      try {
        commit('lockUi')
        const info = (await firebase.database().ref('/menu/').once('value')).val()
        commit('setInfo_Menu', info)
        commit('unlockUi')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updatefetchInfo_Menu ({ commit, state }) { // Update info from BD
      try {
        await firebase.database().ref('/menu/').set(
          state.login_data
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  mutations: {
    setInfo_Menu (state, info) {
      state.menu = info
    },
    clearInfo_Menu (state) {
      state.menu = {}
    }
  },
  state: {
    menu: {
      popular: [{
        calories: 1200,
        comment_EN: 'Very tasty and juicy grilled meat.',
        comment_RU: 'Очень вкусное и сочное мясо на грилле',
        composition_EN: 'Beef, Soy sauce, Sesame oil, Brown sugar, Ginger, Garlic, Chili pepper, Salt, Rosemary',
        composition_RU: 'Говядина, Соевый соус, Кунжутное масло, Коричневый сахар, Имбирь, Чеснок, Перец чили, Соль, Розмарин',
        cost: 2400,
        img: 'https://im0-tub-kz.yandex.net/i?id=6274e99ca195c9813549526fe1a6faf1-l&n=13',
        title_EN: 'Beef steak',
        title_RU: 'Стейк из говядины',
        weight: 330
      }, {
        calories: 380,
        comment_EN: 'Refreshing Great Taste and Health Benefits.',
        comment_RU: 'Прекрасный освежающий вкус и польза для здоровья.',
        composition_EN: 'Tomatoes, Cucumbers, Bulgarian pepper, Onions, Feta, Olives, Olive oil, Lemon juice, Salt, Pepper, Oregano',
        composition_RU: 'Помидоры, Огурцы, Болгарский перец, Лук, Фета, Оливки, Оливковое масло, Лимонный сок, Соль, Перец, Орегано',
        cost: 1200,
        img: 'https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg',
        title_EN: 'Greek salad',
        title_RU: 'Греческий салат',
        weight: 250
      }],
      salad: [{
        calories: 380,
        comment_EN: 'Refreshing Great Taste and Health Benefits.',
        comment_RU: 'Прекрасный освежающий вкус и польза для здоровья.',
        composition_EN: 'Tomatoes, Cucumbers, Bulgarian pepper, Onions, Feta, Olives, Olive oil, Lemon juice, Salt, Pepper, Oregano',
        composition_RU: 'Помидоры, Огурцы, Болгарский перец, Лук, Фета, Оливки, Оливковое масло, Лимонный сок, Соль, Перец, Орегано',
        cost: 1200,
        img: 'https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg',
        title_EN: 'Greek salad',
        title_RU: 'Греческий салат',
        weight: 250
      }]
    },
    menu_category_data: [
      { title: 'pop_dish', url: '/' },
      { title: 'first_meal', url: '/' },
      { title: 'second_meal', url: '/' },
      { title: 'fish', url: '/' },
      { title: 'garnish', url: '/' },
      { title: 'salads', url: '/' },
      { title: 'bake', url: '/' },
      { title: 'drinks', url: '/' }
    ]
  },
  getters: {
    getMenuData (state) {
      return state.menu
    },
    getCategoryMenuData (state) {
      return state.menu_category_data
    }
  }

}
