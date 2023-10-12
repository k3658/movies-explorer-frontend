import "./AboutProject.css";

function AboutProject() {
	return (
		<section className="about-project" id="about-project">
			<h1 className="about-project__title">О проекте</h1>
			<div className="about-project__container">
				<div className="about-project__info">
					<h2 className="about-project__info_header">
						Дипломный проект включал 5 этапов
					</h2>
					<p className="about-project__info_text">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</div>
				<div className="about-project__info">
					<h2 className="about-project__info_header">
						На выполнение диплома ушло 5 недель
					</h2>
					<p className="about-project__info_text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</div>
			</div>
			<div className="about-project__timeline">
				<h3 className="about-project__timeline_header">1 неделя</h3>
				<h3 className="about-project__timeline_header">4 недели</h3>
				<p className="about-project__timeline_text">Back-end</p>
				<p className="about-project__timeline_text">Front-end</p>
			</div>
		</section>
	);
}

export default AboutProject;
