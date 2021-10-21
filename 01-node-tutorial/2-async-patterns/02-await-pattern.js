//!The steps  in this document are labeled with the turquoise and yellow color.

//[10
/* 
const {readFile, writeFile} = require('fs');

//|06
//Here we have the method promesify that allows us to take our readFile and turn it into a function that returns a promise. We won't need the getText function
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
 */

/* 
|01
readFile(`./content/first.txt`, 'utf8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
//If we want concat a bunch of async functions we will end up in a callback hell, so to avoid that, we can generate promises to handle this.
 */

//[07 (Commented)
/* //|02
const getText = (path)=>{
  return new Promise((resolve, reject)=>{
    readFile(path, 'utf8', (err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    }) 
  })
} */

//[05 (Commented)
/* //|03
 getText("./content/first.txt")
   .then(response => console.log(response))
   .catch(err => console.log(err))
 */

//[08 (Commented)
/* //|04
const start = async()=>{
  try{
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt")
    console.log(first);
    console.log(second);
  }catch(err){
    console.log(err)
  }
}
start() */

//[11
/* 
//|09

const start = async(path1, path2 = undefined)=>{
  try{
    const first = await readFilePromise(path1, 'utf8');
    console.log(first);
  }catch(err){
    console.log(err);
  }
}
start("./content/first.txt","./content/second.txt" ) */


//|12
const {readFile, writeFile} = require('fs').promises
//And so have the last function declared like this:
 
const start = async(path1)=>{
  try{
    const first = await  readFile(path1, 'utf8');
    await  writeFile(
      './content/result-promises-(02-await Pattern)',
      `This is awesone: \n${first}.`, 
      {flag: a}
    );
  }catch(err){
    console.log(err);
  }
} 
start("./content/first.txt")