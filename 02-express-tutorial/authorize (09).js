const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user === 'john'){
      console.log(`Authorized: ${user}`);
      req.user= {name: "john", id:3};
      next();
    }else{
      console.log(`Unauthorized ${user}`);
      res.status(404).send("<h1>Unauthorized</h1>");
    }
}

module.exports= authorize;