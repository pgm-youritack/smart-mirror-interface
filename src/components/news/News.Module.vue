<template>
  <div class="news">
    <ImageComponent :Image="Image" />
    <TitleComponent :Title="Title" />
    <descriptionComponent :Description="Description" />
    <QrcodeVue :value="Link" :size="200" level="H" render-as="svg" class="qrCode" />
  </div>
</template>

<script lang="ts">
import { GetArticle } from '../../services/News'
import TitleComponent from './Title.Component.vue'
import ImageComponent from './Image.module.vue'
import descriptionComponent from './description.component.vue'
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    TitleComponent,
    ImageComponent,
    descriptionComponent,
    QrcodeVue
  },
  data() {
    return {
      article: JSON,
      Title: '',
      Image: '',
      Description: '',
      Link: ''
    }
  },

  async mounted() {
    this.article = await GetArticle()
    this.Title = (this.article as any).title
    this.Image = (this.article as any).image_url
    this.Description = (this.article as any).description
    this.Link = (this.article as any).link
  }
}
</script>
