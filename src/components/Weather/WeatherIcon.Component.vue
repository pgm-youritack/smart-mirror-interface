<template>
  <img class="weather__image" :src="WeatherIcon" />
</template>
<script lang="ts">
export default {
  props: {
    WeatherIcon: String
  }
}
</script>
