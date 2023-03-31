const express =require('express');
const router=require ('express').Router();
const userControler=require('../controllers/UserControler')
router.get('/',(req,res)=>{
    res.send("Hello from router")
})
router.get('/allUser',(userControler.getAllUsers))
router.post('/addUser',userControler.addNewUser)
router.post("/deleteUser",userControler.deleteUser)
router.post("/editeUser",userControler.edite)
  



module.exports=router;
