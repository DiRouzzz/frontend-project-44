import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
evenOdd(numberGenerator(1, 50), 3)

function evenOdd(generator, attempt) {
	if (attempt === 0) {
		return console.log(`Congratulations, ${name}!`)
	}

	console.log('Question: ' + generator)
	const question = readlineSync.question('Your answer: ')
	if (
		(generator % 2 === 0 && question === 'yes') ||
		(generator % 2 !== 0 && question === 'no')
	) {
		console.log('Correct!')

		return evenOdd(numberGenerator(1, 50), attempt - 1)
	} else {
		return console.log(
			`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`
		)
	}
}

function numberGenerator(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
