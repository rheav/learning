/* generator is a function that can be entered and exited multiple times */
/* can iterate over any data structure we want */

/* //function *numbers(){}
function* shopping(params) {
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash

	const stuffFromStore = yield "cash"; // yield 'groceries' once we are 'back'

	const cleanClothes = yield "laundry";

	// walking back home
	return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
// walked into the store
// walking up and down the aisles
// purchase our stuff
console.log(gen.next("groceries")); // leaving the store with groceries
console.log(gen.next("clean clothes")); */

/* function* colors() {
	yield "red";
	yield "blue";
	yield "green";
}

const gen = colors();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const myColors = [];
for (let color of colors()) {
	myColors.push(color);
}

myColors; */

/* const testingTeam = {
	lead: "Amanda",
	tester: "Bill",
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	},
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: "engineering",
	lead: "Jill",
	manager: "Alex",
	engineer: "Dave",
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* testingTeam;
	},
}; */

/* function* TeamIterator() {
	yield engineeringTeam.lead;
	yield engineeringTeam.manager;
	yield engineeringTeam.engineering;
} */ //-> eu fiz assim, a forma dele é a abaixo:

/* function* TeamIterator(team) {
		yield team.lead;
	yield team.manager;
	yield team.engineering; 
		yield team.testingTeam.lead;
	yield team.testingTeam.tester; 
	//const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
	//yield* testingTeamGenerator; // generator delegation (yield*)-> multiple generators that makes sense to run together
	yield* team.testingTeam; // 'for of loop, do your best to iterate over testingTeam'
} */

/* function* TestingTeamIterator(team) {
	yield team.lead;
	yield team.tester;
} */

/* const myTeam = [];
for (let employee of engineeringTeam)) {
	myTeam.push(employee);
}

myTeam; */

// symbol.iterator -> how to react to the for of loop

class Comment {
	constructor(content, children) {
		this.content = content;
		this.children = children;
	}

	*[Symbol.iterator]() {
		yield this.content;
		for (let child of this.children) {
			yield* child;
		}
	}
}

const children = [new Comment("good comment", []), new Comment("bad comment", []), new Comment("meh", [])];

const tree = new Comment("hello", children);

const values = [];
for (let value of tree) {
	values.push(value);
}

values;
