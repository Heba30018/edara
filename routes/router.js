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
router.get('/supervisor',adminAuth,adminControler.getAllSupervisors)
router.post('/supervisor',adminAuth,adminControler.addNewSupervisor)
router.delete("/supervisor/:deleted_id",adminAuth,adminControler.deleteSupervisor)
router.put("/supervisor/:id",adminAuth,adminControler.updateSupervisor)
router.get("/request",adminAuth,adminControler.getAllRequest)

router.put('/updateRequestAccept',adminAuth,adminControler.RequestAccepted)
router.put('/updateRequestReject',adminAuth,adminControler.RequestRejected)


router.get('/warehouse',adminAuth,warehouseController.getAllWaherhouses)
router.delete("/warehouse/:Warehouse_id",adminAuth,warehouseController.deleteWarehouse)
router.post("/warehouse",adminAuth,warehouseController.addNewWaherhouse)
router.put("/warehouse/:updated_id",adminAuth,warehouseController.updateWarehouse)
router.post("/warehouse/assignProductToWarehouse",adminAuth,warehouseController.assignProduct_ToWarehouse)


router.post("/product",productController.addNewProduct)
router.get("/product",adminAuth,productController.getProducts)
router.put("/product/:product_id",adminAuth,productController.updateProduct)
router.delete("/product/:delete_product_id",adminAuth,productController.deleteProduct)



                    ///SUPERVISOR
router.post("/supervisor/requests",supervisorController.request)
router.get("/supervisor/products/:warehouse_id",supervisorController.getProductPerWarehouse)
router.get("/supervisor/getRequests/:user_id",supervisorController.getRequests)

module.exports=router;
