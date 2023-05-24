<template>
  <div class="weather__item">
    <h1 class="weather__description">Temp:</h1>
    <h1 class="weather__Value">{{ Temperature }}C&#176;</h1>
  </div>
</template>
<script>
export default {
  props: {
    Temperature: Number
  }
}
</script>
