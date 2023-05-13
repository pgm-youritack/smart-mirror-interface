<template>
  <titleComponent title="Weather" />
  <h1>Weather</h1>
  <NavComponent />
  <WeatherModule />
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import titleComponent from '@/components/title.Component.vue'
import WeatherModule from '@/components/Weather/Weather.Module.vue'
export default {
  components: {
    NavComponent,
    titleComponent,
    WeatherModule
  }
}
</script>
