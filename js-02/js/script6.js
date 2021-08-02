alert("Linear Equation: a * x + b = 0");
const a = parseFloat(prompt("Enter a"));
const b = parseFloat(prompt("Enter b"));

if (a === 0) {
  alert("a can not be 0. Try again.");
} else {
  const x = -b / a;
  alert("x = " + x);
}
