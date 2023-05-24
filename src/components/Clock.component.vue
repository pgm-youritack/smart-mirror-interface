<template>
  <h1 class="clock">{{ time }}</h1>
</template>

<script>
export default {
  data() {
    return {
      interval: 0,
      time: ''
    }
  },
  created() {
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        minute: 'numeric'
      }).format()
    }, 1)
  }
}
</script>
