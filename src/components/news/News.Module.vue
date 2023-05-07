<template>
  <h1>hello</h1>
  <TitleComponent :Title="title" />
</template>

<script lang="ts">
import { GetTitle } from '../../services/News'
import TitleComponent from './Title.Component.vue'

export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      title: ''
    }
  },

  async mounted() {
    this.title = await GetTitle()
  }
}
</script>
