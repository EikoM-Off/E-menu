<template>
  <div class="section">
    <h4>{{'add_dishes' | localize}}</h4>

    <div class="divider"></div>

    <div class="row">
    <div class="col s12">
<!-- Карточка в меню выбора блюд -->
    <h5>{{'Example_menu' | localize}}</h5>
    <div class="col s12 m6 l3">
      <div class="card sticky-action large">
      <div class="card-image pointer unselectable">
        <img class="activator" style="width: 100%; object-fit: cover; height: 100%;" v-bind:src="img">
        <span class="card-title" style="padding: 5px; background-color: rgb(0 0 0 / 50%); border-radius: 0 5px 0 0;">{{'cost' | localize}}: {{cost}}{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4" v-if="locale == 'en-US'">{{title_EN}}<i class="material-icons right">more_vert</i></span>
        <span class="card-title activator grey-text text-darken-4" v-if="locale == 'ru-RU'">{{title_RU}}<i class="material-icons right">more_vert</i></span>
        <p v-if="locale == 'en-US'">{{comment_EN}}<br></p>
        <p v-if="locale == 'ru-RU'">{{comment_RU}}<br></p>
      </div>
      <div class="card-action right-align">
          <span class="waves-effect waves-light btn-flat amber-text text-darken-2" @click="addDish(dish)">{{'add_to_order' | localize}}</span>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p v-if="locale == 'en-US'">{{composition_EN}}</p>
        <p v-if="locale == 'ru-RU'">{{composition_RU}}</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: {{weight}}{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: {{calories}}{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- Карточка на странице заказа -->
<div class="col s12">
<div class="divider"></div>
<h5>{{'Example_order' | localize}}</h5>
    <div class="col s12">
      <div class="card horizontal">
      <div class="card-image">
        <!-- <a class="btn-floating btn-small waves-effect waves-light red darken-4" style="position: absolute; left: -15px; top: -15px;"><i class="material-icons">delete_forever</i></a> -->
        <img style="width: 100%; object-fit: cover; height: 100%;" v-bind:src="img">
      </div>
      <div class="card-stacked" style="min-width: 200px;">
        <div class="card-content">
          <span class="card-title" v-if="locale == 'en-US'">{{title_EN}}</span>
          <span class="card-title" v-if="locale == 'ru-RU'">{{title_RU}}</span>
            <ul>
              <li>{{'weight' | localize}}: {{weight}}{{'g' | localize}}</li>
              <li>{{'calories' | localize}}: {{calories}}{{'kkal' | localize}}</li>
            </ul>
        </div>
        <div class="card-action center-align">
          <span>x1</span>
          <div>
            <span class="left btn-flat-small amber-text text-darken-2 pointer"><i class="material-icons">remove</i></span>
            <span class="grey-text text-darken-4">{{cost}}</span>
            <span class="right btn-flat-small amber-text text-darken-2 pointer"><i class="material-icons">add</i></span>
          </div>
         <span>{{'kzt' | localize}}</span>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>
<!-- Блок настройки параметров блюда -->
  <div class="row">
    <form @submit.prevent="AddEntry">
      <div class="row card-panel">
          <div class="col s12 unselectable">
            <h4>{{'Add_New_Entry' | localize}}</h4>
          </div>
          <!-- Выбор категории -->
            <div class="input-field col s6">
            <input type="text" v-model="category" id="category"
            :class="{invalid: ($v.category.$dirty && !$v.category.required) || ($v.category.$dirty && !$v.category.minLength) || ($v.category.$dirty && !$v.category.maxLength)}">
            <label class="active" for="category">{{'New_Category' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.category.$dirty && !$v.category.required"
            >{{'Category_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.category.$dirty && !$v.category.minLength"
            >{{'MinLenght' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.category.$dirty && !$v.category.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>

          <SelectCategory @selected="onSelect" :key="locale"/>

          <!-- Title EN/RU -->
          <div class="input-field col s6">
            <input type="text" v-model="title_EN" id="title_EN"
            :class="{invalid: ($v.title_EN.$dirty && !$v.title_EN.required) || ($v.title_EN.$dirty && !$v.title_EN.minLength) || ($v.title_EN.$dirty && !$v.title_EN.maxLength)}">
            <label class="active" for="title_EN">{{'New_title_EN' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.title_EN.$dirty && !$v.title_EN.required"
            >{{'title_EN_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.title_EN.$dirty && !$v.title_EN.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>

          <div class="input-field col s6">
            <input type="text" v-model="title_RU" id="title_RU"
            :class="{invalid: ($v.title_RU.$dirty && !$v.title_RU.required) || ($v.title_RU.$dirty && !$v.title_RU.minLength) || ($v.title_RU.$dirty && !$v.title_RU.maxLength)}">
            <label class="active" for="title_RU">{{'New_title_RU' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.title_RU.$dirty && !$v.title_RU.required"
            >{{'title_RU_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.title_RU.$dirty && !$v.title_RU.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>
          <!-- Comments EN/RU -->
          <div class="input-field col s6">
            <input type="text" v-model="comment_EN" id="comment_EN"
            :class="{invalid: ($v.comment_EN.$dirty && !$v.comment_EN.required) || ($v.comment_EN.$dirty && !$v.comment_EN.minLength) || ($v.comment_EN.$dirty && !$v.comment_EN.maxLength)}">
            <label class="active" for="comment_EN">{{'New_comment_EN' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.comment_EN.$dirty && !$v.comment_EN.required"
            >{{'comment_EN_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.comment_EN.$dirty && !$v.comment_EN.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>

          <div class="input-field col s6">
            <input type="text" v-model="comment_RU" id="comment_RU"
            :class="{invalid: ($v.comment_RU.$dirty && !$v.comment_RU.required) || ($v.comment_RU.$dirty && !$v.comment_RU.minLength) || ($v.comment_RU.$dirty && !$v.comment_RU.maxLength)}">
            <label class="active" for="comment_RU">{{'New_comment_RU' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.comment_RU.$dirty && !$v.comment_RU.required"
            >{{'comment_RU_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.comment_RU.$dirty && !$v.comment_RU.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>
          <!-- Composition EN/RU -->
          <div class="input-field col s6">
            <input type="text" v-model="composition_EN" id="composition_EN"
            :class="{invalid: ($v.composition_EN.$dirty && !$v.composition_EN.required) || ($v.composition_EN.$dirty && !$v.composition_EN.minLength) || ($v.composition_EN.$dirty && !$v.composition_EN.maxLength)}">
            <label class="active" for="composition_EN">{{'New_composition_EN' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.composition_EN.$dirty && !$v.composition_EN.required"
            >{{'composition_EN_is_Empty' | localize}}</small>
          </div>

          <div class="input-field col s6">
            <input type="text" v-model="composition_RU" id="composition_RU"
            :class="{invalid: ($v.composition_RU.$dirty && !$v.composition_RU.required) || ($v.composition_RU.$dirty && !$v.composition_RU.minLength) || ($v.composition_RU.$dirty && !$v.composition_RU.maxLength)}">
            <label class="active" for="composition_RU">{{'New_composition_RU' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.composition_RU.$dirty && !$v.composition_RU.required"
            >{{'composition_RU_is_Empty' | localize}}</small>
          </div>
          <!-- Cost -->
          <div class="input-field col s6">
            <input type="text" v-model="cost" id="cost"
            :class="{invalid: ($v.cost.$dirty && !$v.cost.required) || ($v.cost.$dirty && !$v.cost.minLength) || ($v.cost.$dirty && !$v.cost.maxLength)}">
            <label class="active" for="cost">{{'New_cost' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.cost.$dirty && !$v.cost.required"
            >{{'cost_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.cost.$dirty && !$v.cost.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>
          <!-- Callories -->
          <div class="input-field col s6">
            <input type="text" v-model="calories" id="calories"
            :class="{invalid: ($v.calories.$dirty && !$v.calories.required) || ($v.calories.$dirty && !$v.calories.minLength) || ($v.calories.$dirty && !$v.calories.maxLength)}">
            <label class="active" for="calories">{{'New_calories' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.calories.$dirty && !$v.calories.required"
            >{{'calories_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.calories.$dirty && !$v.calories.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>
          <!-- Weight -->
          <div class="input-field col s6">
            <input type="text" v-model="weight" id="weight"
            :class="{invalid: ($v.weight.$dirty && !$v.weight.required) || ($v.weight.$dirty && !$v.weight.minLength) || ($v.weight.$dirty && !$v.weight.maxLength)}">
            <label class="active" for="weight">{{'New_weight' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.weight.$dirty && !$v.weight.required"
            >{{'weight_is_Empty' | localize}}</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.weight.$dirty && !$v.weight.maxLength"
            >{{'MaxLenght' | localize}}</small>
          </div>
          <!-- Photo -->
          <div class="input-field col s12">
            <input type="text" v-model="img" id="img"
            :class="{invalid: ($v.img.$dirty && !$v.img.required) || ($v.img.$dirty && !$v.img.minLength) || ($v.img.$dirty && !$v.img.maxLength)}">
            <label class="active" for="img">{{'New_img' | localize}}</label>
            <small
              class="helper-text invalid"
              v-if="$v.img.$dirty && !$v.img.required"
            >{{'img_is_Empty' | localize}}</small>
          </div>

        <div class="col s12 right-align">
          <button type="submit" class="waves-effect waves-green btn-flat teal white-text">{{'Add' | localize}}</button>
        </div>

      </div>
  </form>
  </div>

  </div>
</template>

<script>
import M from 'materialize-css'
import { required, maxLength } from 'vuelidate/lib/validators'
import SelectCategory from '@/components/SelectCategory'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    category: '',
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
  }),
  validations: {
    category: { maxLength: maxLength(25), required },
    calories: { required, maxLength: maxLength(5) },
    cost: { required, maxLength: maxLength(5) },
    comment_EN: { required, maxLength: maxLength(140) },
    comment_RU: { required, maxLength: maxLength(140) },
    composition_EN: { required },
    composition_RU: { required },
    img: { required },
    title_EN: { required, maxLength: maxLength(40) },
    title_RU: { required, maxLength: maxLength(40) },
    weight: { required, maxLength: maxLength(5) }
  },
  computed: {
    locale () {
      return this.$store.getters.getLocale // получаем переменную локализации
    }
  },
  methods: {
    ...mapActions(['addDishMenu']),
    AddEntry: function () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        var data = {
          calories: this.calories,
          comment_EN: this.comment_EN,
          comment_RU: this.comment_RU,
          composition_EN: this.composition_EN,
          composition_RU: this.composition_RU,
          cost: this.cost,
          img: this.img,
          title_EN: this.title_EN,
          title_RU: this.title_RU,
          weight: this.weight
        }
        this.addDishMenu({ category: this.category, data })
      } catch (e) { this.$message(e) }
    },
    onSelect (data) {
      this.category = data.category
      setTimeout(() => {
        M.updateTextFields()
      })
    }
  },
  components: { SelectCategory }
}
</script>
