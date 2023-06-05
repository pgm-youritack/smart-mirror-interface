<template>
  <h1 class="clock">{{ time }}</h1>
</template>

<script lang="js">
import { getData } from '@/services/Supabase'
export default {
  data() {
    return {
      interval: 0,
      time: '',
      hours: ''
    }
  },
  async created() {
    if (document.cookie.includes('session=')) {
      const { hours } = await getData()
      this.hours = hours
    }
    if (this.hours === '12 Hours') {
      this.interval = setInterval(() => {
        // Concise way to format time according to system locale.
        // In my case this returns "3:48:00 am"
        this.time = Intl.DateTimeFormat('en-Us', {
          hour: 'numeric',
          minute: 'numeric'
        }).format()
      }, 1)
    } else {
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
}
</script>
