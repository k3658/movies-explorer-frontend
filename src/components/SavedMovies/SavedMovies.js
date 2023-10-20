import { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import useFilterMovies from "../../hooks/useFilterMovies";
import { errorMessages, searchMessages } from "../../utils/errors";

function SavedMovies({ savedMovies, onSave, onDelete }) {
	const { filterMovies } = useFilterMovies();
	const [filteredMovies, setFilteredMovies] = useState([]);

	const [isShortMovie, setIsShortMovie] = useState(false);

	const [inputText, setInputText] = useState("");

	const [errorMessage, setErrorMessage] = useState("");

	function handleCheckbox() {
		if (savedMovies) {
			setIsShortMovie(!isShortMovie);
		}
	}

	function handleSearchMovies(inputSearch, isShort) {
		if (savedMovies) {
			setErrorMessage("");
			setInputText(inputSearch);
			setFilteredMovies(filterMovies(savedMovies, inputSearch, isShort));
		}
	}

	const handleDeleteMovie = (movie, evt, handleSaveButtonClick) => {
		onDelete(movie, evt, handleSaveButtonClick);
	};

	useEffect(() => {
		if (savedMovies) {
			const filteredFilms = filterMovies(savedMovies, inputText, isShortMovie);
			if (filteredFilms.length === 0) {
				setErrorMessage(searchMessages.notFoundSearch);
			}
			setFilteredMovies(filteredFilms);
			return;
		}
		setErrorMessage(errorMessages.MESSAGE_ERROR_SEARCH);
	}, [savedMovies, inputText, isShortMovie]);

	return (
		<>
			<main>
				<section className="saved-movies">
					<SearchForm
						onSubmit={handleSearchMovies}
						onChange={handleCheckbox}
						isShortMovie={isShortMovie}
					/>
					<MoviesCardList
						movies={filteredMovies}
						onSave={onSave}
						onDelete={handleDeleteMovie}
						errorMessage={errorMessage}
					/>
				</section>
			</main>
		</>
	);
}

export default SavedMovies;
