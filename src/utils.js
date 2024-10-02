function numberGenerator(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomIndex(index) {
    return Math.floor(Math.random() * index.length)
}

export {getRandomIndex, numberGenerator}