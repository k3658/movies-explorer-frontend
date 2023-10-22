import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value }) {
	return (
		<>
			<label className="filter">
				<input
					className="filter__checkbox"
					name="checkbox"
					id="checkbox"
					type="checkbox"
					onChange={onChange}
					checked={value}
				/>
				<span className="filter__slider" />
				Короткометражки
			</label>
		</>
	);
}

export default FilterCheckbox;
