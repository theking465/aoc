const fs = require("fs");
var data = fs.readFileSync('input/day24.txt').toString().split("\n")

coords = new Set()
for(let i = 0; i < data.length; i++) {
	line = data[i]
	current = {x: 0, y: 0}

	//SE
	matches = line.match(/se/g)?.length
	if(matches){
		current.x += matches/2
		current.y -= matches
		line = line.replace(/se/g, '')
	}
	//NE
	matches = line.match(/ne/g)?.length
	if(matches){
		current.x += matches/2
		current.y += matches
		line = line.replace(/ne/g, '')
	}
	//NW
	matches = line.match(/nw/g)?.length
	if(matches){
		current.x -= matches/2
		current.y += matches
		line = line.replace(/nw/g, '')
	}
	//SW
	matches = line.match(/sw/g)?.length
	if(matches){
		current.x -= matches/2
		current.y -= matches
		line = line.replace(/sw/g, '')
	}
	//W
	matches = line.match(/w/g)?.length
	if(matches){
		current.x -= matches
	}
	//E
	matches = line.match(/e/g)?.length
	if(matches){
		current.x += matches
	}
	coords.add(JSON.stringify(current))
}
console.log("part1: " + (coords.size - (data.length - coords.size)))