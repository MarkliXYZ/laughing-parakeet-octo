// JS Code that print to console the absolute path to the script via #node sript.js
console.log(__filename);

//JS Code that will set background color of the body elemtn of a html to blue
// document.body.style.backgroundColor = "blue";


//JS Code that will print our current users home dir and OS plform that the code is running on and list package that required for this code
console.log(`User's home directory: ${require('os').homedir()}`);
console.log(`Operating System Platform: ${require('os').platform()}`);
// const os = require('os');
// const path = require('path');
// const fs = require('fs');
