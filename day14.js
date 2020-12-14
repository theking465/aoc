const fs = require("fs");
var array = fs.readFileSync('input/day14.txt').toString().split("\r\n");
var mem = {};
let mask = {};
//part1
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.includes("mask")) {
        mask = {};
        let split = element.split("= ")[1];
        for (let j = 0; j < split.length; j++) {
            const char = split[j];
            if (char == "0") {
                mask[split.length - j - 1] = 0;
            }
            if (char == "1") {
                mask[split.length - j - 1] = 1;
            }
        }
        continue;
    }
    let args = element.match(/^\d+|\d+\b|\d+(?=\w)/g).map(i => BigInt(i));
    for (const [key, value] of Object.entries(mask)) {
        let bit = BigInt(1) << BigInt(key);
        if (value == 0) {
            args[1] &= ~bit;
        } else {
            args[1] |= bit;
        }
    }
    mem[args[0]] = args[1];
}
console.log("solution day14 part1: ", Object.values(mem).reduce((a, b) => a + b));

//part2
mem = {};
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.includes("mask")) {
        mask = {};
        let split = element.split("= ")[1];
        for (let j = 0; j < split.length; j++) {
            mask[split.length - j - 1] = split[j];
        }
        continue;
    }
    let args = element.match(/^\d+|\d+\b|\d+(?=\w)/g).map(i => BigInt(i));
    let indices = new Set();
    let arg = args[0];
    for (const [key, value] of Object.entries(mask)) {
        if (value == 1) {
            let bit = BigInt(1) << BigInt(key);
            arg = arg |= bit;
        }
    }
    a(35, BigInt(arg), indices, mask);
    indices.forEach(elem => mem[elem] = args[1]);
}

console.log("solution day14 part2: ", Object.values(mem).reduce((a, b) => a + b));

function a(bitsLeft, int, set, dict) {
    //skip if non float bit
    if (dict[bitsLeft] != "X") {
        if (bitsLeft == 0) return;
        a(bitsLeft - 1, int, set, dict);
        return;
    }
    let ogint = int;
    let bit = BigInt(1) << BigInt(bitsLeft);
    let toAdd = int &= ~bit;
    int = ogint;
    set.add(toAdd);
    let toAdd2 = int |= bit;
    set.add(toAdd2);
    if (bitsLeft == 0) return;
    a(bitsLeft - 1, toAdd, set, dict);
    a(bitsLeft - 1, toAdd2, set, dict);
}