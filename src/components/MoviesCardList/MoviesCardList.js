import "./MoviesCardList.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

import useResize from "../../hooks/useResize";

function MoviesCardList({
	movies,
	savedMovies,
	onSave,
	onDelete,
	errorMessage,
}) {
	const { pathname } = useLocation();
	const isSavedMoviesPage = pathname === "/saved-movies";

	const screenWidth = useResize();

	const [moviesCount, setMoviesCount] = useState(0);
	const [additionalMovies, setAdditionalMovies] = useState(0);

	function handleClickMoreButton() {
		setMoviesCount(moviesCount + additionalMovies);
	}

	useEffect(() => {
		if (screenWidth >= 1024) {
			setMoviesCount(12);
			setAdditionalMovies(3);
		} else if (screenWidth >= 768) {
			setMoviesCount(8);
			setAdditionalMovies(2);
		} else {
			setMoviesCount(5);
			setAdditionalMovies(2);
		}
	}, [screenWidth]);

	return (
		<>
			<section className="movie-cards">
				{movies.length !== 0 ? (
					<ul className="movie-cards__list">
						{movies.map(
							(movie, i) =>
								i < moviesCount && (
									<MoviesCard
										movie={movie}
										key={isSavedMoviesPage ? movie._id : movie.id}
										pathname={pathname}
										savedMovies={savedMovies}
										onSave={onSave}
										onDelete={onDelete}
									/>
								)
						)}
					</ul>
				) : (
					<p className="movie-card__err">{errorMessage}</p>
				)}
				<div className="movie-cards__button-container">
					{pathname === "/movies" && movies.length > moviesCount && (
						<button
							className="movie-cards__more-button button"
							type="button"
							aria-label="Больше фильмов"
							onClick={handleClickMoreButton}
						>
							Ещё
						</button>
					)}
				</div>
			</section>
		</>
	);
}

export default MoviesCardList;
