const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[0] // <---- comment out this line in your solution!
const getStringLengths = (obj) =>
    Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, value.length])
    );

const sculptureListLengths = sculptureList.map(getStringLengths);

// it aks for a loop, i guess the map is technically a loop but here is a for loop method
// personally i liek to use map more since all the js framework stuff i do.
// for (const sculpture of sculptureList) {
//     const lengthsObject = {};
//     for (const key in sculpture) {
//         lengthsObject[key] = sculpture[key].length;
//     }
//     sculptureListLengths.push(lengthsObject);
// }

console.log('sculptureListLengths:');
console.log(JSON.stringify(sculptureListLengths, null, 2));