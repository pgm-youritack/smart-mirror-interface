<!-- eslint-disable vue/require-v-for-key -->
<template>
  <TitleComponent title="News" />
  <ClockComponent />
  <div class="viewer">
    <NavComponent />
    <div class="news">
      <div class="scroll">
        <li v-for="(article, index) in articles" class="article">
          {{ index + 1 }}:
          <a v-bind:href="/News/ + article.title" class="article__link">{{ article.title }}</a>
        </li>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavComponent from '@/components/Nav.Component.vue'
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { getArticles } from '@/services/News'
export default {
  components: {
    TitleComponent,
    NavComponent,
    ClockComponent
  },
  data() {
    return {
      articles: []
    }
  },
  async mounted() {
    this.articles = await getArticles()
    this.$()
  }
}
</script>
