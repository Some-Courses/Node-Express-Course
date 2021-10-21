//2235 kB = 2.235Mb

var http = require('http');
var fs = require('fs');

http
  .createServer(function(req, res){
    //If we use it in this way, the big.txt will be sent as a solid packet and we prefer it in separate chunks of data.
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    //
    fileStream.on("open", ()=>{
      //pipe method pushes from the readStream into the correct stream
      //let us have the Content-Length: "chunked" in the response headers
      fileStream.pipe(res)
    })
    fileStream.on("error",(err)=>{
      res.end(err)
    })
  })
  .listen(5000)