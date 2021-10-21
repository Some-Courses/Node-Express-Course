// PATH, BUILT-IN MODULE - 

const path = require("path");

//separator property that returns a platform specific separator (using different platforms will give different responses)
console.log(path.sep);  


const filePath = path.join('./content/', 'subfolder','text.txt')
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

//returning an absolute path /Uses the __dirname global
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);