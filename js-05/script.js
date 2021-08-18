// Написать функцию , которая принимает строку и подсчитывает в ней число пробелов и тегов <br/>
// результат в виде alert « Вы ввели стоку: ……………., в ней ХХ пробелов и УУ переводов строки»

// function countSpace(str) {
//   let words = str.split(" ");
//   let spacesAmount = words.length - 1;
//   let lines = str.split("<br/>");
//   let linesAmount = lines.length - 1;

//   alert(
//     `Вы ввели стоку:${str}., в ней ${spacesAmount} пробелов и ${linesAmount} переводов строки»`
//   );
// }
// let str = prompt("Введите строку");
// countSpace(str);
//Первый вариант решения закомментирован,чтобы не переименовывать переменные

function countSpaces(str) {
  let spacesAmount = 0;
  let linesAmount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spacesAmount++;
    }
    if (str[i] === "<") {
      let br = str.slice(i, i + 5);
      if (br === "<br/>") linesAmount++;
    }
  }
  alert(
    `Вы ввели стоку:${str}., в ней ${spacesAmount} пробелов и ${linesAmount} переводов строки»`
  );
}
let str = prompt("Введите строку");
countSpaces(str);

// Написать функцию , которая принимает количество слов и генерирует текст из этого количества слов
// Дополнительно*:
// использовать Math.random() для генерации кода символа

function makeWords(num) {
  let words = "";

  for (let j = 0; j < num; j++) {
    let wordLength = Math.round(Math.random() * 9) + 1;

    for (let i = 0; i < wordLength; i++) {
      let code = Math.round(Math.random() * 25) + 97;
      let symbol = String.fromCharCode(code);
      words = words.concat(symbol);
    }
    words = words + " ";
  }

  return words;
}

alert(makeWords(5));

//Написать функцию , которая принимает строку и слово и возвращает массив всех положений данного слова в строке

function isIncluded(str, word) {
  let index;
  let indices = [];
  do {
    index = str.indexOf(word, index + 1);
    if (index > 0) {
      indices.push(index);
    }
  } while (index !== -1);

  console.log(indices);
}

console.log(isIncluded("Hello World, hi World, Bye", "World")); // [7, 22]

//Написать функцию , которая принимает название задачи и добавляет ее в массив по алфавиту

function add(newTask, tasks) {
  for (let i = 0; i < tasks.length; i++) {
    let comparing = tasks[i].localeCompare(newTask);
    if (comparing > 0) {
      tasks.splice(i, 0, newTask);
      break;
    }
  }
}
let tasks = ["add task", "do the dishes", "water plants"];
add("add zebra", tasks);
console.log(tasks);

// function addTask(newTask, tasks) {
//   tasks.push(newTask);
//   tasks.sort();
// }
// let tasks = ["add task", "do the dishes", "water plants"];
// addTask("Buy milk", tasks);
// console.log(tasks);
