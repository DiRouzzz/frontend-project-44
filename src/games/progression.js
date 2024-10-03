#!/usr/bin/env node
import { numberGenerator, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

function progression(start, step, length) {
  const progress = [];
  for (let i = start; progress.length < length; i += step) {
    progress.push(i);
  }
  return progress;
}

const generateRound = () => {
  const start = numberGenerator(1, 30);
  const step = numberGenerator(1, 10);
  const length = numberGenerator(5, 10);
  const progress = progression(start, step, length);
  const indexHidden = getRandomIndex(progress);
  const correctAnswer = progress[indexHidden].toString();
  progress[indexHidden] = '..';
  const question = progress.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
