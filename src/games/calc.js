#!/usr/bin/env node
import { numberGenerator, getRandomIndex } from '../utils.js';
import run from '../index.js';
const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
	switch (operator) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		default:
			throw new Error(`There is no such operator like '${operator}'!`);
	}
}

const generateRound = () => {
	const num1 = numberGenerator(1, 50);
	const num2 = numberGenerator(1, 50);
	const operator = operators[getRandomIndex(operators)];
	const question = `${num1} ${operator} ${num2}`;
	const correctAnswer = calculate(num1, num2, operator).toString();
	return [question, correctAnswer];
}

export default () => {
	run(description, generateRound);
}
