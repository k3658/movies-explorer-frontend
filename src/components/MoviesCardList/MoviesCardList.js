import "./MoviesCardList.css";

import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
	const { pathname } = useLocation();

	const movies = Array.apply(null, Array(12)).map((elem, i) => {
		return i;
	});

	return (
		<>
			<section className="movies">
				<ul className="movies__list">
					{movies.map((card, i) => (
						<MoviesCard key={i} />
					))}
				</ul>
				<div className="movies__button_container">
					{pathname === "/movies" && (
						<button className="movies__more_button" type="button">
							Ещё
						</button>
					)}
				</div>
			</section>
		</>
	);
}

export default MoviesCardList;
