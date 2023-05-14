<template>
  <img class="news__image" :src="Image" />
</template>
<script lang="ts">
export default {
  props: {
    Image: String
  }
}
</script>
