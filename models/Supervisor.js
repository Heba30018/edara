const db =require('../config/db')


class SupervisorModel  {
       
   request(req,res) {
    const date = new Date();
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-GB', options);
    console.log(typeof parseInt(req.body.product_id))
    return new Promise (resolve =>{

        db.query("INSERT INTO requests (supervisor_id , product_id , quantity,status, date, request_type) VALUES (?, ?, ?,?, ?, ?)",
        [req.session.user_id,parseInt(req.body.product_id),parseInt(req.body.quantity),'pending',formattedDate,req.body.request_type],(error,result)=>{
            if(!error){
                resolve(result )
            }else{

            }
        }
        )
        // this.updateProductQuantity(req,res);
        // var result= this.getProductQuantity(req.product_id) 
        // console.log(typeof result) //product where i want increase prod_id quantity type
        // this.updateProductQuantity(result,req);

  
        }
        
        )

   }
   

    getProductPerWarehouse(req, res) {
        return new Promise(resolve => {
            console.log("hsik")
            db.query('SELECT products.product_id, name, description, photo, warehouse_stock FROM products JOIN product_warehouse WHERE product_warehouse.warehouse_id = ? AND product_warehouse.product_id = products.product_id', [req.session.warehouse_id], (error, result) => {
                if (!error) {
                    // console.log(result)
                    resolve(result)
                } else {
                    resolve(false)
                }
            })
        })
    }
}


module.exports=SupervisorModel;