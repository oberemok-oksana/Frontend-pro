//Task #1

function getFactorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

const num = parseInt(prompt("Enter the number to count factorial"));
const factorial = getFactorial(num);
alert("The factorial from " + num + " = " + factorial);

// Task #2

function getPow(number, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * number;
  }
  return result;
}

const number = parseFloat(prompt("Enter the number for counting in pow"));
const pow = parseInt(prompt("Enter the pow"));
const res = getPow(number, pow);

alert("The result is: " + res);

// Task #3

function getLeastCommonMultiple(number1, number2) {
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  let result = max;

  while (result % min !== 0) {
    result = result + max;
  }
  return result;
}

const firstNum = parseInt(prompt("Enter the first number for LCM"));
const secondNum = parseInt(prompt("Enter the second number for LCM"));
const result = getLeastCommonMultiple(firstNum, secondNum);
alert("The least common multiple for your numbers is: " + result);

// Task #4

function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    let remainder = num % 10;
    num = Math.trunc(num / 10);
    result = result * 10 + remainder;
  }
  return result;
}

const numForReverse = parseInt(prompt("Enter the number for reversing"));
const outcome = reverseNumber(numForReverse);
alert("The result is: " + outcome);
