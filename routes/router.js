const router=require ('express').Router();
const adminAuth = require ('../middlewares/admin.js');


const path = require ('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination : '../views/images/',
    filename : (req,file,cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage:storage 
})



const adminControler=require('../controllers/AdminControler.js')
const warehouseController = require('../controllers/WarehouseController')
const productController= require('../controllers/ProductController')
const authController = require('../controllers/AuthController')
const supervisorController = require('../controllers/SupervisorController')



router.post('/login',authController.login);
router.get('/logout', authController.logout)
                     //ADMIN
router.get('/allSupervisors',adminAuth,adminControler.getAllSupervisors)
router.post('/addSupervisor',adminAuth,adminControler.addNewSupervisor)
router.post("/deleteSupervisor/:deleted_id",adminAuth,adminControler.deleteSupervisor)
router.put("/updateSupervisor/:id",adminAuth,adminControler.updateSupervisor)
router.get("/allRequest",adminAuth,adminControler.getAllRequest)

router.put('/updateRequestAccept',adminAuth,adminControler.RequestAccepted)
router.put('/updateRequestReject',adminAuth,adminControler.RequestRejected)


router.get('/allWarehouse',adminAuth,warehouseController.getAllWaherhouses)
router.post("/deleteWarehouse/:Warehouse_id",adminAuth,warehouseController.deleteWarehouse)
router.post("/addWarehouse",adminAuth,warehouseController.addNewWaherhouse)
router.put("/updateWarehouse/:updated_id",adminAuth,warehouseController.updateWarehouse)

router.post("/addProduct",upload.single('photo'),productController.addNewProduct)
router.get("/getProducts",adminAuth,productController.getProducts)
router.put("/updateProduct/:product_id",upload.single('photo'),productController.updateProduct)
router.post("/deleteProduct/:delete_product_id",adminAuth,productController.deleteProduct)



                    ///SUPERVISOR
router.post("/request",supervisorController.request)
router.get("/Products",supervisorController.getProductPerWarehouse)

module.exports=router;
