const db =require('../config/db')


class SupervisorModel  {
       // Update the quantity of a product
        getProductQuantity(productId) {
            const sql1 = 'SELECT quantity FROM requests WHERE product_id = ?';
            connection.query(sql1, [productId], (err, result) => {
            if (err) throw err;
            return result[0]; 
        })
         }

        updateProductQuantity(data){
            let newQuantity;
            if (data.request_type === 'increase') {
              newQuantity = currentQuantity + data.quantity;
            } else if (type === 'decrease') {
              newQuantity = currentQuantity - quantity;
            } else {
              throw new Error('Invalid request type');
            }
        
            const sql2 = 'UPDATE products SET quantity = ? WHERE id = ?';
            connection.query(sql2, [newQuantity, productId], (err, result) => {
              if (err) throw err;
              console.log('Product quantity updated');
            });
          }
        
        
         
   request(req,res) {
    const now = new Date();
    return new Promise (resolve =>{
        db.query("INSERT INTO requests (supervisor_id, product_id, quantity, date, request_type) VALUES (?, ?, ?, ?, ?)",
        [req.session.supervisor_id,req.product_id ,req.body.quantity,now.getDate(),req.body.request_type],(error,result)=>{
            if(!error){
                resolve(result )
            }
        }
        )
        
        var result= getProductQuantity(req.product_id)
        updateProductQuantity(result);

  
        }
        
        )

   }
   
   getProductPerWarehouse(){
    
   }
}


module.exports=SupervisorModel;