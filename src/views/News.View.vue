<template>
  <TitleComponent title="News" />

  <ul class="scroll-container">
    <li v-for="(article, index) in articles" class="article">
      {{ index + 1 }}:
      <router-link :to="/News/ + article.title.replace('.', '$')" class="article__link">{{
        article.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TitleComponent from '@/components/title.Component.vue'

import { getArticles } from '@/services/News'
export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      articles: []
    }
  },
  async created() {
    if (this.$cookies.isKey('session')) {
      this.articles = await getArticles()
      setTimeout(() => {
        // Get the scroll container element
        const container = document.querySelector('.scroll-container')

        // Calculate the total height of the content
        const contentHeight = container.scrollHeight
        console.log(contentHeight)

        const animation = anime.timeline({
          easing: 'linear',
          duration: 10000,
          loop: true
        })
        animation
          .add({
            targets: '.scroll-container',
            scrollTop: contentHeight
          })
          .add({
            targets: '.scroll-container',
            scrollTop: 0
          })
      }, 1000)
    }
  }
}
</script>
