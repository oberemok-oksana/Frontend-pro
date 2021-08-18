//в стрелочных функция один параметр в скобках, потому что так сохраняет prettier

function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

console.log(map(["one", "two"], (s) => s[0].toUpperCase() + s.slice(1))); // ["One","Two"]

function some(array, f) {
  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {
      return true;
    }
  }
  return false;
}
console.log(some(["one", "two"], (s) => s === "one")); //true
console.log(some(["one", "two"], (s) => s === "rrr")); //false

function every(array, f) {
  for (let i = 0; i < array.length; i++) {
    if (f(array[i]) === false) {
      return false;
    }
  }
  return true;
}

console.log(every(["one", "two"], (s) => s === "one")); //false
console.log(every(["one", "two"], (s) => s.length == 3)); //true

// доп. - reduce(arr, predicate,startValue)

function reduce(arr, f, startValue) {
  let result = startValue;
  for (let i = 0; i < arr.length; i++) {
    result = f(result, arr[i]);
  }
  return result;
}
console.log(reduce([0, 1, 2, 3, 4], (prev, current) => prev + current, 0)); // -> 10
console.log(reduce([1, 2, 3, 4], (prev, current) => prev * current, 1)); //24

// Задача 2

const personsInfo = [
  {
    name: "Alex",
    surname: "Petrunko",
    patronymic: "Ivanovich",
    phone: "0995551223",
  },
  {
    name: "Olga",
    surname: "Oganesian",
    patronymic: "Antonovna",
    phone: "0931256532",
  },
  {
    name: "Polina",
    surname: "Pylypenko",
    patronymic: "Arturovna",
    phone: "0952363623",
  },
  {
    name: "Vladymyr",
    surname: "Stognenko",
    patronymic: "Vladymyrovich",
    phone: "0978236623",
  },
];

function isInPersonsInfo(array) {
  return array.filter((item) => item.name[0] === item.surname[0]);
}
console.log(isInPersonsInfo(personsInfo));

function turnIntoInitials(array) {
  return array.map(
    (item) => item.surname + " " + item.name[0] + "." + item.patronymic[0] + "."
  );
}
console.log(turnIntoInitials(personsInfo));

// в) Осуществить поиск контактов по массиву по началу номера телефона (контакт = имя+телефон)
function showContacts(array, num) {
  let filteredArray = array.filter((item) => item.phone.startsWith(num));
  return filteredArray.map((item) => item.name + " " + item.phone);
}

console.log(showContacts(personsInfo, "093"));

//  г) Проверить наличие телефонного номера среди массива контактов

function findMatch(array, phone) {
  return array.some((item) => item.phone === phone);
}
console.log(findMatch(personsInfo, "0978236623")); //true
