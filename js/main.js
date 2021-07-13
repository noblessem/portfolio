// (function () {
// 	const header = document.querySelector('.header__container');
// 	window.onscroll = () => {
// 		console.log(window.pageYOffset)
// 		if (window.pageYOffset > 50) {
// 			header.classList.add('header_active');
// 		}
// 		else {
// 			header.classList.remove('header_active');
// 		}
// 	}
// }());

function burger() {
	let headerNav = document.getElementById("header__nav");
	let allContent = document.getElementById("under__header");
	allContent.classList.add("hide");
	headerNav.classList.add("header__nav-active");

}
function closeBurger() {
	let headerNav = document.getElementById("header__nav");
	headerNav.classList.remove("header__nav-active");
	let allContent = document.getElementById("under__header");
	allContent.classList.remove("hide");
}
(function () {
	const menuChooseItem = document.querySelectorAll('.header__list-item-link');
	const menu = document.querySelector('.header__nav');
	console.log(menuChooseItem);
	let allContent = document.getElementById("under__header");

	for (var i = 0; i < menuChooseItem.length; i++) {
		menuChooseItem[i].addEventListener('click', () => {
			menu.classList.remove('header__nav-active');
			allContent.classList.remove("hide");
		});
	}
}());