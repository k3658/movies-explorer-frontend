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
		<main>
			<section className="auth">
				<div className="auth__container">
					<h1
						className={`${
							isLogin ? "auth__title auth__title_signin" : "auth__title"
						}`}
					>
						{title}
					</h1>
					<div className="auth__form-container">
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
									isValid
										? "form__button button"
										: "form__button form__button_disabled"
								} ${isLogin ? "form__button_signin" : "form__button_signup"}`}
								disabled={!isValid}
								aria-label={` ${textButton || "Войти"}`}
								type="submit"
							>
								{isLoading ? "Авторизация..." : textButton || "Войти"}
							</button>
							{pathname === "/signup" ? (
								<div className="auth__login">
									<p className="auth__login-text">Уже зарегистрированы?</p>
									<Link to="/signin" className="auth__login-link link">
										Войти
									</Link>
								</div>
							) : (
								<div className="auth__signup">
									<p className="auth__signup-text">Ещё не зарегистрированы?</p>
									<Link to="/signup" className="auth__signup-link link">
										Регистрация
									</Link>
								</div>
							)}
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}

export default AuthForm;
