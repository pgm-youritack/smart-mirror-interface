<template>
  <div class="navigationContainer">
    <nav class="navigation">
      <RouterLink class="navigation__item" to="/Home">home</RouterLink>
      <RouterLink class="navigation__item" to="/Weather">Weather</RouterLink>
      <RouterLink class="navigation__item" to="/Todo">ToDo</RouterLink>
      <RouterLink class="navigation__item" to="/Music">Music</RouterLink>
      <RouterLink class="navigation__item" to="/News">News</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import anime from 'animejs/lib/anime.es.js'

export default {
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

    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.ip)
      })
  }
}
</script>
