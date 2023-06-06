<template>
  <titleComponent title="Weather" />
  <WeatherModule />
</template>

<script>
import titleComponent from '@/components/title.Component.vue'
import WeatherModule from '@/components/Weather/Weather.Module.vue'
export default {
  components: {
    titleComponent,
    WeatherModule
  }
}
</script>
