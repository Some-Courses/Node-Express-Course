const {readFile, writeFile} = require("fs");

console.log("started a first task");
//CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first Task');
})
console.log("Starting next task!");
