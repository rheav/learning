// make request, dont know how much time it takes and when we have the response, only *then* take action

//! Promise ->
// unresolved (pending)- waiting -> //? then
// resolved (fulfilled)-> ok
// reject (rejected)-> some error -> //$ catch

//! Aula 3,4,5 - Creating Promises

/* const promise = new Promise((resolve, reject) => {
	var request = new XMLHttpRequest();
	request.onload = () => {
		resolve();
	};
});

console.log(promise);

promise
	.then(() => {
		console.log("finally finished!");
	})
	.then(() => {
		console.log("I was also ran!!!");
	})
	.catch(() => {
		console.log("error");
	});
 */

//! Aula - 6

url = "https://jsonplaceholder.typicoade.com/posts123456";

fetch(url)
	.then((response) => console.log(response))
	.catch((error) => console.log("BAD", error));
/* 	.then((data) => console.log(data)); */
