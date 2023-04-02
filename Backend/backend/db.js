const Pool = require('pg').Pool
const dbPort = 5433
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'inventory',
    password: 'password',
    port: dbPort,
})

module.exports = {
    pool
}