const fs = require("fs");
var array = fs.readFileSync('input/day1-1.txt').toString().split("\n").map(i => Number(i));
part1();
part2();

function part1() {
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            if (i == j) {
                continue;
            }
            if (array[i] + array[j] == 2020) {

                console.log("part 1 solution: ", array[i] * array[j]);
                return;
            }
        }
    }
}

function part2() {
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            for (let k = 0; k <= array.length; k++) {
                if (i == j || j == k || i == k || array[i] == 0 || array[j] == 0 || array[k] == 0) {
                    continue;
                }
                if (array[i] + array[j] + array[k] == 2020) {
                    console.log("part 2 solution: ", array[i] * array[j] * array[k]);
                    return;
                }
            }
        }
    }
}