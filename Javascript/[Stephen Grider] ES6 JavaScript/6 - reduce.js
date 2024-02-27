var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

sum;

// Reduce
const reducedArr = numbers.reduce((sum, number) => sum + number, 0);
reducedArr;

//! Part 2

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

const reducedColors = primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);
	return previous;
}, []);

reducedColors;

//! Part 3

function balancedParens(string) {
	return !string.split("").reduce((previous, char) => {
		if (previous < 0) {
			return previous; // se o ) é -1 e o ( é +1, return se previous <0 não altera o previous, assim não 'anluando' positivo com negativo se fora de ordem
		}
		if (char === "(") {
			return ++previous;
		}
		if (char === ")") {
			return --previous;
		}
		return previous;
	}, 0);
}

console.log(balancedParens("(((("));
console.log(balancedParens("()()"));
console.log(balancedParens(")("));

//! Exercise #1 - Distance Traveled

/* 
Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance' */

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
trips;

var totalDistance = trips.reduce((sum, trip) => {
	return sum + trip.distance;
}, 0);

totalDistance;

//! Exercise #2 - Reducing Properties

/* Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
 */

var desks = [{ type: "sitting" }, { type: "standing" }, { type: "sitting" }, { type: "sitting" }, { type: "standing" }];

var deskTypes = desks.reduce(
	function (sorter, obj) {
		if (obj.type === "sitting") {
			sorter.sitting++;
		}

		if (obj.type === "standing") {
			sorter.standing++;
		}

		return sorter;
	},
	{ sitting: 0, standing: 0 }
);

deskTypes;

//! Exercise #3 - Hardmode: Custom 'Unique' Helper

/* Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  */

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
	return array.reduce((sum, item) => {
		if (!sum.includes(item)) {
			sum.push(item);
		}

		return sum;
	}, []);
}

console.log(unique(numbers));
