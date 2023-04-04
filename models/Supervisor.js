const db =require('../config/db')


class SupervisorModel  {
       // Update the quantity of a product
        getProductQuantity(productId) {
            db.query('SELECT * FROM products WHERE product_id = ?', [productId], (err, result) => {
            if (err) throw err;
            return result[0]; 
        })
         }

        updateProductQuantity(req,res){  /// specific product 
            var stock;
            console.log(req.body.request_type)
            console.log(req.body.quantity)
            console.log(req.body.product_id)
            db.query("SELECT stock FROM `products` WHERE product_id = ?",[req.body.product_id]
           ,(error,result)=>{
            if(!error){
              stock = result[0].stock;
               console.log(result[0].stock)
            }else{
            }
            if(req.body.request_type == 'increment'){
              stock +=req.body.quantity;
            }else{
              stock -=req.body.quantity;
            }
            db.query("UPDATE products SET stock  =? where product_id = ?",[stock,req.body.product_id]
            ,(error,result)=>{
             if(!error){
               console.log("successfuly");
             }else{
             }}
         )
      
      

          }
            
        )
        
    }
          
        
        
         
   request(req,res) {
    const date = new Date();
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return new Promise (resolve =>{

        db.query("INSERT INTO requests (supervisor_id, product_id, quantity,status, date, request_type) VALUES (?, ?, ?,?, ?, ?)",
        [req.session.user_id,req.body.product_id ,req.body.quantity,'pending',formattedDate,req.body.request_type],(error,result)=>{
            if(!error){
                resolve(result )
            }else{

            }
        }
        )
        this.updateProductQuantity(req,res);
        // var result= this.getProductQuantity(req.product_id) 
        // console.log(typeof result) //product where i want increase prod_id quantity type
        // this.updateProductQuantity(result,req);

  
        }
        
        )

   }
   
   getProductPerWarehouse(){
    
   }
}


module.exports=SupervisorModel;