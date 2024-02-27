//! ---------------------------------------------------------------------- forEach

var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// muito menos lógica do que a acima
colors.forEach(function (color) {
	console.log(color);
});

// create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// create a variable to hold the sum
var sum = 0;

// pode declarar a fn fora e passar a referencia no forEach
function adder(number) {
	sum += number;
}

// loop over the array incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
sum;

//! Exercise #2
var images = [
	{ height: 10, width: 30 }, // cada elemento aqui é a 'image'
	{ height: 20, width: 90 },
	{ height: 54, width: 32 },
];
var areas = [];

images.forEach(function (image) {
	areas.push(image.height * image.width);
});

console.log(areas);
