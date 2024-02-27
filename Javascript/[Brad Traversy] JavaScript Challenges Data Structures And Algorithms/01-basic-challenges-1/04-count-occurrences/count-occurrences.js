function countOccurrences(string, el) {
	const fluidRegex = new RegExp(el, "g");

	const foundString = string.match(fluidRegex);

	return foundString ? foundString : "element not found in string";
}

module.exports = countOccurrences;
