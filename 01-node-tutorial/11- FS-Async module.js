// FS, BUILT-IN MODULE - Interacting with the filesistem

const {readFile, writeFile} = require("fs");
 
//read from fylesistem
//we get the buffer if we don't specify the type of content
readFile(
    "./content/first.txt", "utf8", 
    (err, result)=>{
        if(err){
            // throw new Error(err)
            console.log(err);
            // return;
        }
        const first = result;
        console.log("1: ",result); 
        readFile(
            "./content/second.txt", "utf8", 
            (err, result)=>{
                if(err){
                    // throw new Error(err)
                    console.log(err);
                    // return;
                }
                const second = result;
                console.log("2: ",result); 
                writeFile(
                    './content/result-Async (11).txt',
                    `Here is the async result: \n${first}.\n${second}.`,
                    (err, result)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        console.log(result);
                    }
                )
            }
        )
    }
)

//We have a Callback Hell here!