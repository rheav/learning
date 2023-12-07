var computers = [
	{ name: "Apple", ram: 24 },
	{ name: "Compaq", ram: 4 },
	{ name: "Acer", ram: 32 },
];

var allComputersCanRunProgram = true;

var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
	var computer = computers[i];

	if (computer.ram < 16) {
		allComputersCanRunProgram = false;
	} else {
		onlySomeComputersCanRunProgram = true;
	}
}

// every() -> se todos atenderem a condição retorna true
console.log(computers.every((computer) => computer.ram > 16));

// some() -> se algum atender a condição retorna true
console.log(computers.some((computer) => computer.ram > 16));

function Field(value) {
	this.value = value;
}

Field.prototype.validate = function () {
	return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthDate = new Field("10/10/2010");

// console.log(username.validate() && password.validate());

var fields = [username, password, birthDate];

var formIsValid = fields.every((field) => field.validate);
formIsValid;

if (formIsValid) {
	//allow
} else {
	//deny
}

//! Exercise #1
/* Finding Submitted Users
Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'. */

var users = [
	{ id: 21, hasSubmitted: true },
	{ id: 62, hasSubmitted: false },
	{ id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every((user) => user.hasSubmitted === true);
hasSubmitted;

//! Exercise #2
/* In Progress Network Requests
Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'. */

var requests = [
	{ url: "/photos", status: "complete" },
	{ url: "/albums", status: "pending" },
	{ url: "/users", status: "failed" },
];

var inProgress = requests.some((request) => request.status === "pending");
inProgress;
