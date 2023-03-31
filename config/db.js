const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'inventory',
  port: "3306", //Default 
});
 
connection.connect((err) =>{
    if (err) {
      console.error('error connecting: ');
      return;
    }
   
    console.log("Connected to MYSQL");
  });


module.exports = connection;