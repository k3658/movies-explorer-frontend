import "./SavedMovies.css";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ movies }) {
	return (
		<>
			<main className="saved-movies">
				<SearchForm />
				<MoviesCardList movies={movies} />
			</main>
		</>
	);
}

export default SavedMovies;
