<template>
  <TitleComponent title="Local Music" />
  <div class="music">
    <div class="music__Header">
      <img class="music__Header-Image" :src="Image ? Image : placeholder" />
      <h2 class="music__Header-title">{{ title }}</h2>
    </div>
    <div class="music__player">
      <button @click="togglePlayback(playing)" class="music_button">
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
import { getMusicFile } from '@/services/Supabase'
import { MusicStatus } from '@/services/VoiceCommands'
import { Howl } from 'howler'
import artyom from 'artyom.js'
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
      Image: null,
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
        this.Image = await this.getimagefromFile(this.file.publicUrl)
      }
    }
    const voice = new artyom()
    voice.addCommands([
      {
        indexes: ['play music'],
        action: () => {
          this.playAudio()
        }
      },
      {
        indexes: ['pause music'],
        action: () => {
          this.pauseAudio()
        }
      }
    ])
    voice.initialize({
      lang: 'en-GB',
      debug: true,
      listen: true,
      speed: 1,
      mode: 'normal'
    })

    this.$watch('songSelected', async (newSong) => {
      await loadSong(newSong)
    })
    // Load the initial song if available
    await loadSong(this.songSelected)
  },
  methods: {
    togglePlayback(playstatus) {
      if (playstatus) {
        this.sound.pause()
        this.playing = false
        clearInterval(this.interval)
      } else {
        this.sound.play()
        this.playing = true
        this.startSliderUpdateInterval()
      }
    },
    playAudio() {
      this.sound.play()
      this.playing = true
      this.startSliderUpdateInterval()
    },
    pauseAudio() {
      this.sound.pause()
      this.playing = false
      this.startSliderUpdateInterval()
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
    getimagefromFile(fileurl) {
      return new Promise((resolve) => {
        read(fileurl, {
          onSuccess: function (tag) {
            const { tags } = tag
            if (tags && tags.picture) {
              const picture = tags.picture
              const image = `data:${picture.format};base64,${arrayBufferToBase64(picture.data)}`
              resolve(image)
            } else {
              resolve(null)
            }
          }
        })
      })
    }
  }
}
</script>
