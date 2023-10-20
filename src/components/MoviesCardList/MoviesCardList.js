import "./MoviesCardList.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

import useResize from "../../hooks/useResize";
import {
	DESKTOP_SCREEN_WIDTH,
	DESKTOP_SCREEN_WIDTH_CARDS,
	TABLET_SCREEN_WIDTH,
	TABLET_SCREEN_WIDTH_CARDS,
	MOB_SCREEN_WIDTH_CARDS,
} from "../../utils/constants";

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
	const [additionalMovies, setAdditionalMovies] = useState(0); // amount of movie cards showing after button "more" click

	function handleClickMoreButton() {
		setMoviesCount(moviesCount + additionalMovies);
	}

	useEffect(() => {
		if (screenWidth >= DESKTOP_SCREEN_WIDTH) {
			setMoviesCount(DESKTOP_SCREEN_WIDTH_CARDS);
			setAdditionalMovies(3);
		} else if (screenWidth >= TABLET_SCREEN_WIDTH) {
			setMoviesCount(TABLET_SCREEN_WIDTH_CARDS);
			setAdditionalMovies(2);
		} else {
			setMoviesCount(MOB_SCREEN_WIDTH_CARDS);
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
