const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware (express.static(path)) is a static middleware that .use method uses.
app.use(express.static('./public'))

//*I don't need the code below if I add the index.html to the "public" folder, so it routes me there first
// app.get("/",(req, res)=>{
//   console.log(`User entered to Home`);
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })



app.all('*', (req, res) => {
  console.log(`User entered to ${req.url}`);
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
