import "./Header.css";
import logo from "../../images/logo.svg";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn }) {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === "/" ||
			pathname === "/movies" ||
			pathname === "/saved-movies" ||
			pathname === "/profile" ? (
				<header
					className={`header ${pathname === "/" ? "header__landing" : ""}`}
				>
					<Link to="/" className="header__logo">
						<img src={logo} alt="Логотип приложения" />
					</Link>
					{isLoggedIn ? (
						<BurgerMenu isLoggedIn={isLoggedIn} />
					) : (
						<nav className="header__auth_links">
							<Link to="/signup" className="header__auth_signup">
								Регистрация
							</Link>
							<Link to="/signin" className="header__auth_signin">
								Войти
							</Link>
						</nav>
					)}
				</header>
			) : (
				""
			)}
			{pathname === "/signin" || pathname === "/signup" ? (
				<header className="header__auth">
					<Link to="/">
						<img
							src={logo}
							className="header__auth_logo"
							alt="Логотип приложения"
						/>
					</Link>
				</header>
			) : (
				""
			)}
		</>
	);
}

export default Header;
