const firstNum = parseFloat(prompt('Enter your first number please'));
const secondNum = parseFloat(prompt('Enter your second number please'));
const thirdNum = parseFloat(prompt('Enter your third number please'));

const result = (firstNum + secondNum + thirdNum) / 3;

alert('Avarage mean: ' + Math.round(result * 10) / 10);