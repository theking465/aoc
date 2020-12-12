const fs = require("fs");
var array = fs.readFileSync('input/day12.txt').toString().split("\r\n");
//part1
let coords = [0, 0];
/*
0 = north
1 = east
2 = south
3 = west
*/
let facing = 1;
array.forEach(elem => {
    const opt = elem.charAt(0);
    const param = parseInt(elem.substring(1));
    doStep(opt, param, coords);
});
console.log("solution day12 part1: ", Math.abs(coords[0]) + Math.abs(coords[1]));

//part2
let waycoords = [10, 1];
let shipcoords = [0, 0];
const dir = ["N", "E", "S", "W"];
array.forEach(elem => {
    const opt = elem.charAt(0);
    const param = parseInt(elem.substring(1));
    if (dir.includes(opt)) doStep(opt, param, waycoords);
    if (opt == 'L') {
        rotate(waycoords[0], waycoords[1], -param)
    }
    if (opt == 'R') {
        rotate(waycoords[0], waycoords[1], param)
    }
    if (opt == 'F') {
        shipcoords[0] += param * waycoords[0];
        shipcoords[1] += param * waycoords[1];
    }
})
console.log("solution day12 part2: ", Math.abs(shipcoords[0]) + Math.abs(shipcoords[1]));

function rotate(x, y, angle) {
    var radians = (Math.PI / 180) * angle;
    cos = Math.round(Math.cos(radians));
    sin = Math.round(Math.sin(radians));
    nx = (cos * x) + (sin * y);
    ny = (cos * y) - (sin * x);
    waycoords = [nx, ny]
}

function doStep(opt, param, coords) {
    switch (opt) {
        case "N":
            coords[1] += param;
            break;
        case 'S':
            coords[1] -= param;
            break;
        case 'E':
            coords[0] += param;
            break;
        case 'W':
            coords[0] -= param;
            break;
        case 'L':
            facing -= param / 90;
            facing %= 4;
            if (facing < 0) facing += 4;
            break;
        case 'R':
            facing += param / 90;
            facing %= 4;
            break;
        case 'F':
            switch (facing) {
                case 0:
                    coords[1] += param;
                    break;
                case 1 || -3:
                    coords[0] += param;
                    break;
                case 2 || -2:
                    coords[1] -= param;
                    break;
                case 3 || -1:
                    coords[0] -= param;
                    break;
                default:
                    console.log("smth went wrong", facing);
                    break;
            }
            break;
        default:
            console.log("smth went wrong");
            break;
    }
}