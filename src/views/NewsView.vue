<template>
  <TitleComponent title="News" />
  <h1>Home</h1>
  <NavComponent />
</template>

<script lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import TitleComponent from '@/components/titleComponent.vue'

export default {
  components: {
    TitleComponent,
    NavComponent
  }
}
</script>
