require('dotenv');
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

//todo: check username, pwd in post(login) request
//* if exists create a new JWT
//* send back to front-end

//todo: setup auth in order to allow access to dashboard only when we have JWT authenticated requests.
const login = async(req, res)=>{
  const {username, password}= req.body;

  //|in order to validate data: 
  //--mongo require Validation 
  //--joi packet
  //--check manually here in the controler

  if(!username || !password){
    throw new CustomAPIError("Please set a valid Username and Password ",400)
  }
  //id just for demo purposes
  const id = new Date().getDate();

  //|we create the new token (payload, JWTsecret, )
  const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn:"30d"});
  res.status(200).json({msg:`User created` , token});
};

const dashboard  =async(req, res)=>{
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith("Bearer")) throw new CustomAPIError("No token provided", 401)
  //"Bearer token"
  const token = authHeader.split(" ")[1];
  //[Token Verification
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token: ",decoded);
  
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: `Hello ${decoded.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
  }catch(err){
    throw new CustomAPIError("Unauthorized token", 401);
  }


};

module.exports = {
  login,
  dashboard,
}