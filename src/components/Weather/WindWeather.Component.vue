<template>
  <div class="Weather__item">
    <h1 class="Weather__description">Wind</h1>
    <h1 class="Weather__Value">{{ Wind }} km/h</h1>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    Wind: Number
  }
}
</script>
