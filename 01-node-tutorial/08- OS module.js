// OS, BUILT-IN MODULE - Provides methods for interacting with the server

const os = require("os");

//we can either acces the module like os.method, or destructure it in the require expression as "const {specificMethod} = require("os);

//Info about current user
const user = os.userInfo();
console.log(user);

//Get the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

//Get some basic info about the OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),

}
console.log(currentOS);