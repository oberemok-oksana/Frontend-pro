const blindsWidth = parseFloat(prompt("Enter width of blinds in centimeters"));
const blindsHeight = parseFloat(
  prompt("Enter height of blinds in centimeters")
);
const material = parseInt(
  prompt(
    "Choose the blind's material:\n 1 - Plastic \n 2 - Textile \n 3 - Aluminum"
  )
);

const blindsSquare = (blindsHeight * blindsWidth) / 10000;
let price;
if (material === 1) {
  price = 200;
} else if (material === 2) {
  price = 250;
} else if (material === 3) {
  price = 350;
}
const total = Math.round(blindsSquare * price * 100) / 100;
const roundedSquare = Math.ceil(blindsSquare * 100) / 100;
alert(
  "Price per m^2: " +
    price +
    " UAH\nSquare: " +
    roundedSquare +
    " m^2\nTotal: " +
    total +
    " UAH"
);
