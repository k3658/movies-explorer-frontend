import React, { useEffect, useState } from "react";

import moviesApi from "../../utils/MoviesApi";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import useFilterMovies from "../../hooks/useFilterMovies";
import { errorMessages, searchMessages } from "../../utils/errors";
import Preloader from "../Preloader/Preloader";

function Movies({ isLoading, setIsLoading, savedMovies, onSave, onDelete }) {
	const allMovies = JSON.parse(localStorage.getItem("allMovies")) ?? [];

	const { filterMovies, filterShortMovies } = useFilterMovies();
	const [filteredMovies, setFilteredMovies] = useState([]);

	const checkboxState =
		JSON.parse(localStorage.getItem("isShortMovie")) ?? false;
	const [isShortMovie, setIsShortMovie] = useState(checkboxState);

	const [errorMessage, setErrorMessage] = useState("");

	function handleCheckboxChange() {
		setIsShortMovie(!isShortMovie);
		localStorage.setItem("isShortMovie", JSON.stringify(!isShortMovie));
	}

	function handleFilterMovies(movies, inputSearch, isShort) {
		const filteredFilms = filterMovies(movies, inputSearch);
		localStorage.setItem("filteredMovies", JSON.stringify(filteredFilms));
		if (!filteredFilms.length === 0) {
			setErrorMessage(searchMessages.notFoundSearch);
		}
		setFilteredMovies(
			isShort ? filterShortMovies(filteredFilms) : filteredFilms
		);
	}

	function handleSearchMovies(inputSearch, isShort) {
		setIsLoading(true);
		setErrorMessage("");
		if (!allMovies.length) {
			moviesApi
				.getMovies()
				.then((movies) => {
					localStorage.setItem("allMovies", JSON.stringify(movies));
					handleFilterMovies(movies, inputSearch, isShort);
				})
				.catch((err) => {
					console.error(`Ошибка: ${err}`);
					setErrorMessage(errorMessages.MESSAGE_ERROR_SEARCH);
					setIsLoading(false);
				});
		} else {
			handleFilterMovies(allMovies, inputSearch, isShort);
		}
		localStorage.setItem("inputSearch", inputSearch);
		localStorage.setItem("isShortMovie", isShort);
		setIsLoading(false);
	}

	useEffect(() => {
		setIsLoading(true);
		const initialMovies = JSON.parse(localStorage.getItem("filteredMovies"));
		if (initialMovies) {
			if (initialMovies.length !== 0) {
				setIsShortMovie(JSON.parse(localStorage.getItem("isShortMovie")));
				setFilteredMovies(
					isShortMovie ? filterShortMovies(initialMovies) : initialMovies
				);
			} else {
				setErrorMessage(searchMessages.notFoundSearch);
			}
		}
		setIsLoading(false);
	}, [isShortMovie]);

	return (
		<main>
			<section className="movies">
				<SearchForm
					onSubmit={handleSearchMovies}
					onChange={handleCheckboxChange}
					isShortMovie={isShortMovie}
				/>
				{isLoading ? (
					<Preloader />
				) : (
					<MoviesCardList
						movies={filteredMovies}
						savedMovies={savedMovies}
						onSave={onSave}
						onDelete={onDelete}
						errorMessage={errorMessage}
					/>
				)}
			</section>
		</main>
	);
}

export default Movies;
