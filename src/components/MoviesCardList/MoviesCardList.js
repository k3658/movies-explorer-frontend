import "./MoviesCardList.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
	const { pathname } = useLocation();

	const movies = Array.apply(null, Array(5)).map((elem, i) => {
		return i;
	});

	return (
		<>
			<section className="movie-cards">
				<ul className="movie-cards__list">
					{movies.map((card, i) => (
						<MoviesCard key={i} />
					))}
				</ul>
				<div className="movie-cards__button-container">
					{pathname === "/movies" && (
						<button
							className="movie-cards__more-button button"
							type="button"
							aria-label="Больше фильмов"
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
