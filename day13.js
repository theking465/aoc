const fs = require("fs");
var array = fs.readFileSync('input/day13.txt').toString().split("\r\n");
let min = array[0];
let busses = array[1].split(",").filter(elem => elem != "x").map(i => Number(i));
//part1
console.log("solution day13 part1: ", part1());
//part2
console.log("solution day13 part2: see https://www.dcode.fr/chinese-remainder");

function part1() {
    while (true) {
        for (let i = 0; i < busses.length; i++) {
            const bus = busses[i];
            if (min % bus == 0) {
                return (min - array[0]) * bus;
            }
        }
        min++;
    }
}