import "./PageNotFound.css";

import { useNavigate } from "react-router-dom";

function PageNotFound() {
	const navigate = useNavigate();

	function goBack() {
		navigate("/");
	}

	return (
		<section className="not-found">
			<h1 className="not-found__title">404</h1>
			<p className="not-found__text">Страница не найдена</p>
			<button className="not-found__back" type="button" onClick={goBack}>
				Назад
			</button>
		</section>
	);
}

export default PageNotFound;
