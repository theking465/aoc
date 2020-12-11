const fs = require("fs");
var array = fs.readFileSync('input/day11.txt').toString().split("\r\n");
var matrix = [];
array.forEach(elem => {
    let row = elem.split("");
    matrix.push(row);
});
//part1
console.time();
let bool = true;
while (bool) {
    bool = part1()
}
console.log("solution day11 part1: ", [].concat(...matrix).filter(x => x == "#").length);
console.timeEnd();
//part2
matrix = [];
array.forEach(elem => {
    let row = elem.split("");
    matrix.push(row);
});
console.time();
bool = true;
while (bool) {
    bool = part2()
}
console.log("solution day11 part2: ", [].concat(...matrix).filter(x => x == "#").length - 1);
console.timeEnd();

function part2() {
    let newMatrix = JSON.parse(JSON.stringify(matrix));
    let changed = false;
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const seat = row[j];
            if (seat === ".") continue;
            if (seat === "L") {
                if (occSeat2(i, j) == 0) {
                    newMatrix[i][j] = "#";
                    changed = true;
                }
            } else {
                if (occSeat2(i, j) >= 5) {
                    newMatrix[i][j] = "L";
                    changed = true;
                }

            }
        }
    }
    matrix = newMatrix;
    return changed;
}

function part1() {
    let newMatrix = JSON.parse(JSON.stringify(matrix));
    let changed = false;
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const seat = row[j];
            if (seat === ".") continue;
            if (seat === "L") {
                if (occSeat1(i, j) == 0) {
                    newMatrix[i][j] = "#";
                    changed = true;
                }
            } else {
                if (occSeat1(i, j) >= 4) {
                    newMatrix[i][j] = "L";
                    changed = true;
                }

            }
        }
    }
    matrix = newMatrix;
    return changed;
}

function occSeat1(row, col) {
    let amount = 0;
    for (let i = row - 1; i < matrix.length && i <= row + 1; i++) {
        if (i < 0) continue;
        const rowelem = matrix[i];
        for (let j = col - 1; j < matrix[0].length && j <= col + 1; j++) {
            if (j < 0) continue;
            if (i == row && j == col) continue;
            const elem = rowelem[j];
            if (elem == "#") amount++;
        }
    }
    return amount;
}

function occSeat2(row, col) {
    let amount = 0;

    //top
    for (let i = col - 1; i >= 0; i--) {
        if (matrix[row][i] == "L") break;
        if (matrix[row][i] == "#") {
            amount++;
            break;
        }
    }
    //botom
    for (let i = col + 1; i < matrix[0].length; i++) {
        if (matrix[row][i] == "L") break;
        if (matrix[row][i] == "#") {
            amount++;
            break;
        }
    }
    //right
    for (let i = row + 1; i < matrix.length; i++) {
        if (matrix[i][col] == "L") break;
        if (matrix[i][col] == "#") {
            amount++;
            break;
        }
    }
    //left
    for (let i = row - 1; i >= 0; i--) {
        if (matrix[i][col] == "L") break;
        if (matrix[i][col] == "#") {
            amount++;
            break;
        }
    }
    //lefttop
    let i = row;
    let j = col;
    while (true) {
        i--;
        j--;
        if (i < 0 || j < 0) break;
        if (matrix[i][j] == "L") break;
        if (matrix[i][j] == "#") {
            amount++;
            break;
        }
    }
    //leftbottom
    i = row;
    j = col;
    while (true) {
        i++
        j--;
        if (i >= matrix.length || j < 0) break;
        if (matrix[i][j] == "L") break;
        if (matrix[i][j] == "#") {
            amount++;
            break;
        }
    }
    //rightbottom
    i = row;
    j = col;
    while (true) {
        i++
        j++;
        if (i >= matrix.length || j >= matrix.length) break;
        if (matrix[i][j] == "L") break;
        if (matrix[i][j] == "#") {
            amount++;
            break;
        }
    }
    //righttop
    i = row;
    j = col;
    while (true) {
        i--;
        j++;
        if (i < 0 || j >= matrix.length) break;
        if (matrix[i][j] == "L") break;
        if (matrix[i][j] == "#") {
            amount++;
            break;
        }
    }
    return amount;
}