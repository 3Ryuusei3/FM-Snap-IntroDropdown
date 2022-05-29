/* Ham menu */
const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-btn");

openMenu.addEventListener("click", () => {
	mainMenu.style.display = "flex";
	mainMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
	mainMenu.style.right = "-50%";
});

/* Dropdown */
const drop1 = document.querySelector(".drop1");
const drop2 = document.querySelector(".drop2");
const dropMenuOne = document.querySelector(".dropMenuOne");
const dropMenuTwo = document.querySelector(".dropMenuTwo");

drop1.addEventListener("click", () => {
	dropMenuOne.classList.toggle("active");
	dropMenuTwo.classList.remove("active");
});

drop2.addEventListener("click", () => {
	dropMenuTwo.classList.toggle("active");
	dropMenuOne.classList.remove("active");
});
