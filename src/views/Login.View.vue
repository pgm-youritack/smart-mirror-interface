<template>
  <TitleComponent title="Login" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Login</h1>
      <ClockComponent />
    </div>
    <form class="setup__form">
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
      </form>
      <RouterLink class="RegisterLink" to="/Register">register (if you are new here)</RouterLink>
    </form>
    <button></button>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { Login } from '@/services/Supabase'
import { isMobile } from 'mobile-device-detect'
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
      }
    }
  },
  mounted() {
    if (!isMobile) {
      this.$router.push('404')
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
      Login(this.form)
    }
  }
}
</script>
