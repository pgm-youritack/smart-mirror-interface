<template>
    <h1 class="fade">gjsdmljgsmlj</h1>
</template>

<script lang="ts">
import anime from 'animejs';


export default {
  mounted() {
      anime({                                      // <-- using imported
        targets: ".fade",
        translateX: 500
      });
  }
};

</script>