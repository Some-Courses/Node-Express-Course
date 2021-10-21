// FS, BUILT-IN MODULE - Interacting with the filesistem

//Essencially we can use it asyncronously and non-blocking,  or syncronously wich will be blocking (later we'll se the diferences and when to use each other)

const {readFileSync, writeFileSync} = require("fs");

//read from fylesistem
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,'\n',second);

//if we have no file in the sistem when we use writeFileSync(), it will create it there.
//it will delete the content if the file is already there.
writeFileSync(
    './content/result-sync (10).txt',
    `Here is the result:\n${first},\n${second}`
)

//to append to the file : we need to use a third argument called flag
writeFileSync(
    './content/result-sync (10).txt', 
    `\nHere is the appending!!!`, 
    {flag: "a"}
)

