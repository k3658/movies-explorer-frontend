import "./AboutMe.css";
import studentPhoto from "../../../images/student-photo.jpeg";

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<h2 className="about-me__title">Студентка</h2>
			<div className="about-me__container">
				<img
					className="about-me__student-photo"
					src={studentPhoto}
					alt="Фотография студента"
				></img>
				<div className="about-me__info-container">
					<p className="about-me__student-name">Екатерина</p>
					<p className="about-me__student-info-short">
						Фронтенд-разработчица, 19 лет
					</p>
					<p className="about-me__student-info-more">
						Родилась в Адлере, а сейчас живу в Ростове-на-Дону. Поступила в ДГТУ
						на факультет рекламы, но параллельно с этим увлеклась
						программированием и решила отчислиться, чтобы пойти на курсы и иметь
						больше свободного времени на изучение того, что мне нравится. В
						момент написания этого текста пишу диплом, пока что коммерческого
						опыта в веб-разработке не имею. А фото действительно мое, код пишу
						лапками.
					</p>
					<a
						className="about-me__student-link link"
						href="https://github.com/k3658"
						rel="noreferrer"
						target="_blank"
					>
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
