/* const myPromise = new Promise((resolve, reject) => {
	const error = false;
	if (!error) {
		resolve("Yes! Resolved the promise!");
	} else {
		reject("No! Rejected the promise");
	}
});

const myNextPromise = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve("myNextPromise resolved!");
	}, 3000);
});

myNextPromise.then((value) => {
	console.log(value);
});

myPromise.then((value) => {
	console.log(value);
});
 */

//! Promises

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach((user) => {
			console.log(user);
		});
	});

console.log(users); */

//! Async/Await

/* const myUsers = {
	userList: [],
};

const myCoolFunction = async () => {
	response = await fetch("https://jsonplaceholder.typicode.com/users");
	const jsonUserData = await response.json();
	jsonUserData.map((user) => console.log(user.name));
	return jsonUserData;
};

const anotherFunction = async () => {
	const data = await myCoolFunction();
	myUsers.userList = data;
	console.log(myUsers.userList);
};

anotherFunction();
console.log(myUsers.userList); */

//? Examples

//# workflow function
/* const getAllUserEmails = async () => {
	response = await fetch("https://jsonplaceholder.typicode.com/users");
	const jsonUserData = await response.json();

	const userEmailArray = jsonUserData.map((user) => {
		return user.email;
	});

	//console.log(userEmailArray);
	postToWebPage(userEmailArray);
}; */

// se fizer um console.log (user...) aqui, dá pending, porque o console.log está fora do async function

/* const postToWebPage = (data) => {
	console.log(data);
};

getAllUserEmails(); */

//#2nd parameter of fetch

/* const getDadJoke = async () => {
	const response = await fetch("https://icanhazdadjoke.com/", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});

	const jsonJokeData = await response.json();

	console.log(jsonJokeData);
};

getDadJoke(); */

//# POST

/* const jokeObject = {
	id: "QnWnWSfiqc",
	joke: "Why can't a bicycle stand on its own? It's two-tired.",
};

const postData = async (jokeObj) => {
	const response = await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(jokeObj),
	});

	const jsonResponse = await response.json();
	console.log(jsonResponse);
};

postData(jokeObject); */

//# GET com querystring na URL

/* const requestJoke = async (query) => {
	const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
	const jsonResponse = await response.json();

	jsonResponse.result.map((joke) => {
		console.log(joke.value);
	});
};

requestJoke("ball"); */

//# Abstract into functions

const getDataFromForm = () => {
	const requestObj = {
		query: "ball",
	};

	return requestObj;
};

const buildRequestUrl = (requestData) => {
	return `https://api.chucknorris.io/jokes/search?query=${requestData.query}`;
};

const requestJoke = async (url) => {
	const response = await fetch(url);
	const jsonResponse = await response.json();
	jsonResponse.result.map((joke) => {
		postJokeToPage(joke);
	});
};

const postJokeToPage = (joke) => {
	console.log(joke.value);
};

// Procedural workflow function

const processJokeRequest = async () => {
	const requestData = getDataFromForm();
	const requestUrL = buildRequestUrl(requestData);
	await requestJoke(requestUrL);

	console.log("finished!");
};

processJokeRequest();
