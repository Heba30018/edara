const router=require ('express').Router();
const adminAuth = require ('../middlewares/admin.js');
const supervisorControler=require('../controllers/SupervisorControler')
const warehouseController = require('../controllers/WarehouseController')

router.get('/allSupervisors',adminAuth,supervisorControler.getAllSupervisors)
router.post('/addSupervisor',adminAuth,supervisorControler.addNewSupervisor)
router.post("/deleteSupervisor/:deleted_id",adminAuth,supervisorControler.deleteSupervisor)
router.put("/updateSupervisor/:id",adminAuth,supervisorControler.updateSupervisor)
  

router.get('/allWarehouse',adminAuth,warehouseController.getAllWaherhouses)
router.post("/deleteWarehouse/:Warehouse_id",adminAuth,warehouseController.deleteWarehouse)
router.post("/addWarehouse",adminAuth,warehouseController.addNewWaherhouse)
router.put("/updateWarehouse/:updated_id",adminAuth,warehouseController.updateWarehouse)





module.exports=router;
