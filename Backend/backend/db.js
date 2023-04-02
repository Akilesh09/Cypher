const Pool = require('pg').Pool
const DB_PORT = 5433
const DB_NAME = "inventory"
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: DB_NAME,
    password: 'password',
    port: DB_PORT,
})

module.exports = {
    pool
}