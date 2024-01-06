#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const brainCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = generateRandomNumber(1, 25);
    const num2 = generateRandomNumber(1, 10);
    const operator = Object.keys(operations)[generateRandomNumber(0, 3)];
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(operations[operator](num1, num2));

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

brainCalcGame();
/* eslint-enable no-console */
