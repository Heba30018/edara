const userModel=require('../models/User')

class UserController {

static async getAllUsers(req,res){

 var results  = await userModel.getusers();
 if(results){
    res.send(results);
 }
 else {
    res.send("no result")
 }
    }

 static async addNewUser(req,res){
    var x = await userModel.addUser(req.body.email,req.body.password,req.body.phone,req.body.status,req.body.type,req.body.user_id)
if(x==true){
    res.send("add successful")
}
else{
    res.send("add failed")
}

 }



 static async deleteUser(req,res){
   const id =req.body.user_id
   if (id){

var result = await userModel.deleteUser(id)
if(result){
    res.send("delete done")
}
else{
    res.send("delete failed")
}

   }
   else {
      res.send("can't access id")

   }
    


 }




 
 static async edite(req,res){
   const id =req.body.user_id
   const nEmail=req.body.email
   const nPhone=req.body.phone
   const nStatus=req.body.status
   const nType=req.body.type
   if (id){

var result = await userModel.editeUser(id,nEmail,nPhone,nStatus,nType)
if(result){
    res.send("edite done")
}
else{
    res.send("edite failed")
}

   }
   else {
      res.send("can't access id")

   }
    


 }


}
module.exports=UserController;