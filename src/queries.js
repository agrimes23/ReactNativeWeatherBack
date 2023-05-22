const getWeather = "SELECT * FROM cityweather"
const getWeatherByCity = "SELECT * FROM cityweather WHERE cityName = $1" // $1 is a param variable. 
const checkCityExists = "SELECT s FROM cityweather s WHERE s.cityName = $1"
const addCity = "INSERT INTO cityweather (cityName) VALUES ($1)"

module.exports = {
    getWeather,
    getWeatherByCity,
    checkCityExists,
    addCity,
}