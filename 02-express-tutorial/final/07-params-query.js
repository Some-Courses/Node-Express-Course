const express = require('express');
const app = express();
const {products} = require("./data");

app.get('/', (req, res)=>{
  console.log("The user entered Home");
  res.send(`<h1>Home Page</h1><a href="./api/products">Products</a>`);
})


app.get('/api/products',(req, res)=>{
  console.log("The user is requesting products");
  //Most of the times, we don't want to give all the info, so in order to send only what we want to send:
  const newProducts = products.map(product=>{
    const {id, name, image}= product;
    return {id, name, image};
  })
  res.json(newProducts);
})

app.get('/api/products/:productID',(req, res)=>{
  const {productID} = req.params
  const singleProduct = products.find(product=>product.id === Number(productID));
  console.log(`The user is requesting the product ${productID}`);
  if(!singleProduct){
    return res.status(404).json({
      cod: "404",
      message: "Product not found"
      })
  }
  res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{
  console.log(req.params);
  res.send("Hello World")
})

app.get("/api/v1/query", (req, res)=>{
  console.log(`The user is requesting products matching ${req.query.search} & ${req.query.limit}`);
  const {search, limit} = req.query;
  let sortedProducts = [...products];
  if(search){
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search));
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if(sortedProducts.length <1){
    return res.status(200).json({success: false, msg:"No products matched your search"})
  }
  res.status(200).json({success: true, data:sortedProducts});

})

app.listen(5000, ()=>{
   console.log(`Server is listening on port 5000...`);
 })
