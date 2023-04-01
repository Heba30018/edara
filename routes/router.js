const router=require ('express').Router();
const adminAuth = require ('../middlewares/admin.js');
const supervisorControler=require('../controllers/SupervisorControler')


router.get('/allSupervisors',adminAuth,supervisorControler.getAllSupervisors)
router.post('/addSupervisor',adminAuth,supervisorControler.addNewSupervisor)
router.post("/deleteSupervisor/:deleted_id",adminAuth,supervisorControler.deleteSupervisor)
router.put("/updateSupervisor/:id",adminAuth,supervisorControler.updateSupervisor)
  



module.exports=router;
