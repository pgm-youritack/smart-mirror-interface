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
    this.socket = new WebSocket('ws://192.168.1.54:8080')
    this.socket.addEventListener('open', () => {
      console.log('connected')
    })

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
      // Handle any WebSocket errors
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
      const code = await Login(this.form)
      const message = {
        title: 'session',
        text: code,
        timestamp: Date.now()
      }
      this.socket.send(JSON.stringify(message))
      const message2 = {
        title: 'reload',
        timestamp: Date.now()
      }
      this.socket.send(JSON.stringify(message2))
    }
  }
}
</script>
