const day = parseInt(prompt("Enter the day"));
const month = parseInt(prompt("Enter the month"));
const year = parseInt(prompt("Enter the year"));
let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
let correct;

if (
  (month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12) &&
  day > 0 &&
  day < 32
) {
  correct = true;
} else if (
  (month === 4 || month === 6 || month === 9 || month === 11) &&
  day > 0 &&
  day < 31
) {
  correct = true;
} else if (leapYear && month === 2 && day > 0 && day < 30) {
  correct = true;
} else if (!leapYear && month === 2 && day > 0 && day < 29) {
  correct = true;
} else {
  correct = false;
}

let date = day + "." + month + "." + year;

if (correct) {
  alert(date + " is correct!");
} else {
  alert(date + " is invalid date");
}
