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
    let startAngle = 0;
    let colors = [
      "#FF6633",
      "#FFB399",
      "#FF33FF",
      "#FFFF99",
      "#00B3E6",
      "#E6B333",
      "#3366E6",
      "#999966",
      "#99FF99",
      "#B34D4D",
      "#80B300",
      "#809900",
      "#E6B3B3",
      "#6680B3",
      "#66991A",
      "#FF99E6",
      "#CCFF1A",
      "#FF1A66",
      "#E6331A",
      "#33FFCC",
      "#66994D",
      "#B366CC",
      "#4D8000",
      "#B33300",
      "#CC80CC",
      "#66664D",
      "#991AFF",
      "#E666FF",
      "#4DB3FF",
      "#1AB399",
      "#E666B3",
      "#33991A",
      "#CC9999",
      "#B3B31A",
      "#00E680",
      "#4D8066",
      "#809980",
      "#E6FF80",
      "#1AFF33",
      "#999933",
      "#FF3380",
      "#CCCC00",
      "#66E64D",
      "#4D80CC",
      "#9900B3",
      "#E64D66",
      "#4DB380",
      "#FF4D4D",
      "#99E6E6",
      "#6666FF",
    ];
    let colorIndex = 0;
    for (let fruit in fruits) {
      context.beginPath();
      context.moveTo(250, 150);
      let endAngle =
        startAngle + (Math.PI / 180) * fruitAngle(sum, fruits[fruit]);
      context.arc(250, 150, 100, startAngle, endAngle, false);
      context.closePath();

      context.fillStyle = colors[colorIndex];
      colorIndex += 1;
      context.fill();
      startAngle = endAngle;
    }
  }

  createCircle();
});