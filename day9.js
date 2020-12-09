const fs = require("fs");
var array = fs.readFileSync('input/day9.txt').toString().split("\r\n").map(i => Number(i));

var checkifSum = (elem, x, y) => {
    for (let i = x; i <= y; i++) {
        const elem1 = array[i];
        for (let j = x; j <= y; j++) {
            if (j == i) continue;
            const elem2 = array[j];
            if (elem1 + elem2 == elem) return true;
        }
    }
    return false;
};

var sum = (arr) => arr.reduce((a, b) => a + b, 0);

//part1
var part1;
for (let i = 24; i < array.length; i++) {
    const element = array[i];
    if (!checkifSum(element, i - 25, i)) {
        part1 = element;
        console.log("solution day 9 part1: ", element);
        break;
    };
}

//part2
for (let i = 0; i < array.length; i++) {
    const elem1 = array[i];
    let sol = [elem1];
    for (let j = i + 1; j < array.length; j++) {
        const elem2 = array[j];
        sol.push(elem2);
        if (sum(sol) > part1) break;
        if (sum(sol) == part1) {
            console.log("solution day9 part2: ", Math.min(...sol) + Math.max(...sol));
            break;
        }
    }
}