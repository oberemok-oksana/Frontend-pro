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
