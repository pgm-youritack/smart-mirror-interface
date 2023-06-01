<template>
  <div class="navigationContainer">
    <nav class="navigation">
      <RouterLink class="navigation__item" to="/Home">home</RouterLink>
      <RouterLink class="navigation__item" to="/Weather">Weather</RouterLink>
      <RouterLink class="navigation__item" to="/Todo">ToDo</RouterLink>
      <RouterLink class="navigation__item" to="/Music">Music</RouterLink>
      <RouterLink class="navigation__item" to="/News">News</RouterLink>
    </nav>
    <QrcodeVue
      value="http://192.168.1.54:5173/Login"
      :size="50"
      level="L"
      render-as="svg"
      class="qrCode"
    />
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  mounted() {
    anime({
      targets: '.selected',
      translateX: 50,
      duration: 200,
      easing: 'linear'
    })
    this.socket = new WebSocket('ws://192.168.1.54:8080')
    this.socket.addEventListener('open', () => {
      console.log('connected')
    })
    this.socket.onmessage = (event) => {
      // Check if the received data is a Blob object
      if (event.data instanceof Blob) {
        event.data.text().then((text) => {
          const message = JSON.parse(text)

          document.cookie = `session =${message.text}; path=/`
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
    if (document.cookie.match('session')) {
      console.log('exist')
    } else {
      this.$router.push('/home')
    }
  },
  watch() {}
}
</script>
