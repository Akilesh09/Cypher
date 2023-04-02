const express = require('express');
const ejs = require('ejs');
const Sequelize = require('sequelize')
const routes = require("./router")

const app = express();


let port = 8080;
app.listen(port, () => console.log('Running server on ' + port));

app.get('/',(req, res, next) => {
    res.send("International MiniMarket")
});

app.use("/api", routes)