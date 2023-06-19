<template>
  <TitleComponent title="Commando" />
  <div class="header">
    <ClockComponent />
    <h1>Commnado's</h1>
  </div>
  <div class="commando">
    <div class="commando__item">
      <h1 class="commando__item-header">Navigation</h1>
      <ul class="commando__item-list">
        <li class="commando__item-list-item">Show Home</li>
        <li class="commando__item-list-item">Show Weather</li>
        <li class="commando__item-list-item">Show ToDO</li>
        <li class="commando__item-list-item">Show Music</li>
        <li class="commando__item-list-item">Show News</li>
      </ul>
    </div>
    <div class="commando__item">
      <h1 class="commando__item-header">News</h1>
      <ul class="commando__item-list">
        <li class="commando__item-list-item">Article {give index}</li>
      </ul>
    </div>
    <div class="commando__item">
      <h1 class="commando__item-header">Todo</h1>
      <ul class="commando__item-list">
        <li class="commando__item-list-item">add item {insert short item}</li>
        <li class="commando__item-list-item">finish {give index}</li>
      </ul>
    </div>
    <div class="commando__item">
      <h1 class="commando__item-header">Music List</h1>
      <ul class="commando__item-list">
        <li class="commando__item-list-item">play {give index}</li>
      </ul>
    </div>
    <div class="commando__item">
      <h1 class="commando__item-header">Music Player</h1>
      <ul class="commando__item-list">
        <li class="commando__item-list-item">pause music</li>
        <li class="commando__item-list-item">resume music</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import { isMobile } from 'mobile-device-detect'
export default {
  components: {
    TitleComponent,
    ClockComponent
  },
  data() {},
  mounted() {
    if (!isMobile) {
      this.$router.push('404')
    }
  }
}
</script>
