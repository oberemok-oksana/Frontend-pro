// 1. Выведите с помощью цикла столбец чисел от 1 до 100. Показать решение.

// for (let i = 1; i < 100; i++) {
//   console.log(i);
// }

// 2. Выведите с помощью цикла столбец чисел от 100 до 1. Показать решение.

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100. Показать решение.

// for (let i = 2; i < 100; i = i + 2) {
//   console.log(i);
// }

// 4. Заполните массив 10-ю иксами с помощью цикла

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push("x");
// }
// console.log(arr);

// 5. Заполните массив числами от 1 до 10 с помощью цикла.

// let arr = [];

// for (let i = 1; i < 11; i++) {
//   arr.push(i);
// }
// console.log(arr);

// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   let randomNum = parseFloat(Math.random().toFixed(2));
//   arr.push(randomNum);
// }
// console.log(arr);

//7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   let randomNum = parseInt(Math.random() * 100);
//   arr.push(randomNum);
// }
// console.log(arr);

//8.  Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [1, 8, 20, 87, 5, 42, -1];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// 9.  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
//  Если такого элемента нет - ничего не выводите.

// let arr = [1, 8, 20, 87, 5, 42, -1];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     console.log("exist");
//     break;
//   }
// }

// 10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива

// let arr = [1, 8, 20, 87, 5, 42, -1]; //162
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1, 8, 20, 87, 5, 42, -1]; //1+64+400+7569+25+1764 +1 =9824
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i] * arr[i];
// }
// console.log(sum);

//12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let arr = [1, 8, 20, 87, 5, 42, -1];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// let result = sum / arr.length;
// console.log(result);

//  Write a JavaScript function to clone an array.

// function copyArray(arr) {
//   let arrCopy = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrCopy.push(arr[i]);
//   }
//   return arrCopy;
// }

// const arr = [1, 2, [4, 0]];
// const result = copyArray(arr);
// console.log(result);

// Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array

// function first(arr, amount) {
//   if (amount <= 0 || arr.length === 0) {
//     return [];
//   } else if (amount === undefined) {
//     return arr[0];
//   } else {
//     let newArr = [];
//     for (let i = 0; i < amount; i++) {
//       if (i < arr.length) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

//4. Write a JavaScript function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements of the array.

// function last(arr, n) {
//   if (n === undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       return arr[arr.length - 1];
//     }
//   }
//   if (n > 0) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (newArr.length < n) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr.reverse();
//   }
// }

// // Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2, 1], 4));
// console.log(last([7, 9, 0, -2], 6));
// console.log(last([7, 9, 0, -2, 1, 3, 4], 6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

//5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor

// function join(arr) {
//   return arr.join();//+
// }
// const arr = ["Red", "Green", "White", "Black"];
// console.log(join(arr));
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// Write a JavaScript program to sort the items of an array. Go to the editor

// const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// const sortedArr = arr1.sort();
// console.log(sortedArr); //[-4, 1, 2, 3, 3, 5, 6, 7, 8];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// Write a JavaScript program to find the max element  of an array.
// Sample array : const arr = [1, 8, 3, 2, 5, 9];

// function maxElem(arr) {
//   let maxElem = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (maxElem < arr[i]) {
//       maxElem = arr[i];
//     }
//   }
//   return maxElem;
// }

// const arr = [1, 12, 8, 3, 2, 5, 9, 5, 11];
// console.log(maxElem(arr));

//to find the min element  of an array.

// function minElem(arr) {
//   let minElem = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minElem) {
//       minElem = arr[i];
//     }
//   }
//   return minElem;
// }
// const arr = [17, 12, 8, 3, 4, 5, 9, 5, 11];
// console.log(minElem(arr));

//Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function reverse(str) {
// const splitStr = str.split("");
// const reverseArray = splitStr.reverse();
// const result = reverseArray.join("");

//   const result = str.split("").reverse().join("");
//   return result;
// }

// const str = "Stupid tasks";
// console.log(reverse(str));

// Какое число (длинну) мы получим?
// let arr = ["Ivan", "Ishtvan", "Olya"];
// let newArr = arr;
// newArr.push("Petya");
// console.log(arr.length); //4

//СОздайте массив users  с элементами 'Ivan' и 'Ishtvan'
// Добавьте 'Olya' в конец.
// Замените в 'Ishtvan' на 'Petya'.
// Ваш код для поиска значения должен работать для массивов с любой длиной
// Удалите первый элемент массива и покажите его .
// Вставьте 'Masha' и "Pasha" в начало массива

// let users = ["Ivan", "Ishtvan"];
// users.push("Olya"); // ["Ivan", "Ishtvan", "Olya"]
// for (let i = 0; i < users.length; i++) {
//   if (users[i] === "Ishtvan") {
//     users[i] = "Petya";
//   }
// } // ["Ivan", "Petya", "Olya"]

