<template>
  <div class="Weather__item">
    <h1 class="Weather__description">humid</h1>
    <h1 class="Weather__Value">{{ Humidity }}%</h1>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    Humidity: Number
  }
}
</script>
