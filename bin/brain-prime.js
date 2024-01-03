import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log('Wrong answer :(.');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainPrimeGame();
