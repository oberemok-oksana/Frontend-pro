// Стандартный размер обойного рулона - 10,05 м длины на 0,53 м ширины.

const rollsLength = 10.05;
const rollsWidth = 0.53;

const ceilingsHeight = parseFloat(
  prompt("Enter height of your ceiling in meters")
);
const roomsWidth = parseFloat(prompt("Enter width of your room in meters"));
const roomsLength = parseFloat(prompt("Enter length of your room in meters"));
const windowsAmount = parseInt(prompt("Enter amount of windows in your room"));
const windowsHeight = parseFloat(
  prompt("Enter height of your window in meters")
);
const windowsWidth = parseFloat(prompt("Enter width of your window in meters"));
const doorsHeight = parseFloat(prompt("Enter height of your door in meters"));
const doorsWidth = parseFloat(prompt("Enter width of your door in meters"));

const wallsSquare =
  2 * (ceilingsHeight * roomsWidth + ceilingsHeight * roomsLength);
const doorsSquare = doorsHeight * doorsWidth;
const windowsSquare = windowsHeight * windowsWidth * windowsAmount;

const roomsSquare = wallsSquare - doorsSquare - windowsSquare;
const rollsSquare = rollsLength * rollsWidth;
const rollsAmount = Math.ceil(roomsSquare / rollsSquare);

alert("You need: " + rollsAmount + " rolls.");
