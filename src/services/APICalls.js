import axios from 'axios'

const getWeather = async () => {
  const promise = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=ghent&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }&units=metric`
  )
  return await promise.data
}
const Getnews = async () => {
  const promise = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWS_KEY}&country=be&language=nl`
  )
  return await promise.data
}

export { getWeather, Getnews }
