const express = require('express');
const app = express();


const peopleRouter = require('./routes/people (13)');
const authRouter = require('./routes/auth (12)');

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}));
//parse json
app.use(express.json());
//Driving the routes: Splitting up the functionality
app.use('/api/people', peopleRouter);
app.use('/login', authRouter )

app.listen(5000, ()=>{
  console.log(`Server runnning in port 5000...`)
})
