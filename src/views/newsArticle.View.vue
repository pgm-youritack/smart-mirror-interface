<template>
  <TitleComponent title="News" />
  <NewsModule :Title="title" :Image="image" :Url="url" :Description="description" />
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import NewsModule from '@/components/news/News.Module.vue'
import { GetArticle } from '@/services/News'
export default {
  components: {
    TitleComponent,
    NewsModule
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
    const urlParam = this.$route.params.name.toString().replace('$', '.')
    this.article = await GetArticle(urlParam)
    this.title = this.article[0].title.toString()

    if (this.article[0].image_url === null) {
      this.description = null
    } else {
      this.image = this.article[0].image_url.toString()
    }
    this.url = this.article[0].link.toString()
    if (this.article[0].description === null) {
      this.description = null
    } else {
      this.description = this.article[0].description.toString()
    }
  }
}
</script>
