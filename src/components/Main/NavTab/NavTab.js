import "./NavTab.css";

import React from "react";

function NavTab() {
	function smoothScroll(evt) {
		evt.preventDefault();
		const id = evt.target.hash;
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	return (
		<section className="navtab">
			<nav className="navtab__shortcuts">
				<a
					className="navtab__item link"
					href="#about-project"
					onClick={smoothScroll}
				>
					О проекте
				</a>
				<a className="navtab__item link" href="#techs" onClick={smoothScroll}>
					Технологии
				</a>
				<a
					className="navtab__item link"
					href="#about-me"
					onClick={smoothScroll}
				>
					Студент
				</a>
			</nav>
		</section>
	);
}

export default NavTab;
