<template>
  <TitleComponent title="Local Music" />
  <NavComponent />
</template>

<script>
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
export default {
  components: {
    TitleComponent,
    NavComponent
  }
}
</script>
