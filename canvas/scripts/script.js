let fruits = {
  apple: 20,
  bananas: 30,
  oranges: 50,
};

function allFruits() {
  let sum = 0;
  for (let f in fruits) {
    sum = sum + fruits[f];
  }
  return sum;
}

let sum = allFruits();

function fruitAngle(sum, fruit) {
  return (fruit / sum) * 360;
}
console.log(fruitAngle(sum, fruits.apple));
console.log(fruitAngle(sum, fruits.bananas));
console.log(fruitAngle(sum, fruits.oranges));

document.addEventListener("DOMContentLoaded", () => {
  let cvs = document.querySelector(".cvs");
  let context = cvs.getContext("2d");

  function createCircle() {
    context.beginPath();
    context.moveTo(250, 150);
    let startAngle = 0;
    let endAngle = startAngle + (Math.PI / 180) * fruitAngle(sum, fruits.apple);
    context.arc(250, 150, 100, startAngle, endAngle, false);
    context.closePath();
    context.fillStyle = "#329000";
    context.fill();
    startAngle = endAngle;

    context.beginPath();
    context.moveTo(250, 150);
    endAngle = startAngle + (Math.PI / 180) * fruitAngle(sum, fruits.bananas);
    context.arc(250, 150, 100, startAngle, endAngle, false);
    context.closePath();
    context.fillStyle = "#FFFD40";
    context.fill();
    startAngle = endAngle;

    context.beginPath();
    context.moveTo(250, 150);
    endAngle = startAngle + (Math.PI / 180) * fruitAngle(sum, fruits.oranges);
    context.arc(250, 150, 100, startAngle, endAngle, false);
    context.closePath();
    context.fillStyle = "#FF8900";
    context.fill();
    startAngle = endAngle;
  }

  createCircle();
});
