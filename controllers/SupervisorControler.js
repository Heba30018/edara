const userModel=require('../models/User')

class UserController {

static async getAllSupervisors(req,res){
   var user = new userModel();
   var results  = await user.getusers();
   if(results){
      res.send(results);
   }
   else {
      res.send("no result")
   }
      }

 static async addNewSupervisor(req,res){
   console.log(req.body)
   var user = new userModel(req.body.email,req.body.password,req.body.phone,req.body.status,req.body.type);
   var x =await user.addNewSupervisor()
   console.log(x);
if(x){
    res.send("add successful")
}
else{
    res.send("add failed")
}
   
      
   
 }

 
 static async updateSupervisor(req,res){
   const {id} = req.params;
  const data = req.body;
   var user = new userModel();
   var x = user.updateSupervisor(id, data);
   if (x){

      res.send("Update done")
   }
   else {
      res.send("can't Update")
   }
    


 }

static async deleteSupervisor(req,res){
   const {deleted_id} = req.params;
   console.log(deleted_id)
   var user = new userModel();
   var x = user.deleteSupervisor(deleted_id);

   if(x){
      res.send("delete done")
   }
   else{
      res.send("delete failed")
   }
}






}
module.exports=UserController;