#!/usr/bin/env node

import run from '../index.js';
import { numberGenerator } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);
const generateRound = () => {
  const number = numberGenerator(1, 50);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

