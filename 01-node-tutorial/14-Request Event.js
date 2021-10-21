const http = require('http');

//before we used:
// const server = http.createServer((req, res)=>{
//   res.end("Welcome");
// })

//Using Event Emitter API
const server = http.createServer();

//emits request event
//subscribe to it / listen for it / respond to it
//*Server can listen on the "request" event because it is in the NodeJS documentation. (<EventEmitter> <-extends- net.Server <-extends- http.Server )
server.on("request", (req, res)=>{
  res.end("Welcome");
})

server.listen(5000);