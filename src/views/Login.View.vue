<template>
  <TitleComponent title="Login" />
  <div class="header">
    <ClockComponent />
    <h1 class="header__title">Login</h1>
  </div>
  <div class="setup">
    <form class="setup__form" @submit.prevent="submit">
      <p class="error" v-if="messageText !== ''">{{ messageText }}</p>
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
import { isMobile } from 'mobile-device-detect'
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
    if (!isMobile) {
      this.$router.push('404')
    }
    this.socket = new WebSocket('wss://smartmirrorinterface:8010')
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
      if (await Login(this.form)) {
        const code = await Login(this.form)
        console.log(code)
        const message = {
          title: 'session',
          text: code,
          timestamp: Date.now()
        }
        this.$router.push('/setup')
        this.socket.send(JSON.stringify(message))
        const message2 = {
          title: 'reload',
          timestamp: Date.now()
        }
        this.socket.send(JSON.stringify(message2))
        this.$router.push('/setup')
      } else {
        console.log('hello')
        this.messageText = 'invalid input'
      }
    }
  }
}
</script>
