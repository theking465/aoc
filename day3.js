const fs = require("fs");
var array = fs.readFileSync('input/day3.txt').toString().split("\r\n");
//part1

console.log("solution day3 part1: ", checkSlope(1, 3));
//part2
console.log("solution day3 part2: ", checkSlope(1, 3) * checkSlope(1, 1) * checkSlope(1, 5) * checkSlope(1, 7) * checkSlope(2, 1));

function checkSlope(row, col) {
    let c = 0;
    let trees = 0;
    for (let r = 0; r < array.length; r += row) {
        const element = array[r];
        let expanded = element;
        for (let j = 0; j < Math.floor(c / element.length); j++) {
            expanded += element;
        }
        if (expanded.charAt(c) === "#") trees++;
        c += col;
    }
    return trees;
}