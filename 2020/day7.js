const fs = require("fs");
var array = fs.readFileSync('input/day7.txt').toString().split("\r\n");
//part1
let gold = [];
let visited = new Set();
for (let i = 0; i < array.length; i++) {
    const element = array[i].split(" bags contain");
    if (element[1].includes("shiny gold")) {
        gold.push(element[0]);
    }
}
while (gold.length != 0) {
    const element = gold.pop();
    visited.add(element);
    for (let i = 0; i < array.length; i++) {
        item = array[i].split(" bags contain");
        if (item[1].includes(element) && !visited.has(item[0])) {
            gold.push(item[0]);
        }
    }
}
console.log("solution day 7 part 1: ", visited.size);

//part2
var parse = (y) => { return y.split("contain ")[1].split(", ") };

let amount = recfunction("shiny gold") - 1;

function recfunction(rec) {
    let golden = array[array.findIndex(item => item.includes(rec + " bags contain"))];
    let recursive = parse(golden);
    let toReturn = 1;
    console.log(rec, recursive);
    while (recursive.length != 0) {
        item = recursive.shift();
        if (item.includes("no other")) {
            return 1;
        }
        const number = item.match(/\d/)[0];
        item = item.split(number)[1].split(" bag")[0].substring(1);
        toReturn += parseInt(number) * recfunction(item);
    }
    console.log(rec, toReturn);
    return toReturn;
}
console.log("solution day7 part 2: ", amount);