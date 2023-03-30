const router = require("express").Router();
const adminAuth = require('../middlewares/admin');

const supervisors = require('../controllers/supervisorController');

//GET ALL supervisors
router.get("/", async (req, res) => {
    try {
      res.json(await supervisors.getAllSupervisors());
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  
module.exports = router;