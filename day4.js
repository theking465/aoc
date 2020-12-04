const fs = require("fs");
var array = fs.readFileSync('input/day4.txt').toString().split("\r\n\r\n");

let valid = 0;
//for some reason it gives +1 the required solution
var regex = new RegExp(/(?=.*iyr:(201[0-9]|2020))(?=.*ecl:[amb|blu|brn|gry|grn|hzl|oth])(?=.*hgt:((((1[5-8][0-9])|(19[0-3]))cm)|(59|6[0-9]|7[0-6])in))(?=.*pid:\d{9})(?=.*byr:(19[2-9][0-9]|200[0-2]))(?=.*hcl:#[a-f0-9]{6})(?=.*eyr:((202[0-9])|2030)).*$/);
for (let i = 0; i < array.length; i++) {
    let str = array[i].replace(/(\r\n|\n|\r)/gm, "");
    if (regex.test(str)) {
        valid++;
    }
}
console.log("solution day4 part2: ", valid);