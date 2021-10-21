// Modules  -Every file in Node is a module (by default), they let us have encapsulated code, and only share the minimum
//*const names = require("./4-names");
const {john, peter} = require('./04-names');
const sayHi = require('./05-utils');

//require("./6-alternativeExport");

//*sayHi(names.peter)
sayHi(peter)
sayHi(john)
sayHi("Susan")