fs = require("fs")
let data = fs.readFileSync("input/day6.txt").toString().split(',').map(x => parseInt(x))
//Array to object
let current = {
	0: data.filter(x => x === 0).length,
	1: data.filter(x => x === 1).length,
	2: data.filter(x => x === 2).length,
	3: data.filter(x => x === 3).length,
	4: data.filter(x => x === 4).length,
	5: data.filter(x => x === 5).length,
	6: data.filter(x => x === 6).length,
	7: data.filter(x => x === 7).length,
	8: data.filter(x => x === 8).length
}

const grow = (n) => {
	for (let i = 0; i < n; i++) {
		let next = {
			0: current[1],
			1: current[2],
			2: current[3],
			3: current[4],
			4: current[5],
			5: current[6],
			6: current[7] + current[0],
			7: current[8],
			8: current[0]
		}	
		current = next
	}
}
grow(80)
sum = Object.values(current).reduce((a, b) => a + b)
console.log("part1: ", sum)
current = {
	0: data.filter(x => x === 0).length,
	1: data.filter(x => x === 1).length,
	2: data.filter(x => x === 2).length,
	3: data.filter(x => x === 3).length,
	4: data.filter(x => x === 4).length,
	5: data.filter(x => x === 5).length,
	6: data.filter(x => x === 6).length,
	7: data.filter(x => x === 7).length,
	8: data.filter(x => x === 8).length
}
grow(256)
sum = Object.values(current).reduce((a, b) => a + b)
console.log("part2: ", sum)