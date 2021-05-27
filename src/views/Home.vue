<template>
<div>
  <div>
    <h1>{{'pop_dish' | localize}}</h1>

    <div class="row">
    <div class="col s12">

    <div class="col s12 m6 l3">
      <div class="card sticky-action medium">
      <div class="card-image pointer unselectable">
        <img class="activator" src="https://im0-tub-kz.yandex.net/i?id=6274e99ca195c9813549526fe1a6faf1-l&n=13">
        <span class="card-title">{{'cost' | localize}}: 2400{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Beef steak<i class="material-icons right">more_vert</i></span>
        <p>Very tasty and juicy grilled meat.<br>
          </p>
      </div>
      <div class="card-action right-align">
          <a href="#">{{'add_to_order' | localize}}</a>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p>Beef, Soy sauce, Sesame oil, Brown sugar, Ginger, Garlic, Chili pepper, Salt, Rosemary</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: 330{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: 1200{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>

    <div class="col s12 m6 l3">
      <div class="card sticky-action medium">
      <div class="card-image pointer unselectable">
        <img class="activator" src="https://donatewales.org/wp-content/uploads/2/3/3/2333952cbbb6788c4ae051b953b5fc5e.jpeg">
        <span class="card-title">{{'cost' | localize}}: 1200{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Greek salad<i class="material-icons right">more_vert</i></span>
        <p>Refreshing Great Taste and Health Benefits.<br>
          </p>
      </div>
      <div class="card-action right-align">
        <a href="#">{{'add_to_order' | localize}}</a>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p>Tomatoes, Cucumbers, Bulgarian pepper, Onions, Feta, Olives, Olive oil, Lemon juice, Salt, Pepper, Oregano</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: 250{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: 380{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>

        <div class="col s12 m6 l3">
      <div class="card sticky-action medium">
      <div class="card-image pointer unselectable">
        <img class="activator" src="https://im0-tub-kz.yandex.net/i?id=6274e99ca195c9813549526fe1a6faf1-l&n=13">
        <span class="card-title">{{'cost' | localize}}: 2400{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Beef steak<i class="material-icons right">more_vert</i></span>
        <p>Very tasty and juicy grilled meat.<br>
          </p>
      </div>
      <div class="card-action right-align">
          <a href="#">{{'add_to_order' | localize}}</a>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p>Beef, Soy sauce, Sesame oil, Brown sugar, Ginger, Garlic, Chili pepper, Salt, Rosemary</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: 330{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: 1200{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>

        <div class="col s12 m6 l3">
      <div class="card sticky-action medium">
      <div class="card-image pointer unselectable">
        <img class="activator" src="https://im0-tub-kz.yandex.net/i?id=6274e99ca195c9813549526fe1a6faf1-l&n=13">
        <span class="card-title">{{'cost' | localize}}: 2400{{'kzt' | localize}}</span>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Beef steak<i class="material-icons right">more_vert</i></span>
        <p>Very tasty and juicy grilled meat.<br>
          </p>
      </div>
      <div class="card-action right-align">
          <a href="#">{{'add_to_order' | localize}}</a>
          </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{'ingredients' | localize}}:<i class="material-icons right">close</i></span>
        <p>Beef, Soy sauce, Sesame oil, Brown sugar, Ginger, Garlic, Chili pepper, Salt, Rosemary</p>
        <ul style="position: absolute; bottom: 60px;">
          <li>{{'weight' | localize}}: 330{{'g' | localize}}</li>
          <li>{{'calories' | localize}}: 1200{{'kkal' | localize}}</li>
        </ul>
      </div>
    </div>
  </div>

  </div>
  </div>

  </div>

 <FloatButton/>

</div>
</template>

<script>
import FloatButton from '@/components/FloatButton'
// import preloader from '@/components/PreLoader'
// import M from 'materialize-css'
export default {
  data: () => ({

  }),
  props: ['category'],
  components: {
    FloatButton // , preloader
  },
  methods: {

  }

}
</script>
