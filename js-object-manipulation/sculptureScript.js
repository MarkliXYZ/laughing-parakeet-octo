const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[0] // <---- comment out this line in your solution!

const sculptureListLengths = [];

for (const item of sculptureList) {
    const lengths = {};
    for (const k in item) {
        Object.assign(lengths, { [k]: item[k].length });
    }
    sculptureListLengths.push(lengths);
}

// I probably would use map, but the objetive ask for loop
// const sculptureListLengths = sculptureList.map(obj =>
//     Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.length]))
// );

console.log('sculptureListLengths:');
console.log(JSON.stringify(sculptureListLengths, null, 2));