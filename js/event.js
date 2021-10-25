const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__icon");
const body = document.querySelector("body");
const purposeText = document.querySelector(".purpose__text");

const openMenu = () => {
	menu.classList.toggle("active");

	if (menu.classList.contains("active")) {
		body.style.overflow = "hidden";
		// purposeText.style.zIndex = 0;
	} else {
		body.style.overflow = "scroll";
		// purposeText.style.zIndex = 10;
	}
};

menuIcon.addEventListener("click", openMenu);
