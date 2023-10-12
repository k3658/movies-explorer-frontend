import "./Techs.css";

function Techs() {
	return (
		<section className="techs" id="techs">
			<h1 className="techs__title">Технологии</h1>
			<div className="techs__container">
				<h2 className="techs__header">7 технологий</h2>
				<p className="techs__text">
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
				<ul className="techs__table">
					<li className="techs__table_item">HTML</li>
					<li className="techs__table_item">CSS</li>
					<li className="techs__table_item">JS</li>
					<li className="techs__table_item">React</li>
					<li className="techs__table_item">Git</li>
					<li className="techs__table_item">Express.js</li>
					<li className="techs__table_item">mongoDB</li>
				</ul>
			</div>
		</section>
	);
}

export default Techs;
