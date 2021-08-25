//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.понадобятся следующие методы: concat.
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let thirdArr = firstArr.concat(secondArr);
console.log(thirdArr);

// понадобятся следующие методы: reverse.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr = [1, 2, 3];
let newArr = arr.reverse();
console.log(newArr);

//понадобятся следующие методы: push, unshift.
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let array = [1, 2, 3];
array.push(4);
array.push(5);
array.push(6);
console.log(array);

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arrOfNumbers = [1, 2, 3];
arrOfNumbers.unshift(6);
arrOfNumbers.unshift(5);
arrOfNumbers.unshift(4);
console.log(arrOfNumbers);

//онадобятся следующие методы: shift, pop.
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let lanquagesArr = ["js", "css", "jq"];
let firstElem = lanquagesArr.shift();
console.log(firstElem);

//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let lastElem = lanquagesArr.pop();
console.log(lastElem);

//понадобятся следующие методы: slice.
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let numbersArr = [1, 2, 3, 4, 5];
let newNumbersArr = numbersArr.slice(0, 3);
console.log(newNumbersArr);
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let newNumbersArr2 = numbersArr.slice(3);
console.log(newNumbersArr2);

//понадобятся следующие методы: sort.
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let unSortedArr = [3, 4, 1, 2, 7, 13];

let sortedArr = unSortedArr.sort((a, b) => a - b);
console.log(sortedArr);

//понадобятся следующие методы: Object.keys.
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let object = {
  js: "test",
  jq: "hello",
  css: "world",
};

let keys = Object.keys(object);
console.log(keys);

//сonst arr = [1,2,3];
// 1)С помощью рекурсии последовательно выведем элементы массива.
// func(arr); //1,2,3

function getNumber(arr) {
  if (arr.length === 0) {
    return;
  } else {
    console.log(arr[0]);
    getNumber(arr.slice(1));
  }
}
getNumber([1, 2, 3]);

// 2)С помощью рекурсии найдем сумму элементов этого массива. (console.log(getSum(arr)); // выведет 6)

function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + recursiveSum(arr.slice(1));
  }
}

console.log(recursiveSum([1, 2, 3]));
