<template>
  <TitleComponent title="News" />
  <ClockComponent />
  <div class="viewer">
    <NavComponent />
    <NewsModule :Title="title" :Image="image" :Url="url" :Description="description" />
  </div>
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import NewsModule from '@/components/news/News.Module.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { GetArticle } from '@/services/News'
export default {
  components: {
    TitleComponent,
    NavComponent,
    NewsModule,
    ClockComponent
  },
  data() {
    return {
      article: {},
      title: Text,
      image: Text,
      url: String,
      description: Text
    }
  },
  async mounted() {
    const urlParam = this.$route.params.name.toString()
    this.article = await GetArticle(urlParam)
    this.title = this.article[0].title.toString()
    this.image = this.article[0].image_url.toString()
    this.url = this.article[0].image_url.toString()
    this.description = this.article[0].description.toString()
  }
}
</script>
