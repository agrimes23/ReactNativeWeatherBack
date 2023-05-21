const getWeather = "SELECT * FROM nativeweather"
const getWeatherByCity = "SELECT * FROM nativeweather WHERE city = $1" // $1 is a param variable. 
const checkCityExists = "SELECT s FROM nativeweather s WHERE s.city"
const addCity = "INSERT INTO nativeweather (city) VALUES ($1)"

module.exports = {
    getWeather,
    getWeatherByCity,
    checkCityExists,
    addCity,
}