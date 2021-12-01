data = [int(i) for i in open("input/day1.txt", "r").read().splitlines()]
# part 1
prev = 9999999999
result = 0
for line in data:
	if line > prev:
		result += 1
	prev = line
print(result)
# part 2
prev3 = 9999999999
result2 = 0
end = len(data)
i = 2
for i in range(len(data)):
	if(i + 2 < end):
		if data[i] + data[i+1] + data[i+2] > prev3:
			result2 += 1
		prev3 = data[i] + data[i+1] + data[i+2]
print(result2)