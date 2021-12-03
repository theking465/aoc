fs = require("fs")

let data = fs.readFileSync("input/day2.txt").toString().split("\n")
let depth = 0
let distance = 0
data.forEach(entry => {
	let [keyword, value] = entry.split(" ")
	if (keyword == "up") {
		depth -= parseInt(value)
	}
	if (keyword == "down") {
		depth += parseInt(value)
	}
	if (keyword == "forward") {
		distance += parseInt(value)
	}
})
console.log("part1: ", depth * distance)

depth = 0
distance = 0
let aim = 0
data.forEach(entry => {
	let [keyword, value] = entry.split(" ")
	if (keyword == "up") {
		aim -= parseInt(value)
	}
	if (keyword == "down") {
		aim += parseInt(value)
	}
	if (keyword == "forward") {
		distance += parseInt(value)
		depth += aim * parseInt(value)
	}
})
console.log("part2: ", depth * distance)
