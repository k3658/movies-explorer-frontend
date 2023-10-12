import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
	return (
		<div className="search">
			<form className="search__form" name="search" noValidate>
				<div className="search__form_container">
					<input
						className="search__input"
						id="film"
						name="film"
						type="text"
						placeholder="Фильм"
						required
					></input>
					<button className="search__button" type="submit">
						Найти
					</button>
				</div>
				<div className="search__filter_container">
					<FilterCheckbox />
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
