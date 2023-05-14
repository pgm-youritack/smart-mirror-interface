<template>
  <nav class="navigation">
    <RouterLink class="navigation__item" to="/Home">home</RouterLink>
    <RouterLink class="navigation__item" to="/Weather">Weather</RouterLink>
    <RouterLink class="navigation__item" to="/Todo">ToDo</RouterLink>
    <RouterLink class="navigation__item" to="/Music">Music</RouterLink>
    <RouterLink class="navigation__item" to="/News">News</RouterLink>
  </nav>
</template>

<script lang="ts">
import anime from 'animejs/lib/anime.es.js'

export default {
  mounted() {
    anime({
      targets: '.selected',
      translateX: 50,
      duration: 200,
      easing: 'linear'
    })
    console.log('test')
  }
}
</script>