// console.log(users);
// let elem = users.shift();
// console.log(elem); // 'Ivan'
// users.unshift("Masha", "Pasha");
// console.log(users);// ["Masha", "Pasha", "Petya", "Olya"]

//Task 3
// удалить элемент 'Ishtvan' и возвратить его в переменную
// let arr = ["Ivan", "Ishtvan", "Olya"];
// let deletedElem = arr.splice(1, 1).join();
// console.log(deletedElem); // 'Ishtvan'
// console.log(arr); //['Ivan', 'Ishtvan', 'Olya']

// Task 4
//Сделать из строки массив
// let str = "Ivan,Sonya,Olya";
// let arr = str.split(",");
// console.log(arr);

//Задача . Методы substr, substring, slice
//  Дана строка 'aaa bbb ccc'
//  Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice).

// let str = "aaa bbb ccc";
// let first = str.substr(4, 3);
// console.log(first); //bbb
// let second = str.substring(4, 7);
// console.log(second); //bbb
// let third = str.slice(4, 7);
// console.log(third); //bbb

//Задача . Преобразование формата даты
//  В переменной date лежит дата в формате '2025-12-31'.
//  Преобразуйте эту дату в формат '31/12/2025'.
// let date = "2025-12-31";
// let reverse = date.split("-").reverse(); // ["31", "12", "2025"]
// let result = reverse.join("/");
// console.log(result);

// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

// function squareNumber(arr) {
//   let newArr = [];
//   arr.forEach((item) => newArr.push(item * item));
//   return newArr;
// }

// console.log(squareNumber([2, 5, 5]));

//Дан массив с числами. Найдите сумму этих чисел
// function sum(arr) {
//   let sum = 0;
//   arr.forEach((item) => (sum = sum + item));
//   return sum;
// }
// console.log(sum([5, 3, -2]));

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// function map(arr) {
//   let newArr = arr.map((item) => item * item);
//   return newArr;
// }
// console.log(map([5, 3, -2]));

//Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// function length(arr) {
//   let lengthArr = arr.map((item) => item.length);
//   return lengthArr;
// }
// console.log(length(["Oksana", "Vova", "Puma"]));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
//  состоящих из предыдущего, текущего и следующего символа строки str.
//  При написании данного кода, позаимствуйте у объека Array метод map.
// let str = "JavaScript";

// function map(str) {
//   let arr = str.split("");
//   console.log(arr);
//   let newArr = arr.map((item, i) => {
//     if (arr[i - 1] === undefined) {
//       return item.concat(arr[i + 1]);
//     } else if (arr[i + 1] === undefined) {
//       return arr[i - 1].concat(item);
//     } else {
//       return arr[i - 1].concat(item).concat(arr[i + 1]);
//     }
//   });
//   return newArr;
// }
// console.log(map(str));

//Дан массив с числами. Оставьте в нем только отрицательные числа
// function onlyNegativeNumbers(arr) {
//   let negativeNumbers = arr.filter((item) => item < 0);
//   return negativeNumbers;
// }
// console.log(onlyNegativeNumbers([2, -1, 5, -8, 1, 4, -7]));

//Дан массив с числами. Оставьте в нем только четные числа
// function evenNumbers(arr) {
//   let evenNumbers = arr.filter((item) => item % 2 === 0);
//   return evenNumbers;
// }
// console.log(evenNumbers([2, -1, 5, -8, 1, 4, -7]));

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// function strLength(arr) {
//   let longStrings = arr.filter((item) => item.length > 5);
//   return longStrings;
// }
// console.log(strLength(["Java", "JavaScript", "C++", "Phyton", "TypeScript"]));

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.
// function arrays(arr) {
//   let arrays = arr.filter((item) => Array.isArray(item));
//   return arrays;
// }
// let arr = [1, 2, [3, 4], 5, [6, 7], []];
// console.log(arrays(arr));

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// function countNegativeNumbers(arr) {
//   let count = arr.filter((item) => item < 0);
//   return count.length;
// }
// console.log(countNegativeNumbers([2, -1, 5, -8, 1, 4, -7]));

//Напишите функцию filterFalse(arr),
// которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
// function filterFalse(arr) {
//   let falseItems = arr.filter(
//     (item) =>
//       !Number.isNaN(item) &&
//       item !== false &&
//       item !== "" &&
//       item !== undefined &&
//       item !== null &&
//       item !== 0 &&
//       item !== -0
//   );
//   return falseItems;
// }

// arr = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// console.log(filterFalse(arr));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// function firstLetters(str) {
//   let arr = str.split(" ");
//   let firstLetters = arr.map((item) => item[0]);
//   return firstLetters;
// }

// let str = "Каждый охотник желает знать, где сидит фазан.";
// console.log(firstLetters(str));
