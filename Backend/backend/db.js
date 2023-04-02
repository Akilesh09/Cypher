const Pool = require('pg').Pool
const DB_PORT = 1693
const DB_NAME = "International Mini Market"
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: DB_NAME,
    password: 'password',
    port: DB_PORT,
})

module.exports = {
    pool
}