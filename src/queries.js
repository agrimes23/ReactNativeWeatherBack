const getWeather = "SELECT * FROM cityweather"
const getCityById = "SELECT * FROM cityweather WHERE id = $1"
const getWeatherByCity = "SELECT * FROM cityweather WHERE cityName = $1" // $1 is a param variable. 
const checkCityExists = "SELECT s FROM cityweather s WHERE s.cityName = $1"
const addCity = "INSERT INTO cityweather (cityName) VALUES ($1)"
const removeCityWeather = "DELETE FROM cityweather WHERE id = $1"

module.exports = {
    getWeather,
    getCityById,
    getWeatherByCity,
    checkCityExists,
    addCity,
    removeCityWeather,
}