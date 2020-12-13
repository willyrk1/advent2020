const part1 = ([startTime, busLines]) => {
	const { lineNumber, waitTime } = busLines
		.split(',')
		.filter(lineNumber => lineNumber !== 'x')
		.map(interval => ({
			lineNumber: interval,
			waitTime: (startTime % interval) ? interval - (startTime % interval) : 0
		}))
		.reduce((acc, curr) => acc.waitTime < curr.waitTime ? acc : curr)
	
	return lineNumber * waitTime
}

const toAnswer = ({increment, current}, { interval, index }) => {
	while ((current + index) % interval)
		current += increment
	return { increment: increment * interval, current }
}

const part2 = ([, intervals]) => intervals
	.split(',')
	.map((interval, index) => ({ interval, index }))
	.filter(({ interval }) => interval !== 'x')
	.reduce(toAnswer, { increment: 1, current: 0 })
	.current

const outputFormatted = busInfo =>
	`Day 13: Part 1 = ${part1(busInfo)}, Part 2 = ${part2(busInfo)}`
	
const output = busInfoString => outputFormatted(busInfoString
	.trim()
	.split('\n')
)

console.log(output(`
1000052
23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,863,x,x,x,x,x,x,x,x,x,x,x,19,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,571,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41
`))
