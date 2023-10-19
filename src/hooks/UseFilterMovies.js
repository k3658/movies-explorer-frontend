import { SHORT_MOVIE_DURATION } from "../utils/constants";

const UseFilterMovies = () => {
	const filterShortMovies = (movie) =>
		movie.filter(({ duration }) => duration <= SHORT_MOVIE_DURATION);

	const filterMovies = (movies, inputSearch, isShort) => {
		const searchedMovies = movies.filter(
			({ nameRU, nameEN }) =>
				nameRU.toLowerCase().includes(inputSearch.toLowerCase()) ||
				nameEN.toLowerCase().includes(inputSearch.toLowerCase())
		);
		if (isShort) {
			return filterShortMovies(searchedMovies);
		}
		return searchedMovies;
	};

	return { filterMovies, filterShortMovies };
};

export default UseFilterMovies;
