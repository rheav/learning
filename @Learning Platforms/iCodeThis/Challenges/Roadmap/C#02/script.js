"use strict";

const closeModal = document.getElementById("close-x");

closeModal.addEventListener("click", function () {
	document.querySelector(".card").style.display = "none";
	setTimeout(function () {
		document.querySelector(".card").style.display = "flex";
	}, 5000);
});
