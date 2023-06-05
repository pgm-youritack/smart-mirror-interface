<template>
  <TitleComponent title="Local Music" />
  <div class="viewer">
    <NavComponent />
    <div class="music">
      <img src="@/assets/images/music.png" />
      <h2>{{ title }}</h2>
      <button @click="togglePlayback" class="music_button">
        {{ playing ? '&#8214;' : '&#9654;' }}
      </button>
      <input type="range" class="music_slider" v-model="currentTime" :max="duration" @input="seekTo" />
      <div class="musictimer">
        <span class="musictimer__current">{{ formatTime(currentTime) }}</span>
        /
        <span class="musictimer__duration">{{ formatTime(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import { getMusicFile } from '../services/Supabase'
import { Howl } from 'howler'

export default {
  components: {
    TitleComponent,
    NavComponent,
  },
  data() {
    return {
      sound: null,
      duration: 0,
      currentTime: 0,
      playing: false,
      interval: null,
      file: '',
      title: ''
    }
  },
  async mounted() {
    const urlParam = this.$route.params.name.toString().replace(/\$/g, '.')
    this.title = urlParam.replace('.mp3', '')
    this.file = await getMusicFile(urlParam)
    console.log(this.file.publicUrl)
    this.sound = new Howl({
      src: [this.file.publicUrl],
      onplay: () => {
        this.duration = this.sound.duration()
        this.startSliderUpdateInterval()
      },
      onend: () => {
        this.playing = false
        this.currentTime = 0
        clearInterval(this.interval)
      }
    })
    this.togglePlayback()
  },
  methods: {
    togglePlayback() {
      if (this.playing) {
        this.sound.pause()
        this.playing = false
        clearInterval(this.interval)
      } else {
        this.sound.play()
        this.playing = true
        this.startSliderUpdateInterval()
      }
    },
    seekTo() {
      this.sound.seek(this.currentTime)
    },
    updateSlider() {
      this.currentTime = this.sound.seek()
    },
    startSliderUpdateInterval() {
      this.interval = setInterval(this.updateSlider, 500)
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, '0')
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, '0')
      return `${minutes}:${seconds}`
    }
  }
}
</script>
