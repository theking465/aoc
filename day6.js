const fs = require("fs");
const alphabet = require("alphabet");
var array = fs.readFileSync('input/day6.txt').toString().split("\r\n\r\n");

//part1
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let persons = element.split("\r\n");
    let answers = new Set();
    for (let j = 0; j < persons.length; j++) {
        const person = persons[j];
        person.split("").forEach(item => answers.add(item));
    }
    sum += answers.size;
}
console.log("solution day6 part1: ", sum);

//part2
sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let persons = element.split("\r\n");
    let answers = [];
    for (let j = 0; j < persons.length; j++) {
        const person = persons[j];
        person.split("").forEach(item => answers.push(item));
    }

    alphabet.forEach(item => {
        let count = answers.filter(x => x === item).length
        if (count == persons.length) sum++;
    });
}
console.log("solution day6 part12 ", sum);