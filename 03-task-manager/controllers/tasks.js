//requiring the model to work with
const Task = require('../models/Task');

const asyncWrapper=require('../middleware/async-wrapper');
const {createCustomError} =require('../errors/custom-error');


const getAllTasks =asyncWrapper( async (req,res)=>{
  const taskList = await Task.find({});
  res.status(200).json({status: 201 , data: taskList})
});

const createTask = asyncWrapper(async (req,res)=>{
  const task = await Task.create(req.body)
  res.status(200).json({task});
});


const getTask =asyncWrapper( async (req,res,next)=>{
  const {id:taskId} = req.params;
  const task = await Task.findOne({ _id:taskId});
  if(!task){
    //If i don't set the return, if I don't have the task, then It'll pass to the next http method and that's obviously not what we want
    let error = createCustomError(`No task with ID: ${taskId}`, 404);
    return next(error);
  }
  res.status(200).json({status:201, task})
});

const deleteTask = asyncWrapper(async (req,res,next)=>{

  const {id:taskId} = req.params;
  //let task = await Task.deleteOne({_id: taskId});
  //If I use deleteOne() I always get the 201 response, so I need to validate the 404 with the property task.deletedCount !== 0 (0 if nothing deleted)
  let task = await Task.findOneAndDelete({_id: taskId});
  if(!task){
    return next(createCustomError(`No task with ID: ${taskId}`, 404));
  }
  //res.status(201).json({status:201, task})
  res.status(200).json({task:null, status: 'success'});
});

//put method is supposed to remove the old value and replace it with the new one. On the other hand, patch method is supposed to update the old value 
const updateTask =asyncWrapper(async (req,res, next)=>{
  const {id: taskId} = req.params;
  //let task = await Task.updateOne(); is another option.
  let task = await Task.findOneAndUpdate({_id: taskId }, req.body, {
    new:true, //we recieve the updated task /default:false
    runValidators:true, //the new data is validated /def:false
    //overwrite:true, if we were using PUT method
  });
  if(!task){
    return next(createCustomError(`No task with ID: ${taskId}`, 404));
    }
  res.status(200).json({task});
});


module.exports={
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}

//Just to have an example of how the functions were coded before the async wrapper
// const getTask = async (req,res)=>{
//   try{
//     const {id:taskID} = req.params;
//     const task = await Task.findOne({ _id:taskID });
//     if(!task){
//       //If i don't set the return, if I don't have the task, then It'll pass to the next http method and that's obviously not what we want
//       return res.status(404).json({msg:`No task with id: ${taskID}`});
//     }
//     res.status(200).json({status:201, task})
//   }catch(err){
//     res.status(500).json({msg:err})
//  }
// }
