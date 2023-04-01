const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rout = require("./routes/router")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


// parse application/json 
app.use(bodyParser.json());
app.use(rout)


app.listen(3000, "localhost", () => {
  console.log("SERVER IS RUNNING");
});
