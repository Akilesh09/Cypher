const { pool } = require("./db")
const queries = require("./queries");



const inventory = (req, res) => {
    pool.query(queries.selectInventory, (error, results) => {
        res.status(200).json(results.rows)
        
    });
}

const inventoryByName = (req, res) => {
    const name = req.params.name
    pool.query(queries.selectByName, [name], (error, results) => {
        if (error) {
            res.send({ "error": error})
        }
        res.status(200).json(results.rows);
    });
}

const inventoryByOrg = (req, res) => {
    const org = req.params.org
    console.log(org)
    pool.query(queries.selectByOrg, [org], (error, results) => {
        if (error) {
            res.send({ "error": error})
        }
        res.status(200).json(results.rows)
    });
}

const inventoryAddItem = (req, res) => {
    const { name, org, description, price, quantity } = req.body;
    console.log(req.body);
    // check if item exists
    pool.query(queries.checkItemExists, [name], (error, results) => {
        if (results.rows.length) {
            
        }
    });
    pool.query(queries.addItem, [name, org, description, price, quantity], (error, results) => {
        if (error) throw error;
        res.status(201).send("Item created succesfully");
        console.log("Item Created");
    });
}



module.exports = {
    inventory, inventoryByName, inventoryByOrg, inventoryAddItem
};
