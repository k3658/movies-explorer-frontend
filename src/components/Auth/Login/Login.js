import React, { useEffect } from "react";

import AuthForm from "../AuthForm/AuthForm";
import FormValidator from "../../../utils/FormValidator";

function Login({ onLogin, isLoading }) {
	const { values, handleChange, errors, isValid, setValues, resetForm } =
		FormValidator({});

	function handleSubmit(e) {
		e.preventDefault();

		onLogin({
			email: values.email,
			password: values.password,
		});
	}

	useEffect(() => {
		resetForm();
	}, [onLogin]);

	return (
		<>
			<AuthForm
				name="login"
				title="Рады видеть!"
				textButton="Войти"
				isLogin={true}
				onSubmit={handleSubmit}
				isLoading={isLoading}
			>
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

export default Login;
