const fs = require("fs");
var array = fs.readFileSync('input/day1.txt').toString().split("\n").map(i => Number(i));
let length = array.length;
console.log(part1());
console.log(part2());

function part1() {
    for (let i = 0; i <= length; i++) {
        if (array.includes(2020 - array[i])) return "solution day1 part1: " + array[i] * (2020 - array[i])
    }
}

function part2() {
    for (let i = 0; i <= length; i++) {
        for (let j = 0; j <= length; j++) {
            if (array[i] + array[j] > 2020) continue;
            if (array.includes(2020 - array[i] - array[j])) return "solution day1 part2: " + array[i] * array[j] * (2020 - array[i] - array[j]);
        }
    }
}