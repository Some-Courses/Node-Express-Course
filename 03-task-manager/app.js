const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
//Database and environment stuff
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require("./middleware/error-handler");
//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound);
app.use(errorHandler);



//App Methods:
//app.get('/api/v1/tasks')        - Get all the tasks
//app.post('/api/v1/tasks')       - Create a new task 
//app.get('/api/v1/tasks/:id')    - Get single task
//app.patch('/api/v1/tasks:id')   - Update task
//app.delete('/api/v1/tasks:id')  - delete task

//we use "PORT=number node app.js" and the app will run un that port. If not, the app will run om port 3000.
const port =process.env.PORT || 3000;


//conecting the DB before the server starts listening
const start =async ()=>{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, ()=>{
      console.log(`Server listening on port ${port}`)
    })
  }catch(err){
    console.log(err);
  }
}

start();
/*
REST API:
  -REpresentational State Transfer. It is a design pattern. It combines HTTP verbs, route paths, and resourses(data).
  -Our approach:
  --We have our main list of orders (we order tasks in this case with our HTTP methods).
  --We use JSON to send and recieve data.
  --We allow the user to perform CRUD(create, read, update ,delete) data from our database.

MONGODB:
  -NoSQ, Non relational DB:
    It don't care how the data relates to each other.
    --We have collections (groups of items) instead of columns
    --we have documents instead of rows that represent a single items. It is a set of key/value data pair that can have multiple kind of data (numbers, strings, objects, etc)



  -Store JSON:
  -Easy to get started:
  -Free Cloud Hosting -Atlas:

*/

//2:11:46