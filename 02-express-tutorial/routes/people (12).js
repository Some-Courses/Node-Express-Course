const express = require('express');
const router = express.Router();

let {people }= require('../data');

//As we have settled up the middleware in the app.js file, we don't need to repeat the path in this file, meaning that here the path "/" is redirecting to "/api/people/" and "/:id" to "/api/people/:id"

router.get("/", (req, res)=>{
  res.status(200).json({success: true, data: people})
})

router.post('/',(req, res)=>{
  const {name} = req.body;
  console.log(name);
  if(!name){
    return res.status(400).json({success: false, msg:"Please provide name value"})
  }
  res.status(201).json({success: true, person: name})
})

router.post("/postman",(req, res)=>{
  const {name}= req.body;
  if(!name){
    return res.status(400).json({success: false, msg:"Please provide name value"})
  }
  let index = people.length;
  res.status(201).json(({success:true, data:[...people, {id:++index, name }]}))
})


//put method edits data. If we have a list, by convention we route to the item that we want to modify
router.put('/:id',(req, res)=>{
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find(person => person.id=== Number(id));
  if(!person){
    return res
      .status(404)
      .json({success:false, msg:`No person with id ${id}`});
  }
   let newPeople = people.map(person=>{
     if(person.id ===Number(id)){
       person.name = name;
     }
     return person;
   })
  res.status(200).json({success: true, data: newPeople})
})
 
router.delete("/:id",(req, res)=>{
  const {id} = req.params;
  const person = people.find(person => person.id=== Number(id));
  if(!person){
    return res
      .status(404)
      .json({success:false, msg:`No person with id ${id}`});
  }
  const newPeople = people.filter(person=> person.id!==Number(id));
  res.status(200).json({success: true, data: newPeople});
})

module.exports = router;