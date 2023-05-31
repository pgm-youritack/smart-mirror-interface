<template>
  <TitleComponent title="Home" />
  <ClockComponent />
  <NavComponent />
</template>

<script>
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'

export default {
  components: {
    TitleComponent,
    NavComponent,
    ClockComponent
  },
  mounted() {
    this.socket = new WebSocket('ws://localhost:8080')

    this.socket.onopen = () => {
      console.log('WebSocket connection established')
    }
    this.socket.onmessage = (event) => {
      console.log(event)
      const message = JSON.parse(event.data)
      console.log('Received message:', message)
      // Perform any necessary actions with the received message
    }

    this.socket.onclose = () => {
      console.log('WebSocket connection closed')
      // Handle any necessary actions when the connection is closed
    }

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
      // Handle any WebSocket errors
    }
  },
  watch() {}
}
</script>
