<template>
  <TitleComponent title="music" />
  <ul class="scroll-container">
    <li v-for="song in songs" class="article">
      {{ song.id }}:
      <router-link :to="/Music/ + song.song_name.replace(/\./g, '$')" class="article__link">{{
        song.song_name
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TitleComponent from '@/components/title.Component.vue'
// import { NewsArticleNavigation } from '@/services/VoiceCommands'
import { getMusic } from '@/services/Supabase'
export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    if (this.$cookies.isKey('session')) {
      this.songs = await getMusic()
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
