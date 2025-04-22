const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res , next ) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        console.log(token);
        if(!token) return res.status(401).json({message: 'Authentication required'});
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch(error){
        res.status(401).json({message: 'Invalid token'});
    }
}

const roleCheck = (roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.userRole)){
            return res.status(403).json({message: 'unauthorized access'});
        }
        next();
    }   
}

module.exports = {authMiddleware, roleCheck};