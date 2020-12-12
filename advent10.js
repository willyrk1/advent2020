const toCounts = (counts, joltage, index, joltages) => {
	const countIndex = joltage - (index ? joltages[index - 1] : 0) - 1
	counts[countIndex] = (counts[countIndex] || 0) + 1
	return counts
}

const toPossibleCounts = (counts, joltage, index, joltages) => {
	if (index === joltages.length - 1) {
		counts[index] = 1
	}
	else {
		counts[index] = 0
		for (
			let nextIndex = index + 1;
			nextIndex <= joltages.length - 1 && joltages[nextIndex] <= joltages[index] + 3;
			nextIndex++
		) {
			counts[index] += counts[nextIndex]
		}
	}
	return counts
}

const part1 = joltages => {
	let counts = joltages.reduce(toCounts, [])
	return counts[0] * (counts[2] + 1)
}
const part2 = joltages => {
	const counts = joltages.reduceRight(toPossibleCounts, [])
	let finalCount = 0
	for (let index = 0; joltages[index] <= 3; index++) {
		finalCount += counts[index]
	}
	return finalCount
}

const outputFormatted = joltages =>
	`Day 8: Part 1 = ${part1(joltages)}, Part 2 = ${part2(joltages)}`
	
const byNumber = (a, b) => {
	if (a < b) return -1
	if (a > b) return 1
	return 0
}
const output = joltagesString => outputFormatted(joltagesString
	.trim()
	.split('\n')
	.map(joltage => +joltage)
	.sort(byNumber)
)

console.log(output(`
133
157
39
74
108
136
92
55
86
46
111
58
80
115
84
67
98
30
40
61
71
114
17
9
123
142
49
158
107
139
104
132
155
96
91
15
11
23
54
6
63
126
3
10
116
87
68
72
109
62
134
103
1
16
101
117
35
120
151
102
85
145
135
79
2
147
33
41
93
52
48
64
81
29
20
110
129
43
148
36
53
26
42
156
154
77
88
73
27
34
12
146
78
47
28
97
`))
