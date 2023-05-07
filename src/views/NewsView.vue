<template>
  <TitleComponent title="News" />
  <h1>News</h1>
  <NavComponent />
  <NewsModule />
</template>

<script lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import TitleComponent from '@/components/titleComponent.vue'
import NewsModule from '@/components/news/News.Module.vue'
export default {
  components: {
    TitleComponent,
    NavComponent,
    NewsModule
  }
}
</script>
