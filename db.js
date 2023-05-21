const pg = require('pg')
const { Pool } = pg;
const POSTGRES_PW = require('dotenv').config


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nativeweather", // need to set up database
    password: POSTGRES_PW,
    port: 5432,
});

module.exports = pool;