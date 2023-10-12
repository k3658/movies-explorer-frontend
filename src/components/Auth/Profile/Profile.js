import "./Profile.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormValidator from "../../../utils/FormValidator";

function Profile({ isLoading }) {
	const [isEditProfile, setIsEditProfile] = useState(false);

	const { values, handleChange, errors, isValid, setValues } = FormValidator(
		{}
	);

	function handleClickEditProfile(evt) {
		evt.preventDefault();
		setIsEditProfile(true);
	}

	useEffect(() => {
		setValues({ name: "Катя", email: "lk36kk@gmail.com" });
	}, []);

	return (
		<>
			<main className="profile">
				<section className="profile__container">
					<h1 className="profile__title">Привет, Катя!</h1>
					<form
						className="profile__form"
						name="profile"
						isLoading={isLoading}
						noValidate
					>
						<div className="profile-form__input_container">
							<label className="profile-form__input_label">Имя</label>
							<input
								className={`profile-form__input profile-form__input_field_name ${
									errors.name && "form__input_error"
								}`}
								id="name"
								name="name"
								type="text"
								minLength="2"
								maxLength="30"
								placeholder="Имя"
								value={values.name}
								disabled={!isEditProfile}
								onChange={handleChange}
								isValid={isValid}
								required
							/>
						</div>

						<div className="profile-form__input_container">
							<label className="profile-form__input_label">E-mail</label>
							<input
								className={`profile-form__input profile-form__input_field_email ${
									errors.email && "form__input_error"
								}`}
								id="email"
								name="email"
								type="email"
								placeholder="E-mail"
								value={values.email}
								disabled={!isEditProfile}
								onChange={handleChange}
								isValid={isValid}
								required
							/>
						</div>

						{isEditProfile ? (
							<div className="profile__buttons">
								{<span className="profile__submit-error">Какая-то ошибка</span>}
								<button
									className="profile__save_button"
									type="submit"
									aria-label="Кнопка сохранить"
									disabled={!isValid}
								>
									Сохранить
								</button>
							</div>
						) : (
							<div className="profile__buttons">
								<button
									type="button"
									className="profile__edit_button"
									onClick={handleClickEditProfile}
									aria-label="Редактировать профиль"
								>
									Редактировать
								</button>
								<Link className="profile__logout_button" to="/">
									Выйти из аккаунта
								</Link>
							</div>
						)}
					</form>
				</section>
			</main>
		</>
	);
}

export default Profile;
