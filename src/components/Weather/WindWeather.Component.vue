<template>
  <div class="weather__item">
    <h1 class="weather__description">Wind:</h1>
    <h1 class="weather__Value">{{ Wind }} km/h</h1>
  </div>
</template>
<script>
export default {
  props: {
    Wind: Number
  }
}
</script>
