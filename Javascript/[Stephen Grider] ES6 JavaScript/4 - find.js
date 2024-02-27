//! ---------------------------------------------------------------------- find

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

var user;

/* for (var i = 0; i < users.length; i++) {
	if (users[i].name === "Alex") {
		user = users[i];
		break;
	}
} */

user = users.find((user) => user.name === "Alex");

user;

//z0 ----------------------------------------------------------------------

function Car(model) {
	this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

var foundCar = cars.find((car) => car.model === "Focus");

foundCar;

//z0 ----------------------------------------------------------------------

var posts = [
	{ id: 1, title: "New Post" },
	{ id: 1, title: "Old Post" },
];

var comment = { postId: 1, content: "Great post" };

var postForComment = posts.find((post) => comment.postId === post.id);
postForComment;

//! Exercise #1
/* Finding Admin Users
Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'. */

var users = [
	{ id: 1, admin: false },
	{ id: 2, admin: false },
	{ id: 3, admin: true },
];

var admin = users.find((user) => user.admin === true);
admin;

//! Exercise #2
/* What's Your Balance?
Find the account with a balance of 12 and assign it to the variable 'account'. */

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find((account) => account.balance === 12);
account;

//! Exercise #2 - Really Challenging: Custom findWhere Helper
/* 
This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
findWhere(ladders, { height: '20 feet' });
The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';

Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

In summary:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].
*/

var ladders = [
	{ id: 1, height: 20 },
	{ id: 3, height: 25 },
];

console.log(ladders[1]);

/* // Getting the criteria
function testCriteria(criteria) {
	criteriaKey = Object.keys(criteria);
	criteriaValue = Object.values(criteria);
	return [criteriaKey, criteriaValue];
}
console.log(testCriteria({ height: 20 })); */

// findWhere
function findWhere(array, criteria) {
	console.log(criteria);
	var criteriaKey = Object.keys(criteria);
	var criteriaValue = Object.values(criteria);
	console.log(criteriaValue);

	return [array.find((item) => item.height == criteriaValue)];
}

console.log(findWhere(ladders, { height: 20 }));
