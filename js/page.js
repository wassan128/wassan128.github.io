"use strict";

const MAX_IMAGE_NO = 6;
const BG_INTERVAL = 30000;
document.addEventListener("DOMContentLoaded", () => {
	const load_assets = (imgs) => {
		return Promise.all(imgs.map(e => {
			new Promise(
				(resolve, reject) => Object.assign(new Image, {
					src: e,
					onload: resolve,
					onerror: reject
				})
			)}
		));
	};

	(async () => {
		const imgs = [...Array(MAX_IMAGE_NO).keys()].map(no => `./img/bg/${++no}.jpg`);
		await load_assets(imgs);

		const change_bg = () =>{
			const ragnarok = document.getElementById("ragnarok");
			const img_no = Math.floor(Math.random() * MAX_IMAGE_NO) + 1;
			ragnarok.style.backgroundImage = `url("./img/bg/${img_no}.jpg")`;
		};
		change_bg();
		setInterval(change_bg, BG_INTERVAL);
	})();

	/* control menu */
	const btn_menu_open = document.getElementById("btn-menu-open");
	const btn_menu_close = document.getElementById("btn-menu-close");
	const urd = document.getElementById("urd");
	const urd_arc = document.getElementById("urd-arc");
	const ragnarok = document.getElementById("ragnarok");

	const fn_btn_menu_open = (e) => {
		btn_menu_open.style.display = "none";
		btn_menu_close.style.display = "block";

		urd.style.display = "block";

		urd_arc.style.animation = "manifest-urd-arc 1s ease 0s 1 forwards";
		urd.style.animation = "manifest-urd 0.4s ease 0.5s 1 forwards";

		ragnarok.style.left = "350px";
	};
	btn_menu_open.addEventListener("click", fn_btn_menu_open, false);

	const fn_btn_menu_close = (e) => {
		btn_menu_open.style.display = "block";
		btn_menu_close.style.display = "none";

		urd.style.animation = "siesta-urd 0.2s ease 0s 1 forwards";
		urd_arc.style.animation = "siesta-urd-arc 0.5s ease 0s 1 forwards";

		urd.style.display = "none";

		ragnarok.style.left = "0px";
	};
	btn_menu_close.addEventListener("click", fn_btn_menu_close, false);

	/* control contents */
	const btns_ubergang = document.querySelectorAll(".btn-ubergang");
	const fn_btn_ubergang = (btn) => {
		const aktiv = document.querySelector(".aktiv");
		const id_before = aktiv.getAttribute("id");
		const id_after = btn.target.id.replace(/btn\-/, "");

		aktiv.removeAttribute("class", "aktiv");
		document.getElementById(id_before).style.animation = "ubergang-hide 1s ease 0s 1 forwards";

		const new_aktiv = document.getElementById(id_after);
		new_aktiv.setAttribute("class", "aktiv");
		new_aktiv.style.animation = "ubergang-show 1s ease 0s 1 forwards";
		if (id_after === "zwei") {
			new_aktiv.style.top = "-50px";
		}
	};
	for (const btn_ubergang of btns_ubergang) {
		btn_ubergang.addEventListener("click", fn_btn_ubergang, false);
	}
});
