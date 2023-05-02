<template>
    <img :src=WeatherIcon />
</template>
<script lang="ts">
export default {
    props: {
        WeatherIcon: String
    }
}
</script>