const supervisorModel=require('../models/Supervisor')

class SupervisorController {
    static async request(req,res){
        var supervisor = new supervisorModel();
        x = supervisor.request(req,res);
        if(x){
            res.send({message:"request success"});
        }else{
            res.send({message:"request faild"});
        }
    }
    static async getProductPerWarehouse(req,res){

    }


}

module.exports=SupervisorController;