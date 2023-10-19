import { useState } from "react";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import UseFilterMovies from "../../hooks/UseFilterMovies";
import { searchMessages } from "../../utils/errors";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function SavedMovies({ movies, onSave, onDelete }) {
	const [errorMessage, setErrorMessage] = useState("");
	const [searchMovies, setSearchMovies] = useState([]);

	const [isSearchActive, setIsSearchActive] = useState(false);

	function handleSubmit(search, shorts, isSearchChecked) {
		setIsSearchActive(true);
		const { filterMovies, shortsMovies } = UseFilterMovies(movies, search);

		if (shorts) {
			setSearchMovies(shortsMovies);
		} else setSearchMovies(filterMovies);
		if (isSearchChecked && search === "") {
			if (shorts) {
				setSearchMovies(
					movies.filter(({ duration }) => duration < SHORT_MOVIE_DURATION)
				);
			} else {
				setSearchMovies(movies);
			}
		}

		if (!isSearchChecked && search === "") {
			setErrorMessage(searchMessages.emptyInputSearch);
		} else if (filterMovies.length === 0) {
			setErrorMessage(searchMessages.emptyInputSearch);
		} else if (filterMovies !== 0 && shorts && shortsMovies.length === 0) {
			setErrorMessage(searchMessages.notFoundSearch);
		} else {
			setErrorMessage("");
		}
	}
	return (
		<>
			<main>
				<section className="saved-movies">
					<SearchForm onSearch={handleSubmit} />
					<MoviesCardList
						movies={isSearchActive ? searchMovies : movies}
						savedMovies={movies}
						onSave={onSave}
						onDelete={onDelete}
						errorMessage={errorMessage}
					/>
				</section>
			</main>
		</>
	);
}

export default SavedMovies;
