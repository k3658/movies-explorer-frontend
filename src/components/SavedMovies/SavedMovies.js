import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ movies }) {
	return (
		<>
			<main>
				<section className="saved-movies">
					<SearchForm />
					<MoviesCardList movies={movies} />
				</section>
			</main>
		</>
	);
}

export default SavedMovies;
