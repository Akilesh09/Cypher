const { Router }  = require("express");
const controller = require("./controller");

const router = Router();

router.get("/inventory", controller.inventory)
router.get("/inventory/nameSearch/:name", controller.inventoryByName)
router.get("/inventory/orgSearch/:org", controller.inventoryByOrg)
router.post("/inventory/addItem", controller.inventoryAddItem)


module.exports = router