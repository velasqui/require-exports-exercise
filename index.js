const dataStuff = require('./data');
const sumFunc = require('./sum');
const cowsay = require('cowsay');
const lodash = require('lodash');

console.log(dataStuff.numbers);

console.log(`${dataStuff.name} is from ${dataStuff.hometown}.`);

console.log(sumFunc(dataStuff.numbers));

console.log(cowsay.say({
    text: "EAT MOR CHIKIN",
    e: "Oo",
    T: "U "
}));

console.log(lodash.shuffle(dataStuff.numbers));