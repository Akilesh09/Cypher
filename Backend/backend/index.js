const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const routes = require("./router");

const app = express();
app.use(express.json())

let port = 8080;
app.listen(port, () => console.log('Running server on ' + port));

app.get('/',(req, res, next) => {
    res.send("International MiniMarket")
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", routes)