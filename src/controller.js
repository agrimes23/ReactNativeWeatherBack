const pool = require('../../db.js');

const getWeather = (req, res) => {
    pool.query("SELECT * FROM nativeweather", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getWeather,
}