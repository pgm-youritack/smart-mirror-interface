<template>
  <titleComponent title="Weather" />
  <ClockComponent />
  <div class="viewer">
    <NavComponent />
    <WeatherModule />
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.Component.vue'
import titleComponent from '@/components/title.Component.vue'
import WeatherModule from '@/components/Weather/Weather.Module.vue'
import ClockComponent from '@/components/Clock.component.vue'
export default {
  components: {
    NavComponent,
    titleComponent,
    WeatherModule,
    ClockComponent
  }
}
</script>
