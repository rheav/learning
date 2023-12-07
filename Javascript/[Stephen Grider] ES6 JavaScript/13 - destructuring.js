var expense = {
	type: "business",
	amount: "$45 USD",
};

/* var type = expense.type;
var amount = expense.amount;

type;
amount; */

// ES6
const { type, amount } = expense;
type;
amount;

// Aula 2

// ES 5
var savedFile = {
	extension: "jpg",
	name: "repost",
	size: 14040,
};

function fileSummary(file) {
	return `The file ${file.name}.${file.extension} is of size ${file.size}.`;
}

console.log(fileSummary(savedFile));

// ES6
var savedFileES6 = {
	extension: "jpg",
	name: "repost",
	size: 14040,
};

function fileSummaryES6({ extension, name, size }, { color }) {
	return `The file ${name}.${extension} is of size ${size} - icon with the color ${color}.`;
}

console.log(fileSummaryES6(savedFileES6, { color: "red" }));

// Aula 3

const companies = ["Google", "Facebook", "Uber"];

const [firstCompany] = companies;
firstCompany;

// Aula 4

/* const newCompanies = [
	{ name: "Google", location: "Mountain View" },
	{ name: "Facebook", location: "Menlo Park" },
	{ name: "Uber", location: "San Francisco" },
];

// Google location

const [{location}] = newCompanies;
location; */

const google = {
	locations: ["Mountain View", "New York", "London"],
};

const {
	locations: [location],
} = google;

location;

// Aula 4

// Aula 5

const points = [
	[4, 5],
	[10, 1],
	[0, 40],
];

var mappedPoints = points.map(([x, y]) => {
	return { x, y }; //improved object literal -> x:x,y:y
});

mappedPoints;

//! Exercise 1 -> Destructuring in Practice

/* The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?

 */

const profile = {
	title: "Engineer",
	department: "Engineering",
};

function isEngineer({ title, department }) {
	return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer(profile));

//! Exercise 2 -> Array Destructuring in Practice

/* The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher] 

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]*/

const classes = [
	["Chemistry", "9AM", "Mr. Darnick"],
	["Physics", "10:15AM", "Mrs. Lithun"],
	["Math", "11:30AM", "Mrs. Vitalis"],
];

let classesAsObject = {};

classesAsObject = classes.map(([subject, time, teacher]) => {
	return { subject, time, teacher };
});

classesAsObject;

//! Exercise 3 -> Recursion with Destructuring
//? This one is probably the hardest exercise in the entire course!

/* Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :) 

Input: double([1,2,3]) 

Output [2,4,6] 

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array? */

const numbers = [1, 2, 3];
let newNumbers = [];

function double([num, ...rest]) {
	if (!num) {
		return [];
	}

	return [num * 2, ...double(rest)];
}
double(numbers);
newNumbers;
