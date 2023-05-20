const pool = require('../../db.js');
const queries = require('./queries.js')


// getting data from nativeweather database
const getWeather = (req, res) => {
    pool.query(queries.getWeather, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getWeatherByCity = (req, res) => {
    const city = req.params.city;

    pool.query(queries.getWeatherByCity, [city], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getWeather,
}