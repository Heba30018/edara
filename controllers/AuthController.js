const session = require('express-session');
const db =require('../config/db')

class AuthController {

    static async login(req, res,next){
        var email = req.body.email;
        var password = req.body.password;

        if(email && password){
            db.query("select * from users where email = ? and password =?",[email,password],function(err,data){
                if(data.length > 0){
                    req.session.user_id = data[0].id;
                    if(data[0].type == 'admin'){
                        res.send({ message: "login successful Admin", session: req.session });
                    }
                    else{
                        res.send({ message: "login successful Supervisor", session: req.session });
                    }
                    
                }else{
                    res.send({ message: "Incorrect email or password" });
                }
            })

        }else{
            res.send({message:"please enter your email and password"})
            res.end();
        }
        
    }

    static async logout(req,res,next){
        if (req.session) {
            req.session.destroy(function(err) {
                if (err) {
                    next(err);
                } else {
                    res.send("logout succesfully");
                }
            });
        } else {
            res.send("already logged out");
        }
    }
}

module.exports=AuthController;