<template>
  <div class="navigationContainer">
    <nav class="navigation">
      <RouterLink class="navigation__item" to="/Home">home</RouterLink>
      <RouterLink class="navigation__item" to="/Weather">Weather</RouterLink>
      <RouterLink class="navigation__item" to="/Todo">ToDo</RouterLink>
      <RouterLink class="navigation__item" to="/Music">Music</RouterLink>
      <RouterLink class="navigation__item" to="/News">News</RouterLink>
    </nav>
    <QrcodeVue
      value="http://192.168.1.54:5173/Login"
      :size="50"
      level="L"
      render-as="svg"
      class="qrCode"
    />
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  mounted() {
    anime({
      targets: '.selected',
      translateX: 50,
      duration: 200,
      easing: 'linear'
    })
  }
}
</script>
