const fs = require("fs");
var array = fs.readFileSync('input/day10.txt').toString().split("\r\n").map(i => Number(i)).sort((a, b) => a - b);
let max = array[array.length - 1];
//part1
part1 = array.map((x, index) => x - array[index - 1]);
console.log("solution day 10 part1: ", part1.filter((x) => x == 1).length * (part1.filter((x) => x == 3).length + 1));
//part2
let dict = {};
console.time();
console.log("solution day10 part2: ", getPossibilities(0));
console.timeEnd();

function getPossibilities(offset) {
    if (offset >= max) return 1;
    let next = [offset + 1, offset + 2, offset + 3].filter(x => array.includes(x));
    let toReturn = 0;
    next.forEach(element => {
        if (!(element in dict)) {
            let solution = getPossibilities(element);
            dict[element] = solution;
            toReturn += solution;
        } else {
            toReturn += dict[element];
        }
    });
    return toReturn;
}