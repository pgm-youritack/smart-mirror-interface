<template>
  <TitleComponent title="Local Music" />
  <h1>Local Music</h1>
  <NavComponent />
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
export default {
  components: {
    TitleComponent,
    NavComponent
  }
}
</script>
