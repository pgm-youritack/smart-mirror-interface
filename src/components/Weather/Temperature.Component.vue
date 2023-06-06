<template>
  <div class="weather__item">
    <h1 class="weather__description">Temp:</h1>
    <h1 v-if="measurement === 'Metric'">{{ Temperature }} &#176;C</h1>
    <h1 v-if="measurement === 'Imperial'" class="weather__Value">{{ Temperature }} &#176;F</h1>
  </div>
</template>
<script>
import { getData } from '@/services/Supabase'

export default {
  props: {
    Temperature: Number
  },
  data() {
    return {
      measurement: ''
    }
  },
  async mounted() {
    if (this.$cookies.isKey('session')) {
      const { measurement } = await getData()
      this.measurement = measurement
    }
  }
}
</script>
