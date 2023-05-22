const pool = require('../db.js');
const queries = require('./queries.js')


// getting data from nativeweather database
const getWeather = (req, res) => {
    pool.query(queries.getWeather, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCityById = (req, res) => {
    const id = req.params.id;

    pool.query(queries.getCityById, [id], (error, results) => {
       if(error) throw error
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

// remove city by id from db
const removeCityWeather = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCityById, [id], (error, results) => {
        
        const noCityFound = !results.rows.length

        if (noCityFound) {
            res.send("City does not exist in database.")
        }
        
        pool.query(queries.removeCityWeather, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("City removed successfully.")
        })
        
    })
}


module.exports = {
    getWeather,
    getCityById,
    getWeatherByCity,
    addCity,
    removeCityWeather,
}