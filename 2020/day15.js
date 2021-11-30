const fs = require("fs");
let list = [];
let dict = {};
fs.readFileSync('input/day15.txt').toString().split(",").map(x => Number(x)).forEach(elem => list.push(elem));
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    dict[element] = [undefined, i];
}
for (let i = list.length; i < 30000000; i++) {
    const last = list[i - 1];
    let dict0 = dict[0];
    let dictlast = dict[last];
    if (dictlast === undefined || dictlast[0] === undefined) {
        if (dict0 === undefined) {
            dict[0] = [undefined, i];
        } else {
            dict[0] = [dict0[1], i];
        }
        list.push(0);
    } else {
        let index = dictlast[1] - dictlast[0];
        let dictindex = dict[index];
        if (dictindex === undefined) {
            dict[index] = [undefined, i];
        } else {
            dict[index] = [dictindex[1], i];
        }
        list.push(index);
    }
    console.log(i);
}
console.log(list)
console.log("solution day15, part1: ", list[2019]);
console.log("solution day15, part2: ", list[30000000 - 1])