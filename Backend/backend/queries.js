const selectInventory = 'SELECT * FROM inventory';
const selectByName = "SELECT * FROM inventory WHERE name like $1 ORDER BY price";
const selectByOrg = 'SELECT * FROM inventory WHERE org like $1 ORDER BY price';
const addItem = "INSERT INTO inventory (name, org, description, price, quantity) VALUES ($1, $2, $3, $4, $5)";
const removeItem = "DELETE FROM inventory WHERE name=$1";
const updateItem = "UPDATE inventory SET description=$1 WHERE name=$2";
const updateQty = "UPDATE inventory SET quantity=$1 WHERE name=$2";
const updatePrice = "UPDATE inventory SET price=$1 WHERE name=$2";
const checkItemExists = "SELECT i FROM inventory i WHERE i.name = $1";
const addToQty = "UPDATE inventory SET quantity = quantity+$1 WHERE name=$2"


module.exports = {
    selectInventory,
    selectByName,
    selectByOrg,
    addItem,
    removeItem,
    updateItem,
    updateQty,
    updatePrice,
    checkItemExists,
    addToQty
}