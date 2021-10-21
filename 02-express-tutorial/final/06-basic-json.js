//API vs SSR
//In express we will use one of these options.

/* 
[API: An HTTP interface to interact with our data
 -JSON: Javascript object notation as data
 -SEND DATA:
 -RES.JSON(): we use this method to handle the json data.
*/

/* 
[SSR: Server side rendering. We set up templates and send back entire HTML and CSS ourselves.
 -TEMPLATE:
 -SEND TEMPLATE:
 -RES.RENDER():
  */

 const express = require('express');
 const app = express();
 const {products} = require("./data");
 
 app.get('/', (req, res)=>{
   console.log("The user is requesting products");
   res.json(products);
 })
 
 app.get("/:id", (req,res)=>{
   var id = req.originalUrl.slice(1);
   if(id>products.length || id<=0){
     res.json({error: "Not found", message: "Unexisting Id"});
   }else{
     console.log(`The user is requesting the product ${id}`);
     res.json(products.filter(e=>e.id== id));
   }
 })
 
 app.listen(5000, ()=>{
    console.log(`Server is listening on port 5000...`);
  })