import "./PageNotFound.css";

import { useNavigate } from "react-router-dom";

function PageNotFound() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}

	return (
		<main>
			<section className="not-found">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__text">Страница не найдена</p>
				<button
					className="not-found__back button"
					type="button"
					aria-label="Вернуться обратно"
					onClick={goBack}
				>
					Назад
				</button>
			</section>
		</main>
	);
}

export default PageNotFound;
