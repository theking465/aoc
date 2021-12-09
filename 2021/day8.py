import itertools

data = [j.split(" ") for entry in [i.split(" | ") for i in open("input/day8.txt", "r").read().splitlines()] for j in entry]

# part1
result1 = 0
for i in range(len(data)):
	if(i%2 == 0): continue
	result1 += len(list(filter(lambda x: len(x) in [2,3,4,7], data[i])))
print("part1: " + str(result1))

# part2
letterToDigit= {
	'a' : 0,
	'b' : 1,
	'c' : 2,
	'd' : 3,
	'e' : 4,
	'f' : 5,
	'g' : 6
}

def lettersToDigits(number):
	return {
		"cf": 1,
		"acdeg": 2,
		"acdfg": 3,
		"bcdf":4, 
		"abdfg":5, 
		"abdefg":6, 
		"acf":7, 
		"abcdefg":8, 
		"abcdfg":9,
		"abcefg": 0
	}[number]

def generateAllMappings():
	result = list(itertools.permutations(["a","b","c","d","e","f","g"]))
	return [list(i) for i in result]

def isValidNumber(number, mapping):
	convertedNumber = []
	for i in number:
		convertedNumber.append(mapping[letterToDigit[i]])
	return "".join(sorted(convertedNumber)) in ["cf", "acdeg", "acdfg", "bcdf", "abdfg", "abdefg", "acf", "abcdefg", "abcdfg", "abcefg"]

result = 0

for i in range(len(data)):
	if(i%2 != 0): continue
	input = data[i]
	output = data[i+1]
	for mapping in generateAllMappings():
		hasToBreak = False
		validNumbers = 0
		for digit in input:
			if(isValidNumber(digit, mapping)):
				validNumbers += 1

		#correct mapping has been found
		if validNumbers == 10:
			convertedNumber = ""
			for number in output:
				convertedDigits = []
				for i in number:
					convertedDigits.append(mapping[letterToDigit[i]])
				convertedNumber += str(lettersToDigits("".join(sorted(convertedDigits))))
			result += int(convertedNumber)

print("part2: ",  result)
