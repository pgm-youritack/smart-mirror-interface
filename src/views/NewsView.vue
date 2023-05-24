<!-- eslint-disable vue/require-v-for-key -->
<template>
  <TitleComponent title="News" />
  <ClockComponent />
  <div class="viewer">
    <NavComponent />
    <ul class="scroll-container">
      <li v-for="(article, index) in articles" class="article">
        {{ index + 1 }}:
        <a v-bind:href="/News/ + article.title" class="article__link">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.Component.vue'
import anime from 'animejs/lib/anime.es.js'
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
// import { NewsArticleNavigation } from '@/services/VoiceCommands'
import { getArticles } from '@/services/News'
export default {
  components: {
    TitleComponent,
    NavComponent,
    ClockComponent
  },
  data() {
    return {
      articles: []
    }
  },
  async created() {
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
</script>
