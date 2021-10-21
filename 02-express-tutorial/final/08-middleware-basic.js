//Express middleware are functions that execute during the request to the server. Each midFunction has acces to req and res objects.
//|req=> middlewares(req, res) => res

const express = require('express');
const app = express();
const logger = require('./logger 08');

/* 
//*it is a good practice to have all these middleware functions in a separate file.
const logger = (req, res, next)=>{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log("Method:", method,"Url:", url,"Time:", time);
  next();
}
 */
//With app.use(middleware) we can set this middleware applied to all the routes below the declaration.
app.use(logger);
//*app.use('/api', middlewareFunc)
//this syntax executes the middleware in all the routes that has the '/api' in the path. so it will be executed in '/api/something' as well as in '/api/somethingElse'

app.get('/',(req, res)=>{
  res.send(`<h1>Home Page</h1>`);

})

app.get('/about', (req, res)=>{
  res.send(`<h1>About Page</h1>`);
})

app.get('/api/products', (req, res)=>{
  res.send(`<h1>API Products</h1>`);
})

app.get('/api/items', (req, res)=>{
  res.send(`<h1>Api Items/h1>`);
})

app.listen(5000,()=>{
  console.log("Server listening on port 5000...");
})