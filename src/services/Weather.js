import { getWeather } from './APICalls'
async function getTemp() {
  const data = await getWeather()
  const temperature = await data.main.temp
  return temperature
}
async function getWind() {
  const data = await getWeather()
  const temperature = await data.wind.speed
  return temperature
}
async function GetIcon() {
  const data = await getWeather()
  const icon = await data.weather[0].icon
  return `http://openweathermap.org/img/w/${icon}.png`
}
async function GetHumid() {
  const data = await getWeather()
  const temperature = await data.main.humidity
  return temperature
}
async function getDescription() {
  const data = await getWeather()
  const Weather = await data.weather[0].description
  return Weather
}

export { getTemp, getWind, GetIcon, GetHumid, getDescription }
