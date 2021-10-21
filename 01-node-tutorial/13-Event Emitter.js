//EVENTS:
//As our program executes, it is handled by events. So the flow of the program is event-driven.
//Node.Js uses a Event-Driven Programming. When working in browsers, a big part of our work is handling events. 

//The idea is that we are listening for different events and register functions that will execute in response of our specific event




const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// .on method is to listen for a especific event
customEmitter.on('response', (name, id)=>{
  console.log(`Data recieved user: ${name} with id: ${id}`);
});
customEmitter.on('response', ()=>{
  console.log(`I'm doing some other logic here `);
});

//.emit is to emit. We should place it at the end, because we should first listen and then emit the event
customEmitter.emit("response", "john", 34);
