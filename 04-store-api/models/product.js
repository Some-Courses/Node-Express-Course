const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    //if we convert the property from "name: String" to name:{}, that object's keys will be the validation parameters
    type:String,
    required:[true, "Must provide a Product name"],
    trim:true,
    maxlength:[20, "Name can not be more than 20 caracters"],
    minlength:[4, "Product name must have at least 4 characters"]
  },
  price:{
    type:Number,
    required:[true, "Must provide a Product price"],
  },
  featured:{
    type:Boolean,
    default: false,
  },
  rating:{
    type:Number,
    default:4.5,
  },
  createdAt:{
    type:Date,
    default: Date.now(),
  },
  company:{
    type: String,
    //enum:['ikea', 'liddy', "caressa", 'marcos'], //enum let us minimize the possible options for this field
    enum:{
      values:['ikea', 'liddy', "caressa", 'marcos'],
      message: 'we do not sell any product from {VALUE}',
    }, 
  }
})

module.exports = mongoose.model("Product", productSchema);