const express = require('express');
const ejs = require('ejs');
const Sequelize = require('sequelize')

const app = express();
const seqeulize = new Sequelize('sqlite:inventory.csv')
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'inventory',
  password: 'password',
  port: 5433,
})

let port = 8080;
app.listen(port, () => console.log('Running server on ' + port));

app.get('/',(req, res, next) => {
    res.send("International MiniMarket")
});

app.get('/inventory',(req, res, next)  => {
    pool.query('SELECT * FROM inventory', (error, results) => {
      res.status(200).json(results.rows)
    })
  });
