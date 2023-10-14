import React, { useEffect, useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import api from "../../utils/api";

function Movies() {
	const [movies, setMovies] = useState([]);

	function getMovies() {
		return api.getMovies().then(setMovies);
	}

	useEffect(() => {
		getMovies();
	});

	return (
		<main>
			<section className="movies">
				<SearchForm />
				<MoviesCardList movies={movies} />
			</section>
		</main>
	);
}

export default Movies;
