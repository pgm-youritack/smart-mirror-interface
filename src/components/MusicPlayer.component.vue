<template>
  <TitleComponent title="Local Music" />
  <div class="music">
    <div class="music__image-title">
      <img :src="Image" />
      <h2>{{ title }}</h2>
    </div>
    <div class="music__player">
      <button @click="togglePlayback" class="music_button">
        {{ playing ? '&#8214;' : '&#9654;' }}
      </button>
      <div class="music__slider">
        <span class="musictimer__current">{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          class="music_slider-input"
          v-model="currentTime"
          :max="duration"
          @input="seekTo"
        />
        <span class="musictimer__duration">{{ formatTime(duration) }}</span>
      </div>
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
  props: {
    songSelected: Text
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
      Image: placeholderPicture,
      placeholder: placeholderPicture
    }
  },
  async mounted() {
    const loadSong = async (newSong) => {
      if (newSong) {
        const urlParam = newSong.toString().replace(/\$/g, '.')
        this.title = urlParam.replace('.mp3', '')
        this.file = await getMusicFile(urlParam)

        if (this.sound) {
          this.sound.stop()
          this.sound.unload()
          this.sound = null
        }

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

        this.playing = true
        this.currentTime = 0
        this.sound.play()
      }
    }

    this.$watch('songSelected', async (newSong) => {
      await loadSong(newSong)
    })

    // Load the initial song if available
    await loadSong(this.songSelected)
    setTimeout(() => {
      this.getimagefromFile()
    }, 1)
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
            const imageDataUrl = `data:${picture.format};base64,  ${arrayBufferToBase64(
              picture.data
            )}`
            setTimeout(() => {
              this.Image = imageDataUrl
              console.log(this.Image)
            }, 0)
          }
        }
      })
    }
  }
}
</script>
