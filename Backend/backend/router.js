const { Router }  = require("express");
const controller = require("./controller");

const router = Router();

router.get("/inventory", controller.inventory);
router.get("/inventory/nameSearch/:name", controller.inventoryByName);
router.get("/inventory/orgSearch/:org", controller.inventoryByOrg);
router.post("/inventory/addItem", controller.inventoryAddItem);
router.put("/inventory/updateItem/:name", controller.inventoryUpdateItem);
router.put("/inventory/updateQty/:name", controller.inventoryUpdateQty);
router.put("/inventory/updatePrice/:name", controller.inventoryUpdatePrice);
router.delete("/inventory/deleteItem/:name", controller.inventoryDeleteItem);

module.exports = router;