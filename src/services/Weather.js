import { getWeather } from './APICalls'
const getTemp = async () => {
  const data = await getWeather()
  const temperature = await data.main.temp
  return temperature
}
const getWind = async () => {
  const data = await getWeather()
  const temperature = await data.wind.speed
  return temperature
}
const GetIcon = async () => {
  const data = await getWeather()
  const icon = await data.weather[0].icon
  return `http://openweathermap.org/img/w/${icon}.png`
}
const GetHumid = async () => {
  const data = await getWeather()
  const temperature = await data.main.humidity
  return temperature
}
const getDescription = async () => {
  const data = await getWeather()
  const Weather = await data.weather[0].description
  return Weather
}

export { getTemp, getWind, GetIcon, GetHumid, getDescription }
