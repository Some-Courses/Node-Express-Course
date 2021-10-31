require('dotenv');
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');



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
  //the verification of the JWT token is in charge of the auth middleware, if it is valid, then this function is executed
  // and recieves the "req.user" object with the corresponding propertyes.
  const {id, username} = req.user
  const luckyNumber = Math.floor(Math.random()*100);
  res.status(200).json({
    msg: `Hello ${username}, Id: ${id}`, 
    secret:`Here is your authorized data, your lucky number is ${luckyNumber}`
  });

};

module.exports = {
  login,
  dashboard,
}