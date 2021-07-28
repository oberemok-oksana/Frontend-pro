// Цельсий х 1,8 + 32 = Фаренгейт 

const celsius = parseFloat(prompt('Enter the celsius degree temperature, please'));

const fahrenheit = celsius * 1.8 + 32;

alert('Temperature in Fahrenheit is ' + Math.round(fahrenheit * 100) / 100);