const moongoose = require('mongoose');




const connectDB=(url)=>{
 return moongoose
 .connect(url, 
   {
   useNewUrlParser:true, 
   useCreateIndex:true, 
   useFindAndModify:false, 
   useUnifiedTopology:true
   }
 )
}

module.exports = connectDB;


  


/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tomaco:<password>@nodeexpressproyects.pj2lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/