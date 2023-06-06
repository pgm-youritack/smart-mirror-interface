<template>
  <ClockComponent />
  <div class="viewer">
    <navComponent />
    <RouterView></RouterView>
  </div>
</template>

<script>
import navComponent from '@/components/nav.Component.vue'
import ClockComponent from '@/components/clock.component.vue'
import { isMobile } from 'mobile-device-detect'
export default {
  name: 'desktopLayout',
  components: {
    ClockComponent,
    navComponent
  },
  mounted() {
    const cookieExists = this.$cookies.isKey('session')
    console.log(cookieExists)
    this.socket = new WebSocket('ws://192.168.1.54:8080')
    this.socket.addEventListener('open', () => {
      console.log('connected')
    })
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

    this.socket.onclose = () => {
      console.log('WebSocket connection closed')
      // Handle any necessary actions when the connection is closed
    }
    if (isMobile) {
      this.$router.push('/Login')
    }
  },
  created() {
    const requiredCookie = 'your_cookie_name' // Replace 'your_cookie_name' with the name of the specific cookie you want to check
    const hasCookie = this.$cookies.isKey(requiredCookie)

    if (!hasCookie && this.$route.path !== '/') {
      this.$router.push('/') // Redirect to home page
    }
  }
}
</script>
