
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

function verifyToken(req,res,next){
    if(req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ){
        jwt.verify(
            req.headers.authorization.split(" ")[1], 'secret', async function(err, decoded) {
            console.log(decoded);
            let user = await UserModel.findById(decoded.id);
            req.user = user;
            next();
        })
    }
}
module.exports = verifyToken