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
        commit('setOrder_Cost', info)
        commit('unlockUi')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updatefetchDish_Order ({ dispatch, commit, state }) { // Update info in BD
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/order/${uid}/dishes`).set(
          state.order.dishes
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updatefetchInfo_Order ({ dispatch, commit, state }) { // Обновить инфу о заказе
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/order/${uid}/info/`).set(
          state.order.info
        )
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createInfo_Order ({ dispatch, commit, state }) { // Обновить инфу о заказе
      try {
        var Data = new Date()
        var Year = Data.getFullYear()
        var Month = Data.getMonth()
        var Day = Data.getDate()
        var table = state.order.info.table
        const uid = await dispatch('getUid')
        const rndID = await dispatch('randomID')
        const info = (await firebase.database().ref(`/order/${uid}/info`).once('value')).val()
        console.log(table)
        if (info === null) {
          await firebase.database().ref(`/order/${uid}/info/`).set(
            {
              time: Day + '.' + Month + '.' + Year,
              order_id: rndID,
              table: table,
              cost_wo_percent: 0,
              total_cost: 0,
              payed: false,
              online_payment: 'online',
              status: 'none'
            }
          )
        }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async addDish ({ dispatch, commit }, data) { // добавить в корзину
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
    async removeOnce ({ dispatch, commit }, { id, count }) { // отнять 1 к порции или удалить
      const uid = await dispatch('getUid')
      if (count < 2) {
        await firebase.database().ref(`/order/${uid}/dishes/${id}`).remove()
        commit('setMess', localizeFilter('Removed'))
      } else {
        await firebase.database().ref(`/order/${uid}/dishes/${id}/count`).set(count - 1)
      }
      await dispatch('fetchInfo_Order')
    },
    async addOnce ({ dispatch }, { id, count }) { // прибавить 1 к порции
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/order/${uid}/dishes/${id}/count`).set(count + 1)
      await dispatch('fetchInfo_Order')
    },
    async updateTable ({ dispatch, getters }) { // обновить номер стола
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/order/${uid}/info/table`).set(getters.getOrderData.table)
    },
    randomID () { // генерация ID
      var abc = 'abcdefghijklmnopqrstuvwxyz0123465798'
      var rs = ''
      while (rs.length < 16) {
        rs += abc[Math.floor(Math.random() * abc.length)]
      }
      return rs
    }

  },
  mutations: {
    setInfo_Order (state, info) {
      state.order = info
    },
    setInfo_Table (state, table) {
      state.order.info.table = table
    },
    clearInfo_Order (state) {
      state.order.info = {}
      state.order.dishes = {}
    },
    setOrder_Cost (state) {
      var costOrder = 0
      var info = state.order.dishes
      for (var id in info) {
        costOrder += info[id].cost * info[id].count
      }
      state.order.info.cost_wo_percent = costOrder
      state.order.info.total_cost = costOrder + 0.1 * costOrder
    }
  },
  state: {
    order: {
      info: {
        time: '',
        order_id: '',
        table: null,
        cost_wo_percent: 0,
        total_cost: 0,
        payed: false,
        online_payment: 'online',
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
