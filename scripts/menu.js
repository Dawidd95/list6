function init() {
	let body = document.querySelector(".body");
	let menu = document.querySelector(".intro__menu");
	let menuOverlay = document.querySelector(".menu__overlay");
	let content = document.querySelector(".overlay__content");
	let close = document.querySelector(".overlay__close");

	menu.addEventListener("click", function() {
		menuOverlay.classList.toggle('open-overlay');
		body.classList.toggle('body-hidden');
	})
}

document.addEventListener("DOMContentLoaded", init);