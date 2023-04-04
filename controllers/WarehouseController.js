const warehouseModel=require('../models/Warehouse')

class WarehouseController {

static async getAllWaherhouses(req,res){
   var warehouse = new warehouseModel();
   var results  = await warehouse.getwarehouses();
   if(results){
      res.send(results);
   }
   else {
      res.send("no result")
   }
   }

 static async addNewWaherhouse(req,res){
   console.log(req.body.supervisor_id)
   var Warehouse = new warehouseModel(req.body.name,req.body.location,req.body.status,req.body.supervisor_id);
   var x =await Warehouse.addWarehouse()
   console.log(x);
   if(x){
      res.send("add successful")
   }
   else{
      res.send("add failed")
   }
 }
 
 static async updateWarehouse(req,res){
   const {updated_id} = req.params;
  const data = req.body;
   var Warehouse = new warehouseModel();
   var x = Warehouse.updateWarehouse(updated_id, data);
   if (x){

      res.send("Update done")
   }
   else {
      res.send("can't Update")
   }
    


 }

static async deleteWarehouse(req,res){
   const {Warehouse_id} = req.params;
   console.log(Warehouse_id)
   var warehouse = new warehouseModel();
   var x = warehouse.deleteWarehouse(Warehouse_id);

   if(x){
      res.send("delete done")
   }
   else{
      res.send("delete failed")
   }
}

}
module.exports=WarehouseController;