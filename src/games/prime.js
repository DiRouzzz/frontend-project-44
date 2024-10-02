#!/usr/bin/env node
import { numberGenerator } from '../utils.js'
import run from '../index.js'

const description =
	'Answer "yes" if given number is prime. Otherwise answer "no".'

function isPrime(num) {
	let k = Math.sqrt(num)
	if (num <= 1) {
		return false
	}

	for (let i = 2; i <= k; i++) {
		if (num % i === 0) return false
	}
	return true
}

const generateRound = () => {
	const number = numberGenerator(2, 999)
	const question = number.toString()
	const correctAnswer = isPrime(number) ? 'yes' : 'no'
	return [question, correctAnswer]
}

export default () => {
	run(description, generateRound)
}