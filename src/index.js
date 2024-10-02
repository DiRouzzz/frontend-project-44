import readlineSync from 'readline-sync'

export default (description, generateRound) => {
	console.log('Welcome to the Brain Games!')
	const playerName = readlineSync.question('May I have your name? ')
	console.log(`Hello, ${playerName}!`)
	console.log(description)

	game(3);

	function game(attempt) {
		if (attempt === 0) {
			return console.log(`Congratulations, ${playerName}!`)
		}
		const [question, correctAnswer] = generateRound()
		console.log(`Question: ${question}`)
		const playerAnswer = readlineSync.question('Your answer: ')
		if (playerAnswer !== correctAnswer) {
			console.log(
				`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
			)
			console.log(`Let's try again, ${playerName}!`)
			return
		}
		console.log('Correct!')
		return game(attempt - 1)
	}
}