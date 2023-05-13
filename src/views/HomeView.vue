<template>
  <TitleComponent title="Home" />
  <h1>Home</h1>
  <ClockComponent />
  <NavComponent />
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'

export default {
  components: {
    TitleComponent,
    NavComponent,
    ClockComponent
  }
}
</script>
