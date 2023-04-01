const adminAuth = (req,res,next) =>{
    const {type} = req.headers;
    if(type == 'admin') next();
    else{
        res.statusCode = 403;
        res.send({
            message : "you are not authorized to access this route",
        })
    }
}

module.exports = adminAuth;