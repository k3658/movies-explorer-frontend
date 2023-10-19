import "./SearchForm.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import UseFormValidator from "../../../hooks/UseFormValidator";

function SearchForm({ onSubmit, onChange, isShortMovie }) {
	const location = useLocation();
	const isSavedMoviesPage = location.pathname === "/saved-movies";

	const { values, handleChange, errors, isValid, setValues, resetForm } =
		UseFormValidator({});

	const handleSubmit = (evt) => {
		evt.preventDefault();

		onSubmit(values.search, isShortMovie);
	};

	useEffect(() => {
		if (!isSavedMoviesPage) {
			const savedSearch = localStorage.getItem("request");
			if (savedSearch) setValues({ search: savedSearch });
		}
	}, []);

	return (
		<div className="search">
			<form
				className="search__form"
				name="search"
				onSubmit={handleSubmit}
				autoComplete="off"
				noValidate
			>
				<div className="search__form-container">
					<input
						className="search__input"
						id="film"
						name="film"
						type="text"
						placeholder="Фильм"
						onChange={handleChange}
						value={values.search ?? ""}
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
					<FilterCheckbox onChange={onChange} value={isShortMovie} />
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
