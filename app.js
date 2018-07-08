console.log("starting app")

const fs = require('fs');//loads the file system module
const os = require('os');//loads the operating system module

const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
//var user = os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt',`Hello ${user.username}!, You are ${notes.age}.`);
console.log('Result: ', notes.add(3,4));