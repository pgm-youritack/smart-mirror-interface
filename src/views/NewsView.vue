<template>
  <TitleComponent title="News" />
  <ClockComponent />
  <div class="viewer"><NavComponent /> <NewsModule /></div>
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import NewsModule from '@/components/news/News.Module.vue'
import ClockComponent from '@/components/Clock.component.vue'
export default {
  components: {
    TitleComponent,
    NavComponent,
    NewsModule,
    ClockComponent
  }
}
</script>
