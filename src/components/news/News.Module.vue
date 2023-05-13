<template>
  <div class="article">
    <ImageComponent :Image="Image" />
    <TitleComponent :Title="Title" />
    <descriptionComponent :Description="Description" />
  </div>
</template>

<script lang="ts">
import { GetArticle } from '../../services/News'
import TitleComponent from './Title.Component.vue'
import ImageComponent from './Image.module.vue'
import descriptionComponent from './description.component.vue'

export default {
  components: {
    TitleComponent,
    ImageComponent,
    descriptionComponent
  },
  data() {
    return {
      article: JSON,
      Title: '',
      Image: '',
      Description: ''
    }
  },

  async mounted() {
    this.article = await GetArticle()
    this.Title = (this.article as any).title
    this.Image = (this.article as any).image_url
    this.Description = (this.article as any).description
  }
}
</script>
