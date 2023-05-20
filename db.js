const Pool = require('pg')
import POSTGRES_PW from'dotenv'


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nativeweather", // need to set up database
    password: POSTGRES_PW,
    port: 5432,
})

module.exports = pool;