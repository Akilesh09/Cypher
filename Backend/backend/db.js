const Pool = require('pg').Pool
const DB_PORT = 5433
const DB_NAME = "Inventory"
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