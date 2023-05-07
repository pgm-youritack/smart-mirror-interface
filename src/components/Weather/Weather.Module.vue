<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Weather</h1>
  <WeatherIcon :WeatherIcon="icon" />
  <TemperatureComponent :Temperature="temperature" />
  <WindWeatheRComponent :Wind="wind" />
</template>

<script lang="ts">
import { GetIcon, getTemp, getWind } from '../../services/Weather'
import WeatherIcon from './WeatherIcon.Component.vue'
import TemperatureComponent from './Temperature.Component.vue'
import WindWeatheRComponent from './WindWeather.Component.vue'
export default {
  components: {
    WeatherIcon,
    TemperatureComponent,
    WindWeatheRComponent
  },
  data() {
    return {
      temperature: 0,
      wind: 0,
      icon: '',
      humid: ''
    }
  },

  async mounted() {
    this.temperature = await getTemp()
    this.wind = await getWind()
    this.icon = await GetIcon()
  }
}
</script>
