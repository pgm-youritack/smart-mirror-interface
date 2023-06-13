<template>
  <TitleComponent title="music" />
  <ul class="scroll-container">
    <li v-for="song in songs" class="article">
      {{ song.id }}:
      <button @click="playSong(song.song_name.replace(/\./g, '$'))" class="article__link">
        {{ song.song_name }}
      </button>
    </li>
  </ul>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TitleComponent from '@/components/title.Component.vue'
import eventbus from '@/utils/eventBus'
import { getMusic } from '@/services/Supabase'
export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      songs: [],
      isSongSelected: false
    }
  },
  async created() {
    this.songs = await getMusic()
    setTimeout(() => {
      const container = document.querySelector('.scroll-container')
      const contentHeight = container.scrollHeight
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
  },
  methods: {
    playSong(songUrl) {
      eventbus.songSelected = songUrl
      this.$router.push('/home')
    }
  }
}
</script>
