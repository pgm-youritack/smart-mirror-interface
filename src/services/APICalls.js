import axios from 'axios'
import { getData } from '@/services/Supabase'

const getWeather = async () => {
  const data = await getData()
  const promise = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=${data.measurement}`
  )
  return await promise.data
}
const Getnews = async () => {
  const data = await getData()
  const promise = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${process.env.VUE_APP_NEWS_KEY}&country=${data.countryCode}`
  )
  return await promise.data
}

export { getWeather, Getnews }
