const fs = require("fs");
var array = fs.readFileSync('input/day5.txt').toString().split("\r\n");

//part1
let highest = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let id = seatID(element);
    if (id > highest) {
        highest = id;
    }
}
console.log("solution day5 part1: ", highest);

//part2

//create array
let all = []

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let id = seatID(element);
    all.push(id);
}

all.sort(function(a, b) { return a - b });
let offset = all[0];

for (let i = 0; i < all.length; i++) {
    const element = all[i];
    if (element != i + offset) {
        console.log("solution day5 part2: ", element - 1);
        break;
    }
}


function seatID(element) {
    //[lower, upper]
    let row = [0, 127];
    let col = [0, 7];
    for (let j = 0; j < 7; j++) {
        if (element.charAt(j) === 'F') {
            row[1] = Math.floor((row[1] + row[0]) / 2);
        } else {
            row[0] = Math.ceil((row[1] + row[0]) / 2);
        }
    }
    for (let k = 7; k < 10; k++) {
        if (element.charAt(k) === 'L') {
            col[1] = Math.floor((col[1] + col[0]) / 2);
        } else {
            col[0] = Math.ceil((col[1] + col[0]) / 2);
        }
    }
    return row[1] * 8 + col[0];
}