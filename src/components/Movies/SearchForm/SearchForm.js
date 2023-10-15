import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
	return (
		<div className="search">
			<form className="search__form" name="search" noValidate>
				<div className="search__form-container">
					<input
						className="search__input"
						id="film"
						name="film"
						type="text"
						placeholder="Фильм"
						autoComplete="off"
						required
					/>
					<button
						className="search__button button"
						type="submit"
						aria-label="Найти фильмы"
					>
						Найти
					</button>
				</div>
				<div className="search__filter-container">
					<FilterCheckbox />
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
