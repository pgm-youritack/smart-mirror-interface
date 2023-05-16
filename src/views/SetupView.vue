<template>
  <TitleComponent title="Setup" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Setup</h1>
      <ClockComponent />
    </div>
    <form class="setup__form">
      <input type="text" placeholder="Name" class="setup__form-input" name="Username" />
      <input
        type="text"
        placeholder="Country (short code)"
        class="setup__form-input"
        name="Country"
      />
      <select name="Hour_clock" class="setup__form-select">
        <option value="12">12 Hours</option>
        <option value="24">24 Hours</option>
      </select>
      <select name="Measurement" class="setup__form-select">
        <option value="Imperial">Imperial</option>
        <option value="Metric">Metric</option>
      </select>
      <input type="submit" value="Save" class="setup__form-input" />
    </form>
  </div>
</template>

<script lang="ts">
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
