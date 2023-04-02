const { pool } = require("./db")
const queries = require("./queries");
const bcrypt = require("bcrypt") 


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
            console.log(results.rows);
            pool.query(queries.addToQty, [quantity, name], (error, results) => {
                res.send("Quantity Updated");
            })
        } else {
            pool.query(
                queries.addItem, 
                [name, org, description, price, quantity], 
                (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Item created succesfully");
                    console.log("Item Created");
                }
            );
        }
    });

}

const inventoryDeleteItem = (req, res) => { 
    const name = req.params.name;
    pool.query(queries.selectByName, [name], (error, results) => {
        if (!results.rows.length) {
            res.send("Item does not exist");
        }
        else {   
            pool.query(queries.removeItem, [name], (error, results) => {
                if (error) throw error;
                res.status(200).send("Item removed succesfully");
            });
        }
    });
}

const inventoryUpdateItem = (req,res) => {
    const name = req.params.name;
    const { description } = req.body;
    console.log(req.body);
    pool.query(queries.selectByName, [name], (error, results) => {
        if (!results.rows.length) {
            res.send("Item does not exist in the table");
        }
        else {
            pool.query(queries.updateItem, [description, name], (error, results) => {
                if (error) throw error;
                res.status(200).send("Item updated successfully");
            });
        }
    });

}

const inventoryUpdateQty = (req,res) => {
    const name = req.params.name;
    const { quantity } = req.body;
    console.log(req.body);
    pool.query(queries.selectByName, [name], (error, results) => {
        if (!results.rows.length) {
            res.send("Item does not exist in the table");
        }
        else {
            pool.query(queries.updateQty, [description, name], (error,results) => {
                res.status(200).send("Qty updated successfully")
            });
        }
    });
}

const inventoryUpdatePrice = (req, res) => {
  const name = req.params.name;
  const { price } = req.body;
  console.log(req.body);
  pool.query(queries.selectByName, [name], (error, results) => {
    if (!results.rows.length) {
      res.send("Item does not exist in the table");
    } else {
      pool.query(queries.updatePrice, [price, name], (error, results) => {
        res.status(200).send("Price updated successfully");
      });
    }
  });
};

const userLogin = (req, res) => {
    const potentialLogin = pool.query("SELECT org, password FROM users u WHERE u.org=$1",
    [req.body.org]);
    if (potentialLogin.rowCount > 0) {
        const isSamePass = bcrypt.compare(req.body.password, potentialLogin.rows[0].password);
        if (isSamePass) {
            res.json({loggedIn: true})
        } else {
            res.json({ loggedIn: false, status: "Wrong username or password" });
        }
    } else {
        res.json({loggedIn: false, status:"Wrong username or password"})
    }
}

const userSignUp = (req, res) => {

    pool.query("SELECT org FROM users WHERE org=$1",
    [req.body.org], (error, results) => {
        if (results.rowCount == 0) {
            //register
            bcrypt.hash(req.body.password, 10).then(hash => {
                pool.query(
                    "INSERT INTO users(org, password) values($1, $2)",
                    [req.body.org, hashedPass],
                    (error, results) => {
                        res.json({ loggedIn: true, username: req.body.org });
                    }
                );
            }).catch(err => {
                console.log(err);
            });
        } else {
            res.json({ logged_in: "false", status: "Username taken" });
        }
    });
    
    

}


module.exports = {
  inventory,
  inventoryByName,
  inventoryByOrg,
  inventoryAddItem,
  inventoryDeleteItem,
  inventoryUpdateItem,
  inventoryUpdateQty,
  inventoryUpdatePrice,
  userLogin,
  userSignUp
};
