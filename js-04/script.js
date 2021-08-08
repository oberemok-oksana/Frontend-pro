// 1) функция принимает массив и возвращает сумму всех его элементов

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const arrForSum = [1, 8, 20, 87, 5, 42, -1];
const result = sum(arrForSum);
console.log(result);

// 2) функция принимает массив и искомое значение и возврат его индекс в массиве, если значение найдено, если нет - то -1

function findIndex(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 8, 20, 87, 5, 42, 2];
const res = findIndex(arr, 20);
console.log(res);

// 3) функция принимает 2 массива и возвращает новый, состоящий из элементов обоих массивов

function concatArrays(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
}

const arr1 = [2, 5, 13, 6];
const arr2 = [1, 15, 9, 25, 7];
const outcome = concatArrays(arr1, arr2);
console.log(outcome);
