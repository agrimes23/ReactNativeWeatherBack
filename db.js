const Pool = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "", // need to set up database
    password: "", // need to download env package
    port: 5432,
})