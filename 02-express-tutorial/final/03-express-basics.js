const express = require('express');
//We create our server instance. (we could write const app = require("express")();)
const app = express();

app.get('/',(req, res)=>{
  //the cb will be invoked every time the user enters to the '/' path
  console.log('User entered to Home');
  res.status(200).send('Home Page');
})

app.get('/about',(req, res)=>{
  console.log(`User entered to About`);
  res.status(200).send(`About Page`);
})

//All the other requests will be answered with 404
//we can modify it by doing the following:
app.all('*', (req, res)=>{
  console.log(`User tried to enter ${req.url}`);
  res.status(404).send("<h1>Resourse not found</h1>");
})

app.listen(5000, ()=>{
  console.log("server is listening on Port 5000...");
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
