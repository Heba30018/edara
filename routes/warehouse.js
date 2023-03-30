const router = require("express").Router();
const adminAuth = require('../middlewares/admin');

const warehouses = require('../controllers/warehouseController');

//GET ALL warehouses
router.get("/", async (req, res) => {
    try {
      res.json(await warehouses.getAllWarehouses());
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  
module.exports = router;