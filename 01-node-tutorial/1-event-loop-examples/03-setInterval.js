setInterval(()=>{
    console.log('Hello World!');

}, 2000)
console.log('I wil run first!');
//process stays alive 
//unless we kill it with CTRL + C

//Here we are not exiting the process, because every 2 secs we'll invoke that callback. This is the main difference between setInterval and setTimeout, with setInterval we create a callback loop that will only die with CRTL + C or if an error happens.
