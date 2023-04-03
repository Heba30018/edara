const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rout = require("./routes/router")
const session = require('express-session');

app.use(session({
  secret : 'edarawebapplication',
  resave : true,
  saveUninitialized : true,
  cookie: { 
    maxAge: 20 * 60 * 1000 // set session to expire after 20 minutes of inactivity
  }
}))
console.log(Object.isExtensible(session))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


// parse application/json 
app.use(bodyParser.json());
app.use(rout)



app.listen(3000, "localhost", () => {
  console.log("SERVER IS RUNNING");
});
