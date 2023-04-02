const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'inventory',
    password: 'password',
    port: 5433,
})

module.exports = {
    pool
}