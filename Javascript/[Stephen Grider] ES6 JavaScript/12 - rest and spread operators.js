//! - rest operator

function addNumbers(...numbers) {
	console.log(...numbers);
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5));

//! - spread operator

const defaultColors = ["red", "green"];
const userFavColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orrange"];

console.log(defaultColors.concat(userFavColors));

var newArr = ["blue", ...fallColors, ...defaultColors, ...userFavColors];
newArr;

//! - mixing spread and rest

function validateShoppingList(...items) {
	if (items.indexOf("milk") < 0) {
		return ["milk", ...items];
	}
}

console.log(validateShoppingList("oranges", "bread"));

const MathLibrary = {
	calculateProduct(...rest) {
		console.log("Please use the multiply method instead");
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	},
};

console.log(MathLibrary.calculateProduct(2, 3));

//! Exercise 1 - Many, Many Arguments

/* Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'. */

function product(...numbers) {
	return numbers.reduce(function (acc, number) {
		return acc * number;
		s;
	}, 1);
}

console.log(product(1, 2, 3));

//! Exercise 2 - Spreadin' Arrays

/* Refactor the following to use the spread operator.*/

function join(array1, array2) {
	return [...array1, ...array2];
}

//! Exercise 2 - Mixing Rest and Spread

/* Refactor the following to use the only the rest operator */

const unshift = (array, ...items) => [...items, ...array];
