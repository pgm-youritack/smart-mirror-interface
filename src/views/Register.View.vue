<template>
  <TitleComponent title="Login" />
  <div class="header">
    <h1 class="header__title">Register</h1>
  </div>
  <div class="setup">
    <form class="setup__form" @submit.prevent="submit">
      <input type="email" placeholder="E-mail" class="setup__form-input" v-model="form.email" />
      <input
        type="Password"
        placeholder="Password"
        class="setup__form-input"
        name="Password"
        v-model="form.password"
      />

      <input type="submit" value="Register" class="setup__form-input" />
    </form>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { isMobile } from 'mobile-device-detect'
import { Register } from '@/services/Supabase'
export default {
  components: {
    TitleComponent
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
      Register(this.form)
    }
  }
}
</script>
