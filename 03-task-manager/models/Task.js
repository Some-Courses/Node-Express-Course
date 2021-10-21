const mongoose = require('mongoose');


//Only the propertyes that we declare here will be the ones passed to the database, the rest will be ignored in for example the post request. 
//Althoug it is possible to post a new document(or data item)with less properties. TO AVOID THIS WE'LL HAVE TO VALIDATE THE SCHEMA
const TaskSchema = new mongoose.Schema({
  name:{
    //if we convert the property from "name: String" to name:{}, that object's keys will be the validation parameters
    type:String,
    required:[true, "Must provide a Task name"],
    trim:true,
    maxlength:[20, "Name can not be more than 20 caracters"],
    minlength:[5, "Tasks must have at least 5 characters"]
  },
  completed:{
    type:Boolean,
    default: false
  }  
})

module.exports = mongoose.model("Task", TaskSchema);