<template>
    <WeatherIcon :WeatherIcon=Icon />
    <WeatherComponent :WeatherType=WeatherType />
</template>

<script lang="ts">
import OpenWeatherMap from "openweathermap-ts";
import WeatherComponent from './WeatherComponent.vue';
import WeatherIcon from './WeatherIcon.vue';
export default {
    components: {
        WeatherComponent,
        WeatherIcon
    },
    data() {

        return {
            WeatherType: '',
            Icon: '',
            Humidity: 0,
            Windspeed: 0,
            temperature: 0,
        }
    },
    mounted() {
        const openWeather = new OpenWeatherMap({
            apiKey: import.meta.env.VITE_WEATHER_KEY
        });
        openWeather
            .getCurrentWeatherByCityName({
                cityName: 'ghent'
            })
            .then((weather) => {
                this.WeatherType = weather.weather[0]['description'];
                this.Icon = `https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`;
                this.Humidity = weather.main.humidity;
                this.Windspeed = weather.wind.speed;
                this.temperature = weather.main.temp;
            });
    }
}
</script>