fs = require("fs")

let data = fs.readFileSync("input/day4.txt").toString().split("\n\n")
numbers = data[0].split(",")
boards = data.slice(1).map(board => board.split("\n").map(row => row.trim().split(/\s+/)))

//generate an empty result board
let result_board = []
for (let i = 0; i < boards.length; i++) {
	result_board.push([])
	for (let j = 0; j < boards[i].length; j++) {
		result_board[i].push([])
		for (let k = 0; k < boards[i][j].length; k++) {
			result_board[i][j].push(0)
		}
	}
}

//super effiecient way to cross out a number
function addNumber(number){
	for (let i = 0; i < boards.length; i++) {
		for (let j = 0; j < boards[i].length; j++) {
			for (let k = 0; k < boards[i][j].length; k++) {
				if(boards[i][j][k] == number){
					result_board[i][j][k] = 1
				}
			}
		}
	}
}

function checkWin(){
	for (let i = 0; i < result_board.length; i++) {
		//return i if the sum of the column is 5
		for (let j = 0; j < result_board[i].length; j++) {
			if(columnSum(result_board[i], j) == 5) return i
			if(sum(result_board[i][j]) == 5) return i
		}
	}
	return null
}

function sum(list) {
	return list.reduce((a,b) => parseInt(a)+parseInt(b))
}
function columnSum(matrix, index){
	let sum = 0
	for (let i = 0; i < matrix.length; i++) {
		sum += parseInt(matrix[i][index])
	}
	return sum
}

for (let i = 0; i < numbers.length; i++) {
	addNumber(numbers[i])
	if(checkWin()){
		winning_board = boards[checkWin()]
		sumEmptyNumbers = 0
		for (let i = 0; i < winning_board.length; i++) {
			for (let j = 0; j < winning_board[i].length; j++) {
				if(result_board[checkWin()][i][j] == 0){
					sumEmptyNumbers += parseInt(winning_board[i][j])
				}
			}
		}
		console.log('part1: ' + (sumEmptyNumbers * numbers[i])) 
		break;
	}
}

//Part 2
for (let i = 0; i < numbers.length; i++) {
	addNumber(numbers[i])
	if(boards.length == 1 && checkWin() != null){
		sumEmptyNumbers = 0
		for (let i = 0; i < boards[0].length; i++) {
			for (let j = 0; j < boards[0][i].length; j++) {
				if(result_board[0][i][j] == 0){
					sumEmptyNumbers += parseInt(boards[0][i][j])
				}
			}
		}
		console.log('part2 ' + (sumEmptyNumbers * numbers[i])) 
		break;
	}
	while(checkWin() != null){
		boards.splice(checkWin(), 1)
		result_board.splice(checkWin(), 1)
	}
}