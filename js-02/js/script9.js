const fuelCapacity = parseFloat(
  prompt("Enter the capacity of the aircraft tank in liters")
);
const existedFuelsAmount = parseFloat(
  prompt("Enter the amount of existed fuel in the aircraft tank")
);
const cargoWeight = parseFloat(prompt("Enter the weight of the cargo"));
const distanceAC = parseFloat(
  prompt("Enter the distance between A and C in km")
);
const distanceCB = parseFloat(
  prompt("Enter the distance between C and B in km")
);

let fuelConsumption;

if (cargoWeight > 0 && cargoWeight < 1) {
  fuelConsumption = 0.25;
} else if (cargoWeight >= 1 && cargoWeight < 2) {
  fuelConsumption = 0.3;
} else if (cargoWeight >= 2 && cargoWeight < 3) {
  fuelConsumption = 0.35;
} else if (cargoWeight >= 3 && cargoWeight < 4) {
  fuelConsumption = 0.42;
} else if (cargoWeight >= 4 && cargoWeight < 5) {
  fuelConsumption = 0.5;
}
const neededFuelsAmountForAC = distanceAC * fuelConsumption;
const neededFuelsAmountForCB = distanceCB * fuelConsumption;
const refueling =
  (existedFuelsAmount - neededFuelsAmountForAC - neededFuelsAmountForCB) * -1;

if (cargoWeight >= 5) {
  alert("The cargo is too heavy for this plane!");
} else if (existedFuelsAmount - neededFuelsAmountForAC < 0) {
  alert("It's not enough fuel for flight to destination C");
} else if (
  existedFuelsAmount - neededFuelsAmountForAC - neededFuelsAmountForCB >=
  0
) {
  alert(
    "Everything is ok. The amount of fuel is enough for flight to destination C and B."
  );
} else if (refueling <= fuelCapacity) {
  alert(
    "Everything is ok, but in destination C the plane has to be refueled with " +
      refueling +
      " liters"
  );
} else if (refueling > fuelCapacity) {
  alert("The plane will not reach destination B even with refueling ");
} else {
  alert("Something went wrong...");
}
