// HTTP, BUILT-IN MODULE - Interacting with the server
//we won't see all the methods in this module, we'll se them later
const http = require("http");

//request = the info coming from the user to the server
//response = the ingo going to the user from the server
const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        // response.write("Welcome to our homepage");
        // response.end();
        //the same as:
        response.end("Welcome to our homepage");
        //I need to use the return to avoid having the error, because it seems to keep on trying to send the last response.end (the one outside the if statements), and it stops the process.
        return;
    }
    if(request.url === '/about'){
        response.end("Here is our short history");
        return;
    } 
    //I can use "else" here instead of needing a return statement inside every if block.
    response.end(`
    <h1> Oops! </h1>
     <p> We can't seem to find the page you are looking for!</p>
     <a href="/"> Back Home</a>`);
})

server.listen(5000)