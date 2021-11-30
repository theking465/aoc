const fs = require("fs");
var array = fs.readFileSync('input/day8.txt').toString().split("\r\n");
//part1
let acc = 0;
let visited = new Set();
var doInstruction = (code, number) => {
    if (code == "acc") {
        acc += number;
        return 1;
    }
    if (code == "nop") {
        return 1;
    }
    if (code == "jmp") {
        return number;
    }
};
var doAllInstructions = (list) => {
    acc = 0;
    visited.clear();
    for (let i = 0; i < list.length; i += 0) {
        const element = list[i];
        if (visited.has(i)) return 0;
        visited.add(i);
        i += doInstruction(element.split(" ")[0], parseInt(element.split(" ")[1]));
    }
    return 1;
};

doAllInstructions(array);
console.log("solution day 8 part 1: ", acc);

//part2
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.includes("nop")) {
        array[i] = "jmp" + element.slice(3);
        if (doAllInstructions(array) != 0) {
            break;
        }
        array[i] = "nop" + element.slice(3);
    }
    if (element.includes("jmp")) {
        array[i] = "nop" + element.slice(3);
        if (doAllInstructions(array) != 0) {
            break;
        }
        array[i] = "jmp" + element.slice(3);
    }
};
console.log("solution day 7 part2: ", acc);