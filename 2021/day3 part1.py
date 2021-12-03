data = open("input/day3.txt", "r").read().splitlines()

#part1
mcd = dict()

for i in range(len(data[0])):
	mcd[str(i)] = dict({'1': 0, '0': 0})

for num in data:
	for i in range(len(num)):
		bit = num[i]
		if bit == '1':
			mcd[str(i)]['1'] += 1
		elif bit == '0':
			mcd[str(i)]['0'] += 1

most_common = ""
least_common = ""
for key in mcd:
	if mcd[key]['1'] > mcd[key]['0']:
		most_common += '1'
		least_common += '0'
	elif mcd[key]['1'] < mcd[key]['0']:
		least_common += '1'
		most_common += '0'
print('part1: ', int(most_common,2) *  int(least_common,2))


