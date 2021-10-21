//STREAMS:
// are use to read or manipulate streaming data like constinuous source or a big file.
//There are 4 types of streams:
//[ Writeable:
//Used to write data secuencially
//[Readable:
//Used to read data secuencially
//[Duplex:
//Used both to read and write data secuencially
//[Transform:
// Data can be modifies when writing or reading

//Many built in modules implement these streams, just like events 
//(<EventEmitter> <-extends- Streams) So we can use events in streams. This is an advanced concept.

const {createReadStream} = require('fs');

//We can that the size of the buffer will be 64KB by default, but we can control it here in the second argument
const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: ""});
//We also have other events like "close","end", 'open', 'ready', etc.

stream.on("data", (result)=>{
  console.log(result);
})
stream.on("error",(err)=>{
  console.log(err);

})
