import "./MoviesCardList.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

import UseResize from "../../hooks/UseResize";
import { findScreenSize } from "../../utils/constants";

function MoviesCardList({ movies, savedMovies, onSave, onDelete }) {
	const { pathname } = useLocation();

	const screenWidth = UseResize();
	const [moviesCount, setMoviesCount] = useState(0);
	const [additionalMovies, setAdditionalMovies] = useState(0);

	function handleClickMoreButton() {
		setMoviesCount(moviesCount + additionalMovies);
	}

	useEffect(() => {
		if (screenWidth >= 1024) {
			setMoviesCount(findScreenSize());
			setAdditionalMovies(3);
		} else if (screenWidth >= 768) {
			setMoviesCount(findScreenSize());
			setAdditionalMovies(2);
		} else {
			setMoviesCount(findScreenSize());
			setAdditionalMovies(2);
		}
	}, [screenWidth]);

	return (
		<>
			<section className="movie-cards">
				<ul className="movie-cards__list">
					{movies.map((movie) => (
						<MoviesCard
							movie={movie}
							key={movie.id || movie.movieId}
							pathname={pathname}
							savedMovies={savedMovies}
							onSave={onSave}
							onDelete={onDelete}
						/>
					))}
				</ul>
				<div className="movie-cards__button-container">
					{pathname === "/movies" && (
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
