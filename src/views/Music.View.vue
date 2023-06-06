<template>
  <TitleComponent title="Local Music" />
  <div class="music">
    <img :src="Image" />
    <h2>{{ title }}</h2>
    <button @click="togglePlayback" class="music_button">
      {{ playing ? '&#8214;' : '&#9654;' }}
    </button>
    <input
      type="range"
      class="music_slider"
      v-model="currentTime"
      :max="duration"
      @input="seekTo"
    />
    <div class="musictimer">
      <span class="musictimer__current">{{ formatTime(currentTime) }}</span>
      /
      <span class="musictimer__duration">{{ formatTime(duration) }}</span>
    </div>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import { getMusicFile } from '../services/Supabase'
import { Howl } from 'howler'
import { read } from 'jsmediatags/dist/jsmediatags.min.js'
import placeholderPicture from '@/assets/images/music.png'
function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}
export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      sound: null,
      duration: 0,
      currentTime: 0,
      playing: false,
      interval: null,
      file: '',
      title: '',
      Image: null,
      placeholder: placeholderPicture
    }
  },
  async mounted() {
    const urlParam = this.$route.params.name.toString().replace(/\$/g, '.')
    this.title = urlParam.replace('.mp3', '')
    this.file = await getMusicFile(urlParam)

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
    this.getimagefromFile()
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
    },
    getimagefromFile() {
      read(this.file.publicUrl, {
        onSuccess: function (tag) {
          const { tags } = tag

          if (tags && tags.picture) {
            const picture = tags.picture
            const imageDataUrl = `data:${picture.format};base64,${arrayBufferToBase64(
              picture.data
            )}`
            this.$nextTick(() => {
              this.Image = imageDataUrl
              console.log(this.Image)
            })
          }
        }
      })
    }
  }
}
</script>
