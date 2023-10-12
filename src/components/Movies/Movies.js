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
		<section className="movies">
			<main>
				<SearchForm />
				<MoviesCardList movies={movies} />
			</main>
		</section>
	);
}

export default Movies;
