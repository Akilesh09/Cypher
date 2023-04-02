const selectInventory = 'SELECT * FROM inventory';
const selectByName = "SELECT * FROM inventory WHERE name like $1 ORDER BY price";
const selectByOrg = 'SELECT * FROM inventory WHERE org like $1 ORDER BY price';
const addItem = "INSERT INTO students (name, org, description, price, quantity) VALUES ($1, $2, $3, $4)"

module.exports = {
    selectInventory,
    selectByName,
    selectByOrg,
    addItem
}