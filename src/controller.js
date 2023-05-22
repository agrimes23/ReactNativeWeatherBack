const pool = require('../db.js');
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


const addCity = (req, res) => {
    const {cityName} = req.body;

    console.log("Req.body " + cityName)

    //check if city exists already in db
    pool.query(queries.checkCityExists, [cityName], (error, results) => {

        if(error) throw error

        if (results.rows.length) {
            res.send("This city already exists on the Dashboard")
        } 

        // add city to db
        pool.query(queries.addCity, [cityName], (error, results) => {
            if (error) throw error;
            res.status(201).send("City saved successfully")
            console.log("City created.")
        })
    })

}

module.exports = {
    getWeather,
    getWeatherByCity,
    addCity,
}