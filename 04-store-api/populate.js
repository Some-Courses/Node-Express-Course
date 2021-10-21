//Here we will automate the process of uploading the objects to our database from products.json

require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async ()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany() //we have not products at first, but if we restart the proyect; is better to have this line here;
    await Product.create(jsonProducts);
    console.log("success");
    process.exit(0); //terminates the process without errors
  }catch(err){
    console.log(err);
    process.exit(1); //terminates the process with error code
  }
}

start();