import firebase from 'firebase/app'
import localizeFilter from '@/filters/localize.filter'

export default {
  actions: {
    async fetchInfo_Order ({ dispatch, commit }) { // Load Menu info from BD
      try {
        commit('lockUi')
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/order/${uid}/`).once('value')).val()
        commit('setInfo_Order', info)
        commit('unlockUi')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updatefetchInfo_Order ({ dispatch, commit, state }) { // Update info from BD
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/order/${uid}/`).set(
          state.order
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async addDish ({ dispatch, commit }, data) { // Add new entry
      try {
        data.count = 1
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/order/${uid}/dishes`).push(data)
        await dispatch('fetchInfo_Order')
        commit('setMess', localizeFilter('Added'))
      } catch (e) {
        commit('setMess', localizeFilter('Error') + ' "' + e + '"')
        throw e
      }
    },
    async removeOnce ({ dispatch, commit }, { id, count }) {
      const uid = await dispatch('getUid')
      if (count < 2) {
        await firebase.database().ref(`/order/${uid}/dishes/${id}`).remove()
        commit('setMess', localizeFilter('Removed'))
      } else {
        await firebase.database().ref(`/order/${uid}/dishes/${id}/count`).set(count - 1)
      }
      await dispatch('fetchInfo_Order')
    },
    async addOnce ({ dispatch }, { id, count }) {
      console.log(count)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/order/${uid}/dishes/${id}/count`).set(count + 1)
      await dispatch('fetchInfo_Order')
    }

  },
  mutations: {
    setInfo_Order (state, info) {
      state.order = info
    },
    clearInfo_Order (state) {
      state.order.info = {}
      state.order.dishes = {}
    }
  },
  state: {
    order: {
      info: {
        time: '',
        order_id: '',
        table: 0,
        payed: false,
        status: 'none'
      },
      dishes: [{
        /* calories: 380,
        comment_EN: 'Refreshing Great Taste and Health Benefits.',
        comment_RU: 'Прекрасный освежающий вкус и польза для здоровья.',
        composition_EN: 'Tomatoes, Cucumbers, Bulgarian pepper, Onions, Feta, Olives, Olive oil, Lemon juice, Salt, Pepper, Oregano',
        composition_RU: 'Помидоры, Огурцы, Болгарский перец, Лук, Фета, Оливки, Оливковое масло, Лимонный сок, Соль, Перец, Орегано',
        count: 1,
        cost: 1200,
        img: 'https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg',
        title_EN: 'Greek salad',
        title_RU: 'Греческий салат',
        weight: 250
      },
      {
        calories: 380,
        comment_EN: 'Refreshing Great Taste and Health Benefits.',
        comment_RU: 'Прекрасный освежающий вкус и польза для здоровья.',
        composition_EN: 'Tomatoes, Cucumbers, Bulgarian pepper, Onions, Feta, Olives, Olive oil, Lemon juice, Salt, Pepper, Oregano',
        composition_RU: 'Помидоры, Огурцы, Болгарский перец, Лук, Фета, Оливки, Оливковое масло, Лимонный сок, Соль, Перец, Орегано',
        count: 1,
        cost: 1200,
        img: 'https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg',
        title_EN: 'Greek salad',
        title_RU: 'Греческий салат',
        weight: 250 */
      }]
    }
  },
  getters: {
    getOrderData (state) {
      return state.order.info
    },
    getOrderDishes (state) {
      return state.order.dishes
    }
  }

}
