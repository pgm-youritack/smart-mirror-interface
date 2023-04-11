<template>
    <h1>temp</h1>
    <h1>{{ info }} C&#176;</h1>
</template>

<script lang="ts">
import axios from 'axios';
export default{
    data(){
        return{
            info:'test'
        }
    },
    mounted(){
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=ghent&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`)
        .then((response)=>{
            const {data} = response
            var tempValue = data['main']['temp']
            this.info = tempValue
        })
    }
}
    </script>