<template>
  <img class="weather__image" :src="WeatherIcon" />
</template>
<script>
export default {
  props: {
    WeatherIcon: String
  }
}
</script>
