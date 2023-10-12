import "./Portfolio.css";
import link from "../../../images/link.svg";

function Portfolio() {
	return (
		<section className="portfolio">
			<h1 className="portfolio__title">Портфолио</h1>
			<nav>
				<ul className="portfolio__nav">
					<li className="portfolio__nav_item">
						<a
							className="portfolio__nav_link"
							href="https://github.com/k3658/how-to-learn"
						>
							<p className="portfolio__nav_text">Статичный сайт</p>
							<img
								className="portfolio__nav_svg"
								src={link}
								alt="Стрелка ссылки"
							></img>
						</a>
					</li>
					<li className="portfolio__nav_item">
						<a
							className="portfolio__nav_link"
							href="https://github.com/k3658/russian-travel"
						>
							<p className="portfolio__nav_text">Адаптивный сайт</p>
							<img
								className="portfolio__nav_svg"
								src={link}
								alt="Стрелка ссылки"
							></img>
						</a>
					</li>
					<li className="portfolio__nav_item">
						<a
							className="portfolio__nav_link"
							href="https://github.com/k3658/mesto"
						>
							<p className="portfolio__nav_text">Одностраничное приложение</p>
							<img
								className="portfolio__nav_svg"
								src={link}
								alt="Стрелка ссылки"
							></img>
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Portfolio;
