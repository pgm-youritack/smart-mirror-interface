<template>
  <TitleComponent title="Login" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Login</h1>
      <ClockComponent />
    </div>
    <form class="setup__form" @submit.prevent="submit">
      <input type="email" placeholder="E-Mail" class="setup__form-input" v-model="form.email" />
      <input
        type="Password"
        placeholder="Password"
        class="setup__form-input"
        name="Password"
        v-model="form.password"
      />
      <input type="submit" value="Login" class="setup__form-input" />
      <RouterLink class="RegisterLink" to="/Register">register (if you are new here)</RouterLink>
    </form>
  </div>
  <div>
    <input v-model="messageText" type="text" placeholder="Enter a message" />
    <button @click="sendMessage">Send Message</button>
    <ul></ul>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { Login } from '@/services/Supabase'
export default {
  components: {
    TitleComponent,
    ClockComponent
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      messageText: ''
    }
  },
  mounted() {
    this.socket = new WebSocket('ws://localhost:8080')
    this.socket.addEventListener('open', () => {
      console.log('connected')
    })
    this.socket.onmessage = (event) => {
      console.log(event)

      // Check if the received data is a Blob object
      if (event.data instanceof Blob) {
        event.data.text().then((text) => {
          const message = JSON.parse(text)
          console.log('Received message:', message)
          // Perform any necessary actions with the received message
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

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
      // Handle any WebSocket errors
    }
  },
  methods: {
    async submit() {
      // this.$emit('submit', this.form)
      // await Login(this.form)
    },
    sendMessage() {
      const message = {
        text: this.messageText,
        timestamp: Date.now()
      }
      console.log(message)
      this.socket.send(JSON.stringify(message))
    }
  }
}
</script>
