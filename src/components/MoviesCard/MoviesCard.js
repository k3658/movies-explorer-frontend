import "./MoviesCard.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import movie1 from "../../images/movie1.png";

function MoviesCard({ trailerLink }) {
	const location = useLocation();
	const [isSaved, setIsSaved] = useState(false);

	const handleSaveButtonClick = (evt) => {
		evt.target.classList.toggle("movies-card__save_button_active");
		setIsSaved(!isSaved);
	};

	const isSavedMoviesPage = location.pathname === "/saved-movies";
	return (
		<li className="movie-card">
			<div className="movie-card__container">
				<a
					className="movie-card__link"
					href={`${trailerLink}`}
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="movie-card__img"
						alt="33 слова о дизайне"
						src={movie1}
					/>
				</a>
				<div className="movie-card__about">
					<h2 className="movie-card__title">33 слова о дизайне</h2>
					<p className="movie-card__duration">1ч 17м</p>
				</div>
				{isSavedMoviesPage && (
					<button
						className="movie-card__delete-button"
						type="button"
						aria-label="Удалить сохраненный фильм"
					/>
				)}
				{!isSavedMoviesPage &&
					(isSaved ? (
						<button
							className="movie-card__save-button-active"
							type="button"
							aria-label="Фильм сохранён"
							onClick={handleSaveButtonClick}
						/>
					) : (
						<button
							className="movie-card__save-button"
							type="button"
							aria-label="Сохранить фильм"
							onClick={handleSaveButtonClick}
						>
							Сохранить
						</button>
					))}
			</div>
		</li>
	);
}

export default MoviesCard;
