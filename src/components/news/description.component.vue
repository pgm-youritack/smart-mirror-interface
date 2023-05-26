<template>
  <h3>{{ Description }}</h3>
</template>
<script>
export default {
  props: {
    Description: Text
  },
  mounted() {
    console.log(this.Description)
  }
}
</script>
