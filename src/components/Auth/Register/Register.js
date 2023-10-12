import React, { useEffect } from "react";

import AuthForm from "../AuthForm/AuthForm";
import FormValidator from "../../../utils/FormValidator";

function Register({ onRegister, isLoading }) {
	const { values, handleChange, errors, isValid, setValues, resetForm } =
		FormValidator({});

	function handleSubmit(e) {
		e.preventDefault();

		onRegister({
			name: values.name,
			email: values.email,
			password: values.password,
		});
	}

	useEffect(() => {
		resetForm();
	}, [onRegister]);

	return (
		<>
			<AuthForm
				name="signup"
				title="Добро пожаловать!"
				textButton="Зарегистрироваться"
				onSubmit={handleSubmit}
				isLoading={isLoading}
			>
				<label className="form__input_label">Имя</label>
				<input
					className={`form__input form__input_field_name ${
						errors.name && "form__input_error"
					}`}
					id="input-name"
					name="name"
					type="name"
					minLength="3"
					maxLength="40"
					onChange={handleChange}
					value={values.name || ""}
					required
				/>
				<span className="form__error" id="input-name-error">
					{errors.name}
				</span>

				<label className="form__input_label">E-mail</label>
				<input
					className={`form__input form__input_field_email ${
						errors.email && "form__input_error"
					}`}
					id="input-email"
					name="email"
					type="email"
					minLength="3"
					maxLength="40"
					onChange={handleChange}
					value={values.email || ""}
					required
				/>
				<span className="form__error" id="input-email-error">
					{errors.email}
				</span>

				<label className="form__input_label">Пароль</label>
				<input
					className={`form__input form__input_field_password ${
						errors.password && "form__input_error"
					}`}
					id="input-password"
					name="password"
					type="password"
					minLength="6"
					maxLength="40"
					onChange={handleChange}
					value={values.password || ""}
					required
				/>
				<span className="form__error" id="input-password-error">
					{errors.password}
				</span>
			</AuthForm>
		</>
	);
}

export default Register;
