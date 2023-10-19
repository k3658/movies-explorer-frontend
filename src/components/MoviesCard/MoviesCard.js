import "./MoviesCard.css";

import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { URL_BEATFILM_MOVIES_API } from "../../utils/constants";

function MoviesCard({ movie, onSave, onDelete }) {
	const location = useLocation();
	const isSavedMoviesPage = location.pathname === "/saved-movies";

	const [isSaved, setIsSaved] = useState(false);

	function convertDuration() {
		const minutes = movie.duration % 60;
		const hours = Math.floor(movie.duration / 60);
		return `${hours}ч ${minutes}м`;
	}

	const handleSaveButtonClick = (evt) => {
		evt.target.classList.toggle("movies-card__save_button_active");
		setIsSaved(!isSaved);
	};

	function onSaveMovie(evt) {
		onSave(movie, evt, handleSaveButtonClick);
	}

	function onDeleteMovie(evt) {
		onDelete(movie, evt, handleSaveButtonClick);
	}

	return (
		<li className="movie-card">
			<div className="movie-card__container">
				<a
					className="movie-card__link"
					href={movie.trailerLink}
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="movie-card__img"
						src={
							isSavedMoviesPage
								? `${movie.image}`
								: `${URL_BEATFILM_MOVIES_API}${movie.image?.url}`
						}
						alt={`Постер к фильму ${movie.nameRU}`}
					/>
				</a>
				<div className="movie-card__about">
					<h2 className="movie-card__title">{movie.nameRU}</h2>
					<p className="movie-card__duration">{convertDuration()}</p>
				</div>
				{isSavedMoviesPage && (
					<button
						className="movie-card__delete-button"
						type="button"
						aria-label="Удалить сохраненный фильм"
						onClick={onDeleteMovie}
					/>
				)}
				{!isSavedMoviesPage &&
					(isSaved ? (
						<button
							className="movie-card__save-button-active"
							type="button"
							aria-label="Фильм сохранён"
							onClick={onDeleteMovie}
						/>
					) : (
						<button
							className="movie-card__save-button"
							type="button"
							aria-label="Сохранить фильм"
							onClick={onSaveMovie}
						>
							Сохранить
						</button>
					))}
			</div>
		</li>
	);
}

export default MoviesCard;
