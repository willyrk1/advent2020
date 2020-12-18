
const toAnswer = (numbers, ask) => {
	const spokenNumbers = new Array(ask)
	let lastSpoken = -1
	for (let turn = 1; turn <= ask; turn++) {
		const spoken = (turn <= numbers.length)
			? numbers[turn - 1]
			: spokenNumbers[lastSpoken]
			? turn - 1 - spokenNumbers[lastSpoken]
			: 0
		spokenNumbers[lastSpoken] = turn - 1
		lastSpoken = spoken
	}
	return lastSpoken
}

const part1 = numbers => toAnswer(numbers, 2020)
const part2 = numbers => toAnswer(numbers, 30000000)

const outputFormatted = numbers =>
	`Day 15: Part 1 = ${part1(numbers)}, Part 2 = ${part2(numbers)}`
	
const output = numbersString => outputFormatted(numbersString.split(','))

console.log(output('16,1,0,18,12,14,19'))
