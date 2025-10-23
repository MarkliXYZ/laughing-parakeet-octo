const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[0] // <---- comment out this line in your solution!
const getStringLengths = (obj) =>
    Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, value.length])
    );

const sculptureListLengths = sculptureList.map(getStringLengths);

console.log('sculptureListLengths:');
console.log(JSON.stringify(sculptureListLengths, null, 2));