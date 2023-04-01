const mysql      = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: '../.env'});

const connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST ,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE,
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