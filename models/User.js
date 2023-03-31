const db =require('../config/db')
class UserModel {



static async getusers(){

return new Promise (resolve =>{


db.query("select * from users",[],(error,result)=>{
    if(!error){
        resolve(result )
    }
})

})
}

static async addUser(email,password,phone,status,type,user_id){
   return new Promise(resolve =>{
   db.query("insert  into users (email,password,phone,status,type,user_id) values (?,?,?,?,?,?)",[email,password,phone,status,type,user_id],(error,result)=>{
    if(!error){
        resolve(true)
    }
    else{
        console.log(error)
         resolve(false)

    }
})

})
}




static async editeUser(id,email,phone,status,type){
   return new Promise(resolve =>{
   db.query("UPDATE `users` SET `email`=?,`phone`=?,`status`=?,`type`=?   WHERE user_id = ?",[email,phone,status,type,id],(error,result)=>{
    if(!error){
        resolve(true)
    }
    else{
        console.log(error)
         resolve(false)

    }
})

})
}


}
module.exports=UserModel;