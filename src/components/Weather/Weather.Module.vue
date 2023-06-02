<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="weather">
    <WeatherIcon :WeatherIcon="icon" />
    <WeatherTypeComponent :WeatherType="description" />
    <TemperatureComponent :Temperature="temperature" />
    <HumidityComponent :Humidity="humid" />
    <WindWeatheRComponent :Wind="wind" />
  </div>
</template>

<script>
import { getDescription, GetHumid, GetIcon, getTemp, getWind } from '../../services/Weather'
import WeatherIcon from './WeatherIcon.Component.vue'
import TemperatureComponent from './Temperature.Component.vue'
import WindWeatheRComponent from './WindWeather.Component.vue'
import WeatherTypeComponent from './WeatherType.Component.vue'
import HumidityComponent from './Humidity.Component.vue'
import anime from 'animejs/lib/anime.es'
export default {
  components: {
    WeatherIcon,
    TemperatureComponent,
    WindWeatheRComponent,
    WeatherTypeComponent,
    HumidityComponent
  },
  data() {
    return {
      temperature: 0,
      wind: 0,
      icon: '',
      humid: 0,
      description: ''
    }
  },

  async mounted() {
    anime({
      targets: '.weather',
      translateX: [400, 0],
      duration: 500,
      opacity: [0, 1],
      delay: 1500,
      easing: 'linear'
    })
    this.temperature = await getTemp()
    this.wind = await getWind()
    this.icon = await GetIcon()
    this.humid = await GetHumid()
    this.description = await getDescription()
  }
}
</script>
