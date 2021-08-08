// 1) функция принимает массив и возвращает сумму всех его элементов

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const arr = [1, 8, 20, 87, 5, 42, -1];
// const result = sum(arr);
// console.log(result);

// 2) функция принимает массив и искомое значение и возврат его индекс в массиве, если значение найдено, если нет - то -1

function findIndex(arr, item) {
  // let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    } else {
      index = -1;
    }
  }
  return index;
}

const arr = [1, 8, 20, 87, 5, 42, 2];
const result = findIndex(arr, 8);
console.log(result);

// 3) функция принимает 2 массива и возвращает новый, состоящий из элементов обоих массивов
