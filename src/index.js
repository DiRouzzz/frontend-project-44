import readlineSync from 'readline-sync';

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  const inGame = (attempt) => {
    if (attempt === 0) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(
        `"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );

      return console.log(`Let's try again, ${playerName}!`);
    }
    console.log('Correct!');
    return inGame(attempt - 1);
  };

  inGame(3);
};
