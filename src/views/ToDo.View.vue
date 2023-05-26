<template>
  <TitleComponent title="To Do" />
  <h1>Home</h1>
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
