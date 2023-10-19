import "./Profile.css";

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import UseFormValidator from "../../../hooks/UseFormValidator";

function Profile({ handleUpdateUserData, onLogout, isLoading }) {
	const { name, email } = useContext(CurrentUserContext);
	const [isEditProfile, setIsEditProfile] = useState(false);

	const { values, handleChange, errors, isValid, setValues, setIsValid } =
		UseFormValidator({});

	function handleClickEditProfile(evt) {
		evt.preventDefault();
		setIsEditProfile(true);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		handleUpdateUserData(values);
	}

	useEffect(() => {
		setValues({ name, email });
		setIsEditProfile(false);
	}, [name, email]);

	useEffect(() => {
		if (values.name === name && values.email === email) {
			setIsValid(false);
		}
	}, [values]);

	return (
		<>
			<main className="profile">
				<section className="profile__container">
					<h1 className="profile__title">Привет, {name}!</h1>
					<form
						className="profile__form"
						name="profile"
						isLoading={isLoading}
						onSubmit={handleSubmit}
						noValidate
					>
						<div className="profile__input-container">
							<label className="profile__input-label">Имя</label>
							<input
								className={`profile__input profile__input_field_name ${
									errors.name && "form__input_error"
								}`}
								id="name"
								name="name"
								type="text"
								minLength="2"
								maxLength="30"
								placeholder="Имя"
								value={values.name || ""}
								disabled={!isEditProfile}
								onChange={handleChange}
								isValid={isValid}
								errors={errors.name}
								required
							/>
						</div>

						<div className="profile__input-container">
							<label className="profile__input-label">E-mail</label>
							<input
								className={`profile__input profile__input_field_email ${
									errors.email && "form__input_error"
								}`}
								id="email"
								name="email"
								type="email"
								placeholder="E-mail"
								value={values.email || ""}
								disabled={!isEditProfile}
								onChange={handleChange}
								isValid={isValid}
								errors={errors.email}
								required
							/>
						</div>

						{isEditProfile ? (
							<div className="profile__buttons">
								{<span className="profile__submit-error">Какая-то ошибка</span>}
								<button
									className="profile__save-button button"
									type="submit"
									aria-label="Cохранить изменения"
									disabled={!isValid}
								>
									Сохранить
								</button>
							</div>
						) : (
							<div className="profile__buttons">
								<button
									type="button"
									className="profile__edit-button button"
									onClick={handleClickEditProfile}
									aria-label="Редактировать профиль"
								>
									Редактировать
								</button>
								<button
									className="profile__logout-button button"
									onClick={onLogout}
								>
									Выйти из аккаунта
								</button>
							</div>
						)}
					</form>
				</section>
			</main>
		</>
	);
}

export default Profile;
