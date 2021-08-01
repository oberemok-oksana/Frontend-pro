const firstNumber = parseInt(prompt("Enter the first number"));
const secondNumber = parseInt(prompt("Enter the second number"));
const thirdNumber = parseInt(prompt("Enter the third number"));
const forthNumber = parseInt(prompt("Enter the forth number"));
const fifthNumber = parseInt(prompt("Enter the fifth number"));

const result = Math.max(
  firstNumber,
  secondNumber,
  thirdNumber,
  forthNumber,
  fifthNumber
);

alert("The max number is: " + result);
