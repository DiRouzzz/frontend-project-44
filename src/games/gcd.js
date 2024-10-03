#!/usr/bin/env node
import { numberGenerator } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = numberGenerator(1, 20);
  const num2 = numberGenerator(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
