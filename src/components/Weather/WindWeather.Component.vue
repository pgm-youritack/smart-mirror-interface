<template>
  <div class="weather__item">
    <h1 class="weather__description">Wind:</h1>
    <h1 v-if="measurement === 'Metric'" class="weather__Value">{{ Wind }} M/s</h1>
    <h1 v-if="measurement === 'Imperial'" class="weather__Value">{{ Wind }} Mph</h1>
  </div>
</template>
<script>
import { getData } from '@/services/Supabase'
export default {
  props: {
    Wind: Number
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
