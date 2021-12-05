data = [j.split(",") for entry in [i.split(" -> ") for i in open("input/day5.txt", "r").read().splitlines()] for j in entry]
data = [ [int(y) for y in x]for x in data]

def empty_matrix(n):
	matrix = []
	for i in range(n):
		row = []
		for j in range(n):
			row.append(0)
		matrix.append(row)
	return matrix

matrix = empty_matrix(max(max(x) for x in data) + 1)

for i in range(len(data)):
	if(i%2 != 0): continue
	first = data[i]
	second = data[i+1]
	#x coord stays the same
	if(first[0] == second[0]):
		temp = first
		while temp[1] != second[1]:
			matrix[temp[1]][temp[0]] += 1
			temp[1] += 1 if first[1] < second[1] else  -1
		matrix[temp[1]][temp[0]] += 1
		
	#y coord stays the same
	elif(first[1] == second[1]):
		temp = first
		while temp[0] != second[0]:
			matrix[temp[1]][temp[0]] += 1
			temp[0] += 1 if first[0] < second[0] else  -1 
		matrix[temp[1]][temp[0]] += 1

	
def get_intersections(array):
	return len(list(filter( lambda x: x>=2,[num for row in array for num in row])))

print("part1: ", get_intersections(matrix))

#part2
data = [j.split(",") for entry in [i.split(" -> ") for i in open("input/day5.txt", "r").read().splitlines()] for j in entry]
data = [ [int(y) for y in x]for x in data]
matrix = empty_matrix(max(max(x) for x in data) + 1)

for i in range(len(data)):
	if(i%2 != 0): continue
	first = data[i]
	second = data[i+1]
	#x coord stays the same
	if(first[0] == second[0]):
		temp = first
		while temp[1] != second[1]:
			matrix[temp[1]][temp[0]] += 1
			temp[1] += 1 if first[1] < second[1] else  -1
		matrix[temp[1]][temp[0]] += 1
		
	#y coord stays the same
	elif(first[1] == second[1]):
		temp = first
		while temp[0] != second[0]:
			matrix[temp[1]][temp[0]] += 1
			temp[0] += 1 if first[0] < second[0] else  -1 
		matrix[temp[1]][temp[0]] += 1
	
	#diagonal
	else:
		temp = first
		while temp[0] != second[0]:
			matrix[temp[1]][temp[0]] += 1
			temp[0] += 1 if first[0] < second[0] else  -1
			temp[1] += 1 if first[1] < second[1] else  -1
		matrix[temp[1]][temp[0]] += 1
		
print("part2: ", get_intersections(matrix))

