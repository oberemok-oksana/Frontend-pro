let secondsString = prompt("Enter seconds");

if (secondsString == "") {
  alert("Please, enter seconds. I can't count without a number!");
  secondsString = prompt("Enter seconds");
}

const seconds = parseInt(secondsString);
const valueInHours = Math.trunc(seconds / 3600);
const remainderFromHours = seconds % 3600;
const valueInMinutes = Math.trunc(remainderFromHours / 60);
const valueInSeconds = remainderFromHours % 60;
alert(
  "It's: " +
    valueInHours +
    " hours " +
    valueInMinutes +
    " minutes " +
    valueInSeconds +
    " seconds"
);
