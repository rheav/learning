// Estudar prototype para aulas 1 e 2

// Aula 3
class Car {
	constructor({ title }) {
		this.title = title;
	}
	drive() {
		return "vroom";
	}
}

/* const car = new Car({ title: "Toyota" });
car;
console.log(car.title);
console.log(car.drive()); */

// Aula 4

class Toyota extends Car {
	constructor(options) {
		super(options); //Car.constructor
		this.color = options.color;
	}
	honk() {
		return "beep";
	}
}

const toyota = new Toyota({ color: "red", title: "Daily Driver" });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

// Aula 5

//! Exercise 1 - Game Classes

/* You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster */

class Monster {
	constructor(options) {
		this.health = 100;
		this.name = options.name;
	}
}

const monster = new Monster({ name: "Dark Monster" });
console.log(monster);
console.log(monster.name);

//! Exercise 2 - Subclassing Monsters

/* Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10 */

class Snake extends Monster {
	bite(targetSnake) {
		targetSnake.health -= 10;
	}
}
