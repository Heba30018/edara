const db =require('../config/db')





class AdminModel  {
    constructor(email='',password='',phone='',status='',type=''){
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.status = status;
        this.type = type;
    }

    getSupervisors(){

        return new Promise (resolve =>{
        db.query("select * FROM `users` WHERE id != 1",[],(error,result)=>{
            if(!error){
                resolve(result )
            }
        })

        })
    }

    addNewSupervisor() {
        return new Promise(resolve =>{
            
        db.query("select * from users where email = ?",[this.email],async(error,result)=>{
            if(error){
                console.log(error);
            }
            if(result.length >0){
                console.log('That email is already in use')
                resolve(false);
                return;
            }

            db.query("INSERT INTO users (email, password, phone, status, type) VALUES (?, ?, ?, ?, ?)",
            [this.email, this.password, this.phone, this.status, this.type],(error,result)=>{
            if(!error){
                resolve(true)
            }
            else{
                console.log(error)
                resolve(false)
        
            }
        })
        });
    })
    }

    updateSupervisor(id,data){
        return new Promise(resolve =>{
            
            db.query("UPDATE users SET? WHERE id = ?"
            ,[{email:data.email,password:data.password,phone:data.phone,status:data.status,type:data.type},id],(error,result)=>{
            if(!error){
                resolve(true)
            }
            else{
                resolve(false)
            }
    })

    }) 
    
    
    }

    deleteSupervisor(deleted_id){
        console.log(deleted_id)
        return new Promise(resolve =>{
            db.query("delete from users where ?",{id:deleted_id},(error,result)=>{
            if(!error){
                result.message = 'success'
                resolve(true)
            }
            else{
                resolve(false)
            }
    })

    }) 
    
    }
    getAllRequest(){
        return new Promise (resolve =>{
            db.query("select * from requests",[],(error,result)=>{
                if(!error){
                    resolve(result )
                }
            })
    
            })
    }
    getPendingRequest(){
        return new Promise (resolve =>{
            db.query("select * from requests where status ='pending' ",[],(error,result)=>{
                if(!error){
                    resolve(result )
                }
            })
    
            })
    }
}


module.exports=AdminModel;