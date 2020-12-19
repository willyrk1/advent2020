
const part1 = initialState => {
	let state = initialState.reduce((acc, row, rowIndex) =>
		[...row].reduce((acc, column, columnIndex) => {
			if (column === '#') {
				acc[[columnIndex, rowIndex, 0].join(',')] = true
			}
			return acc
		}, acc), {}
	)
	let minX = 0, minY = 0, minZ = 0, maxZ = 0
	let maxX = initialState[0].length - 1
	let maxY = initialState.length
	
	for (let cycle = 0; cycle < 6; cycle++) {
		const nextState = {}
		for (let x = minX - 1; x <= maxX + 1; x++) {
			for (let y = minY - 1; y <= maxY + 1; y++) {
				for (let z = minZ - 1; z <= maxZ + 1; z++) {
					let neighborCount = 0
					for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
						for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
							for (let neighborZ = z - 1; neighborZ <= z + 1; neighborZ++) {
								if ((neighborX !== x || neighborY !== y || neighborZ !== z)
									&& state[[neighborX, neighborY, neighborZ].join()]
								) {
									neighborCount++
								}
							}
						}
					}
					const thisCoordinate = [x, y, z].join()
					if (neighborCount === 3 || (neighborCount === 2 && state[thisCoordinate])) {
						nextState[thisCoordinate] = true
						if (x < minX) minX = x
						if (x > maxX) maxX = x
						if (y < minY) minY = y
						if (y > maxY) maxY = y
						if (z < minZ) minZ = z
						if (z > maxZ) maxZ = z
					}
				}
			}
		}
		state = nextState
	}
	return Object.keys(state).length
}

const part2 = initialState => {
	let state = initialState.reduce((acc, row, rowIndex) =>
		[...row].reduce((acc, column, columnIndex) => {
			if (column === '#') {
				acc[[columnIndex, rowIndex, 0, 0].join(',')] = true
			}
			return acc
		}, acc), {}
	)
	let minX = 0, minY = 0, minZ = 0, maxZ = 0, minW = 0, maxW = 0
	let maxX = initialState[0].length - 1
	let maxY = initialState.length
	
	for (let cycle = 0; cycle < 6; cycle++) {
		const nextState = {}
		for (let x = minX - 1; x <= maxX + 1; x++) {
			for (let y = minY - 1; y <= maxY + 1; y++) {
				for (let z = minZ - 1; z <= maxZ + 1; z++) {
					for (let w = minW - 1; w <= maxW + 1; w++) {
						let neighborCount = 0
						for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
							for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
								for (let neighborZ = z - 1; neighborZ <= z + 1; neighborZ++) {
									for (let neighborW = w - 1; neighborW <= w + 1; neighborW++) {
										if ((neighborX !== x || neighborY !== y || neighborZ !== z || neighborW !== w)
											&& state[[neighborX, neighborY, neighborZ, neighborW].join()]
										) {
											neighborCount++
										}
									}
								}
							}
						}
						const thisCoordinate = [x, y, z, w].join()
						if (neighborCount === 3 || (neighborCount === 2 && state[thisCoordinate])) {
							nextState[thisCoordinate] = true
							if (x < minX) minX = x
							if (x > maxX) maxX = x
							if (y < minY) minY = y
							if (y > maxY) maxY = y
							if (z < minZ) minZ = z
							if (z > maxZ) maxZ = z
							if (w < minW) minW = w
							if (w > maxW) maxW = w
						}
					}
				}
			}
		}
		state = nextState
	}
	return Object.keys(state).length
}

const outputFormatted = initialState =>
	`Day 17: Part 1 = ${part1(initialState)}, Part 2 = ${part2(initialState)}`
	
const output = initialStateString => outputFormatted(initialStateString
	.trim()
	.split('\n')
)

console.log(output(`
.###.#.#
####.#.#
#.....#.
####....
#...##.#
########
..#####.
######.#
`))
