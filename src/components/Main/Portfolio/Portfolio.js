import "./Portfolio.css";
import link from "../../../images/link.svg";

function Portfolio() {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<nav>
				<ul className="portfolio__nav">
					<li className="portfolio__nav-item">
						<a
							className="portfolio__nav-link link"
							href="https://github.com/k3658/how-to-learn"
							rel="noreferrer"
							target="_blank"
						>
							<p className="portfolio__nav-text">Статичный сайт</p>
							<img
								className="portfolio__nav-svg"
								src={link}
								alt="Стрелка ссылки"
							/>
						</a>
					</li>
					<li className="portfolio__nav-item">
						<a
							className="portfolio__nav-link link"
							href="https://github.com/k3658/russian-travel"
							rel="noreferrer"
							target="_blank"
						>
							<p className="portfolio__nav-text">Адаптивный сайт</p>
							<img
								className="portfolio__nav-svg"
								src={link}
								alt="Стрелка ссылки"
							/>
						</a>
					</li>
					<li className="portfolio__nav-item">
						<a
							className="portfolio__nav-link link"
							href="https://github.com/k3658/mesto"
							rel="noreferrer"
							target="_blank"
						>
							<p className="portfolio__nav-text">Одностраничное приложение</p>
							<img
								className="portfolio__nav-svg"
								src={link}
								alt="Стрелка ссылки"
							/>
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Portfolio;
