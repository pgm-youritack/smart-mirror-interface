<template>
  <TitleComponent title="Login" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Register</h1>
      <ClockComponent />
    </div>
    <form class="setup__form">
      <input type="text" placeholder="Username" class="setup__form-input" name="Username" />
      <input
        type="text"
        placeholder="DisplayName (used as show name)"
        class="setup__form-input"
        name="Display"
      />
      <input type="Password" placeholder="Password" class="setup__form-input" name="Password" />

      <input type="submit" value="Register" class="setup__form-input" />
    </form>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { isMobile } from 'mobile-device-detect'
export default {
  components: {
    TitleComponent,
    ClockComponent
  },
  mounted() {
    if (!isMobile) {
      this.$router.push('404')
    }
  }
}
</script>
