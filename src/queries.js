const getWeather = "SELECT * FROM nativeweather"
const getWeatherByCity = "SELECT * FROM nativeweather WHERE cityName = $1" // $1 is a param variable. 
const checkCityExists = "SELECT s FROM nativeweather s WHERE s.cityName"

module.exports = {
    getWeather,
    getWeatherByCity,
    checkCityExists,
}