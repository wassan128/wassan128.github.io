"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const btn_menu_open = document.getElementById("btn-menu-open");
	const btn_menu_close = document.getElementById("btn-menu-close");
	const urd = document.getElementById("urd");
	const urd_arc = document.getElementById("urd-arc");
	const zwei = document.getElementById("zwei");

	const fn_btn_menu_open = (e) => {
		btn_menu_open.style.display = "none";
		btn_menu_close.style.display = "block";
		urd_arc.style.animation = "manifest-urd-arc 1s ease 0s 1 forwards";
		urd.style.animation = "manifest-urd 0.4s ease 0.5s 1 forwards";
		zwei.style.left = "350px";
	};
	btn_menu_open.addEventListener("click", fn_btn_menu_open, false);

	const fn_btn_menu_close = (e) => {
		btn_menu_open.style.display = "block";
		btn_menu_close.style.display = "none";
		urd.style.animation = "siesta-urd 0.2s ease 0s 1 forwards";
		urd_arc.style.animation = "siesta-urd-arc 0.3s ease 0s 1 forwards";
		zwei.style.left = "0px";
	};
	btn_menu_close.addEventListener("click", fn_btn_menu_close, false);
});
