//! ---------------------------------------------------------------------- filter

var products = [
	{ name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
	{ name: "banana", type: "fruit", quantity: 10, price: 15 },
	{ name: "celery", type: "vegetable", quantity: 30, price: 9 },
	{ name: "orange", type: "fruit", quantity: 3, price: 5 },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
	if (products[i].type === "fruit") {
		filteredProducts.push(products[i]);
	}
}

filteredProducts;

// usando filter
var newFiltered = products.filter((product) => product.type === "fruit");

newFiltered;

// vegetabble, qt> 0 and price <10
var complexFiltered = products.filter((product) => product.type === "vegetable" && product.quantity > 0 && product.price < 10);

complexFiltered;

var post = { id: 4, title: "New Post" };

var comments = [
	{ postId: 4, content: "awesome post" },
	{ postId: 3, content: "it was ok" },
	{ postId: 4, content: "neat" },
];

// função minha pra praticar -> pegar os comments de postId 4
var commentsIdFour = comments.filter((comment) => comment.postId === post.id);

commentsIdFour;

//! Exercise #1
/* Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function! */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => number > 50);
filteredNumbers;

//! Exercise #2
/* Handling Permissions with Filter
Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function! */

var users = [
	{ id: 1, admin: true },
	{ id: 2, admin: false },
	{ id: 3, admin: false },
	{ id: 4, admin: false },
	{ id: 5, admin: true },
];

var filteredUsers = users.filter((user) => user.admin === true);
filteredUsers;

//! Exercise #3 - Challenging! Implementing 'reject'.

/*This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

For example:

*/
var numbers = [10, 20, 30];
var moreThanFifteen = reject(numbers);
var lessThanFifteen = numbers.filter((number) => !moreThanFifteen.includes(number));

function reject() {
	return numbers.filter((number) => number > 15);
}

moreThanFifteen;

lessThanFifteen; // [ 10 ];
