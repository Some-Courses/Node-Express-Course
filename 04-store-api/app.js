//Env
require('dotenv').config();
//error handling
require('express-async-errors');
//Server
const express = require('express');
const app = express();
//DB
const connectDB = require('./db/connect');
//Routes
const products = require('./routes/products');
//Middlewares
const notFoundMid = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');



app.use(express.json());
//routes
app.use("/api/v1/products", products);

app.get('/',(req, res)=>{
  res.send(`<h1>Store API</h1><a href="/api/products">products route</a>`);
})



//middlewares
app.use(notFoundMid);
app.use(errorHandler);

const port = process.env.PORT || 3000



const start = async()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    app.listen(port, ()=>{
      console.log(`Server listening on port ${port}`);
    })
  }catch(err){
    console.log(err);
  }
}
start();
//4:02:21s