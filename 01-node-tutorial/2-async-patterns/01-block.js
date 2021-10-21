const http = require('http');

const server = http.createServer ((req, res)=>{
    if(req.url === "/"){
        res.end("Home Page");
    }else if(req.url ==="/about"){
        //BLOCKING CODE (Because everytime we want to access this path, we'll ahve to execute this nested loop first, so we'll have to wait)
        for(let i=0; i<5;i++){
            for(let j=0; j<200;j++){
                console.log(`${i} - ${j}`);
            }
        }
        console.log("TERMINO")
        res.end("About Page");
    }else{
        res.end("404 Not found");
    }
})

//listen is async as it is setInterval.
server.listen(5000, ()=>{
    //here we can handle server errors
    console.log('Server listening on port: 5000...');
})