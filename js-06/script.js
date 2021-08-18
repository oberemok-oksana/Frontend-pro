// реализовать функции для работы с массивами: map(arr, mapper),
// some(arr, predicate),
// every(arr, predicate),

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

// function reduce(arr, f, startValue) {
//   for (let i = 0; i < arr.length; i++){

//   }

// }
