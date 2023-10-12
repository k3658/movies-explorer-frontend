import "./FilterCheckbox.css";

function FilterCheckbox() {
	return (
		<>
			<label className="filter">
				<input className="filter__checkbox" id="checkbox" type="checkbox" />
				<span className="filter__slider" />
				Короткометражки
			</label>
		</>
	);
}

export default FilterCheckbox;
