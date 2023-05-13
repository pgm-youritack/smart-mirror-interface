<template>
  <h1>{{ Textclock }}</h1>
</template>

<script lang="ts">
export default {
  data() {
    return {
      Textclock: '',
      Clock: new Date(),
      M: 0,
      H: 0
    }
  },
  async mounted() {
    window.setInterval(() => {
      this.H = this.Clock.getHours()
      this.M = this.Clock.getMinutes()
      this.Textclock = this.H + ':' + this.M
    }, 1000)
  }
}
</script>
