<template>
  <WeatherComponent/>
  <ul class="list">
    <li>test</li>
    <li>test</li>
    <li>test</li>
    <li>test</li>
  </ul>
    <button @click="go">test</button>
</template>

<script lang="ts">
import anime from 'animejs';
import router from '@/router';
export default {
    mounted() {
        anime({
            targets: ".list li",
            opacity:[0,1],
            easing:'easeOutSine',
            delay: anime.stagger(100, { start: 700, from: "first" }),
            duration:500,
            translateX: [0, "-1rem"],
        });

    },
    methods: {
      
        go: function () {
          anime({
            targets: ".list li",
            opacity:[1,0],
            easing:'easeOutSine',
            delay: anime.stagger(100, { start: 700, from: "last" }),
            duration:500,
            translateX: ["-1rem",0],
        });
            setTimeout(() => {
              router.push('/')
            }, 2000);
        },
    },
};

</script>