module.exports.items = ["iten1", "item2"];
const person={
    name:"bob",
    age:25
}

module.exports.singlePerson = person;


//When we have something being executed in the code, we execute it when we require the module. So we must be carefull when exporting and importing files.

//for example, uncomment this, and require this file from the app.js file, you'll see "jolines bob printed in the console"
// const someFunction = ()=> console.log(`jolines ${person.name}`);

// someFunction()