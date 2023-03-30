const router = require("express").Router();
const adminAuth = require('../middlewares/admin');

const product = require('../controllers/productsController');

//GET ALL PRODUCT
router.get("/", async (req, res) => {
    try {
      res.json(await product.getAllProducts());
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;