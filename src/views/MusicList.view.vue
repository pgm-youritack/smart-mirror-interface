<template>
  <TitleComponent title="music" />
  <ul class="scroll-container">
    <li v-for="(song, index) in songs" class="article">
      <span>{{ index + 1 }}:</span>
      <a @click="playSong(index + 1)" class="article__link">
        {{ song.song_name }}
      </a>
    </li>
  </ul>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TitleComponent from '@/components/title.Component.vue'
import eventbus from '@/utils/eventBus'
import { SelectSong } from '@/services/VoiceCommands'
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
  async mounted() {
    this.songs = await getMusic()
    SelectSong(this.songs)
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
  async created() {},
  methods: {
    playSong(index) {
      eventbus.songSelected = this.songs[index - 1].song_name.replace(/\./g, '$')
      this.$router.push('/home')
    }
  }
}
</script>
