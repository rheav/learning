function makeAjaxRequest(url, method) {
	if (!method) {
		method = "GET";
	}
	return method;
	// logic
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "GET");

function makeAjaxRequestNew(url, method = "GET") {
	return method;
	// logic
}

console.log(makeAjaxRequest("google.com"));
console.log(makeAjaxRequestNew("google.com", "POST"));
