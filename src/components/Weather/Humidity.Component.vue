<template>
  <div class="weather__item">
    <h1 class="weather__description">humid:</h1>
    <h1 class="weather__Value">{{ Humidity }}%</h1>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    Humidity: Number
  }
}
</script>
