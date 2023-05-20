const pool = require('../../db.js');
const queries = require('./queries.js')

const getWeather = (req, res) => {
    pool.query(queries.getWeather, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getWeather,
}