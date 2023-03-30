const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const products = require('./routes/product');
const warehouse = require('./routes/warehouse');
const supervisors = require('./routes/user');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));


// parse application/json 
app.use(bodyParser.json());

app.use("/products",  products);
app.use("/warehouses",  warehouse);
app.use("/supervisors",  supervisors);


app.listen(3000, "localhost", () => {
  console.log("SERVER IS RUNNING");
});
