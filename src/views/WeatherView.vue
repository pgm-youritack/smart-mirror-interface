<template>
  <titleComponent title="Weather" />
  <h1>Weather</h1>
  <TemperatureComponent/>
  <NavComponent/>
  <WeatherModule/>
</template>

<script lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import TemperatureComponent from '@/components/TemperatureComponent.vue'
import titleComponent from '@/components/titleComponent.vue'
import WeatherModule from '@/components/Weather/WeatherModule.vue'
export default {
  components: {
    TemperatureComponent,
    NavComponent,
    titleComponent,
    WeatherModule,
  }
}
</script>
