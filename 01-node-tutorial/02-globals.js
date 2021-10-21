// GLOBALS - NO WINDOW - because there is no browser!!!!

//__dirname     - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed  (when deploying in Heroku or any other environment, you can do different things)

console.log(__dirname)
setInterval(()=>{
    console.log("Hello World!");
}, 1000)