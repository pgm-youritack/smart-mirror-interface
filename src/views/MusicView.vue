<template>
  <TitleComponent title="Local Music" />
  <h1>Local Music</h1>
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
