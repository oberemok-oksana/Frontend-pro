const height = parseFloat(prompt('Enter the height of rectangle'));

const width = parseFloat(prompt('Enter the width of rectangle'));

const area = height * width;

const perimeter = (height + width) * 2;

alert('The area of rectangle is ' + Math.round(area * 10) / 10 + ' and the perimeter is ' + Math.round(perimeter * 10) / 10);