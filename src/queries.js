const getWeather = "SELECT * FROM nativeweather"
const getWeatherByCity = "SELECT * FROM nativeweather WHERE city = $1" // $1 is a param variable. 

module.exports = {
    getWeather,
    getWeatherByCity,
}