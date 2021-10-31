const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authMidd =(req, res, next)=>{
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer")){ 
    throw new CustomAPIError("No token provided", 401);
  }
  //I retrieve the token's code.
  const token = authHeader.split(" ")[1];
  
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {id, username} = decoded;
    req.user = {id, username};
    next();
  }catch(err){
    throw new CustomAPIError("Unauthorized token", 401);
  }

  
}

module.exports = authMidd;