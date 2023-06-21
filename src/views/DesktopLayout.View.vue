<template>
  <ClockComponent />
  <div class="container">
    <div class="viewer">
      <navComponent />
      <RouterView></RouterView>
    </div>
    <MusicPlayerComponent v-if="showMusicPLayer" :songSelected="currentTitle" />
  </div>
</template>

<script>
import navComponent from '@/components/Nav.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import MusicPlayerComponent from '@/components/MusicPlayer.component.vue'
import { isMobile } from 'mobile-device-detect'
import eventbus from '../utils/eventBus'
import { watch } from 'vue'
export default {
  name: 'desktopLayout',
  components: {
    ClockComponent,
    navComponent,
    MusicPlayerComponent
  },
  data() {
    return {
      currentTitle: '',
      showMusicPLayer: false
    }
  },
  mounted() {
    this.socket = new WebSocket('wss://smartmirrorinterface:8010')
    this.socket.onmessage = (event) => {
      // Check if the received data is a Blob object
      if (event.data instanceof Blob) {
        event.data.text().then((text) => {
          const message = JSON.parse(text)
          if (message.title == 'reload') {
            this.$router.go()
          } else if (message.title == 'session') {
            document.cookie = `session =${message.text}; path=/`
          }
        })
      } else {
        // Handle the case when the data is not a Blob
        console.log('Received non-Blob message:', event.data)
      }
    }
    if (isMobile) {
      this.$router.push('/Login')
    }
  },
  created() {
    const requiredCookie = 'session' // Replace 'your_cookie_name' with the name of the specific cookie you want to check
    const hasCookie = this.$cookies.isKey(requiredCookie)
    if (!hasCookie) {
      this.$router.push('/') // Redirect to home page
    }
    watch(() => eventbus.songSelected, this.handleSelectedSong)
  },
  methods: {
    handleSelectedSong(title) {
      this.currentTitle = title
      this.showMusicPLayer = true
    }
  }
}
</script>
