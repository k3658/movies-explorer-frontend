import "./Footer.css";

import { useLocation } from "react-router-dom";

function Footer() {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === "/" ||
			pathname === "/movies" ||
			pathname === "/saved-movies" ? (
				<footer className="footer">
					<p className="footer__info">
						Учебный проект Яндекс.Практикум х BeatFilm.
					</p>
					<nav className="footer__nav">
						<div className="footer__nav_links">
							<a className="footer__link" href="https://practicum.yandex.ru/">
								Яндекс.Практикум
							</a>
							<a className="footer__link" href="https://github.com/k3658">
								GitHub
							</a>
						</div>
						<p className="footer__year">&copy; {new Date().getFullYear()}</p>
					</nav>
				</footer>
			) : (
				""
			)}
		</>
	);
}

export default Footer;
