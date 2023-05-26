<template>
  <div class="news">
    <ImageComponent :Image="Image" />
    <TitleComponent :Title="Title" />
    <descriptionComponent :Description="Description" />
    <QrcodeVue :value="Url" :size="200" level="H" render-as="svg" class="qrCode" />
  </div>
</template>

<script>
import TitleComponent from './Title.Component.vue'
import ImageComponent from './Image.module.vue'
import descriptionComponent from './description.component.vue'
import QrcodeVue from 'qrcode.vue'
import anime from 'animejs/lib/anime.es.js'
export default {
  components: {
    TitleComponent,
    ImageComponent,
    descriptionComponent,
    QrcodeVue
  },
  props: { Title: Text, Image: Text, Url: String, Description: Text },
  mounted() {
    anime({
      targets: '.news',
      translateX: [400, 0],
      duration: 500,
      opacity: [0, 1],
      delay: 1000,
      easing: 'linear'
    })
  }
}
</script>
