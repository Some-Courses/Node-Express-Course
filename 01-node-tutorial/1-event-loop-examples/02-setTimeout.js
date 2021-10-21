//started operating system process
console.log('01 - First');
//Because this is asynchronous, it gets off loaded, son it invokes inmidiately after the last synchronous code is executed. In this case it is the "third" console.log
setTimeout(()=>{
    console.log('02 - Second');

}, 0)
console.log("03 - Third");