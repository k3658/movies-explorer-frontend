import "./AuthForm.css";

import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

function AuthForm({
	title,
	name,
	textButton,
	children,
	onSubmit,
	isLoading,
	isLogin,
}) {
	const { pathname } = useLocation();
	const [isValid, setIsValid] = useState(false);
	const authFormRef = useRef();

	useEffect(() => {
		setIsValid(authFormRef.current.checkValidity());
	}, [children]);

	return (
		<section className="auth">
			<h2 className="auth__title">{title}</h2>
			<div className="auth__container">
				<form
					ref={authFormRef}
					className="form"
					name={`form-${name}`}
					onSubmit={onSubmit}
					noValidate
				>
					{children}
					<button
						className={`${
							isValid ? "form__button" : "form__button form__button_disabled"
						} ${isLogin ? "form__button_signin" : "form__button_signup"}`}
						disabled={!isValid}
						aria-label={` ${textButton || "Войти"}`}
						type="submit"
					>
						{isLoading ? "Авторизация..." : textButton || "Войти"}
					</button>
					{pathname === "/signup" ? (
						<div className="auth__login">
							<p className="auth__login_text">Уже зарегистрированы?</p>
							<Link to="/signin" className="auth__login_link">
								Войти
							</Link>
						</div>
					) : (
						<div className="auth__signup">
							<p className="auth__signup_text">Ещё не зарегистрированы?</p>
							<Link to="/signup" className="auth__signup_link">
								Регистрация
							</Link>
						</div>
					)}
				</form>
			</div>
		</section>
	);
}

export default AuthForm;
