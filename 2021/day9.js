fs = require("fs")

let data = fs.readFileSync("input/day9.txt").toString().split("\n").map(x => x.split("").map(y => parseInt(y)))

//Part1

//Function getNeighbours which returns the nieghbours, neighbours are not diagonals
function getNeighbours(x, y) {
	let neighbours = []
	if (x > 0) {
		neighbours.push([x - 1,y])
	}
	if (x < data.length - 1) {
		neighbours.push([x + 1,y])
	}
	if (y > 0) {
		neighbours.push([x,y - 1])
	}
	if (y < data[0].length - 1) {
		neighbours.push([x,y + 1])
	}
	return neighbours
}

lowPoints = []

for (let i = 0; i < data.length; i++) {
	for (let j = 0; j < data[0].length; j++) {
		number = data[i][j]
		neighbours = getNeighbours(i, j)
		if (neighbours.every(x => data[x[0]][x[1]] > number)) {
			lowPoints.push([i, j])
		}
	}
}

result = 0
for (let i = 0; i < lowPoints.length; i++) {
	result += data[lowPoints[i][0]][lowPoints[i][1]] + 1
}

console.log("part1: " + result)

//Part 2
basins = []

function getBasinSize(x, y, visited){
	result = 1
	visited.add([x, y].toString())
	for (let i = 0; i < getNeighbours(x,y).length; i++) {
		neighbours = getNeighbours(x, y)
		if (data[neighbours[i][0]][neighbours[i][1]] != 9 && !visited.has([neighbours[i][0], neighbours[i][1]].toString())) {
			result += getBasinSize(neighbours[i][0], neighbours[i][1], visited)
		}
	}
	return result
}

for (let i = 0; i < lowPoints.length; i++) {
	const point = lowPoints[i];
	basins.push(getBasinSize(point[0], point[1], new Set()))
}

console.log("part2: ",basins.map(x => parseInt(x)).sort((a, b) => a - b).slice(-3).reduce((a, b) => a * b))