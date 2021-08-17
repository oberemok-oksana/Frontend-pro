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
