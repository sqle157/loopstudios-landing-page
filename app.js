const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

// Enable hover effect on mobile
document.addEventListener("touchstart", function () {}, true);

// Open hamburger menu listener
hamburgerIcon.addEventListener("click", () => {
	document.querySelector(".navbar__mobile").style.display = "flex";
	closeIcon.style.display = "block";
	// disable window scroll
	document.body.style.position = "fixed";
});

// Close hamburger menu listener
closeIcon.addEventListener("click", () => {
	document.querySelector(".navbar__mobile").style.display = "none";
	closeIcon.style.display = "none";
	// enable window scroll
	document.body.style.position = "static";
});
