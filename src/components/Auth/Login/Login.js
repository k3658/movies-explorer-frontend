import React, { useEffect } from "react";

import AuthForm from "../AuthForm/AuthForm";
import useFormValidator from "../../../hooks/useFormValidator";

function Login({ onLogin, isLoading }) {
	const { values, handleChange, errors, isValid, setValues, resetForm } =
		useFormValidator({});

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
				<label className="form__input-label">E-mail</label>
				<input
					className={`form__input form__input_field_email ${
						errors.email && "form__input_error"
					}`}
					id="input-email"
					name="email"
					type="email"
					placeholder="E-mail"
					minLength="3"
					maxLength="30"
					onChange={handleChange}
					value={values.email || ""}
					required
				/>
				<span className="form__error" id="input-email-error">
					{errors.email}
				</span>

				<label className="form__input-label">Пароль</label>
				<input
					className={`form__input form__input_field_password ${
						errors.password && "form__input_error"
					}`}
					id="input-password"
					name="password"
					type="password"
					placeholder="Пароль"
					minLength="8"
					maxLength="30"
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
