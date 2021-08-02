alert("Quadratic equation: a*x^2 + b*x + c = 0");
const a = parseFloat(prompt("Enter a"));
const b = parseFloat(prompt("Enter b"));
const c = parseFloat(prompt("Enter c"));

const d = Math.pow(b, 2) - 4 * a * c;

if (d === 0) {
  let x = -b / (2 * a);
  alert("x = " + x);
} else if (d > 0) {
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  alert("x1 = " + x1 + "; x2 = " + x2);
} else {
  alert("No solution in real numbers are present.");
}
