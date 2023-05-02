<template>
  <TitleComponent title="Spotify" />
  <h1>Local Music</h1>
  <NavComponent />
  <MusicNavComponent />
</template>

<script lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import TitleComponent from '@/components/titleComponent.vue'
import MusicNavComponent from '@/components/MusicNavComponent.vue'
export default {
  components: {
    TitleComponent,
    NavComponent,
    MusicNavComponent
  }
}
</script>
