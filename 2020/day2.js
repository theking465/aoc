const fs = require("fs");
var array = fs.readFileSync('input/day2.txt').toString().split("\r\n");
let input = [];
//part1
for (let i = 0; i < array.length; i++) {
    let row = array[i].split(" ");
    input.push(row);
}

let counter = 0;
for (let i = 0; i < input.length; i++) {
    let char = input[i][1].charAt(0);
    let pw = input[i][2];
    let leastmost = input[i][0].split("-");
    let occurences = pw.split(char).length - 1;
    if (occurences >= leastmost[0] && occurences <= leastmost[1]) {
        counter++;
    }
}
console.log("solution day2 part1: ", counter);

//part2
input = [];
for (let i = 0; i < array.length; i++) {
    let row = array[i].split(" ");
    input.push(row);
}

counter = 0;
for (let i = 0; i < input.length; i++) {
    let char = input[i][1].charAt(0);
    let pw = input[i][2];
    let leastmost = input[i][0].split("-");
    let first = parseInt(leastmost[0], 10);
    let second = parseInt(leastmost[1], 10);
    if ((pw.charAt(first - 1) == char && pw.charAt(second - 1) != char) || pw.charAt(first - 1) != char && pw.charAt(second - 1) == char) {
        counter++;
    }
}

console.log("solution day2 part2: ", counter);