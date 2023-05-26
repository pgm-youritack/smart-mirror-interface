<template>
  <TitleComponent title="Home" />
  <ClockComponent />
  <NavComponent />
</template>

<script>
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
