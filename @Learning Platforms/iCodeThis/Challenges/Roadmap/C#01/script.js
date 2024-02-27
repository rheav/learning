"use strict";

const colorBoxes = document.querySelectorAll(".color-box");

for (let i = 0; i < colorBoxes.length; i++) {
	console.log(colorBoxes[i].textContent);
	colorBoxes[i].style.backgroundColor = colorBoxes[i].textContent;
}
