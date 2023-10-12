import "./AboutMe.css";
import studentPhoto from "../../../images/student-photo.jpeg";

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<h1 className="about-me__title">Студентка</h1>
			<div className="about-me__container">
				<img
					className="about-me__student_photo"
					src={studentPhoto}
					alt="Фотография студента"
				></img>
				<div className="about-me__info_container">
					<p className="about-me__student_name">Екатерина</p>
					<p className="about-me__student_info_short">
						Фронтенд-разработчица, 19 лет
					</p>
					<p className="about-me__student_info_more">
						Родилась в Адлере, а сейчас живу в Ростове-на-Дону. Поступила в ДГТУ
						на факультет рекламы, но параллельно с этим увлеклась
						программированием и решила отчислиться, чтобы пойти на курсы и иметь
						больше свободного времени на изучение того, что мне нравится. В
						момент написания этого текста пишу диплом, пока что коммерческого
						опыта в веб-разработке не имею. А фото действительно мое, код пишу
						лапками.
					</p>
					<a className="about-me__student_link" href="https://github.com/k3658">
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
