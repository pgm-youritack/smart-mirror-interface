<template>
  <div class="navigationContainer">
    <nav class="navigation">
      <RouterLink class="navigation__item" to="/Home">home</RouterLink>
      <RouterLink class="navigation__item" to="/Weather">Weather</RouterLink>
      <RouterLink class="navigation__item" to="/Todo">ToDo</RouterLink>
      <RouterLink class="navigation__item" to="/Music">Music</RouterLink>
      <RouterLink class="navigation__item" to="/News">News</RouterLink>
    </nav>
    <QrcodeVue value="hello" :size="50" level="L" render-as="svg" class="qrCode" />
  </div>
</template>

<script lang="ts">
import anime from 'animejs/lib/anime.es.js'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  mounted() {
    anime({
      targets: '.navigation__item',
      translateX: 0,
      duration: 200,
      easing: 'linear'
    })
    anime({
      targets: '.selected',
      translateX: 50,
      duration: 200,
      easing: 'linear'
    })
  }
}
</script>
