#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const brainProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;

  for (let i = 0; i < 3; i += 1) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 10);
    const step = getRandomInt(1, 10);
    const progression = generateProgression(length, start, step);
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainProgressionGame();

/* eslint-enable no-console */
