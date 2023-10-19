import "./Header.css";
import logo from "../../images/logo.svg";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn }) {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === "/" ||
			pathname === "/movies" ||
			pathname === "/saved-movies" ||
			pathname === "/profile" ? (
				<header
					className={`header ${pathname === "/" ? "header_landing" : ""}`}
				>
					<Link to="/" className="header__logo link">
						<img src={logo} alt="Логотип приложения" />
					</Link>
					{loggedIn ? (
						<BurgerMenu loggedIn={loggedIn} />
					) : (
						<nav className="header__auth">
							<Link to="/signup" className="header__auth-signup link">
								Регистрация
							</Link>
							<Link to="/signin" className="header__auth-signin link">
								Войти
							</Link>
						</nav>
					)}
				</header>
			) : (
				""
			)}
			{pathname === "/signin" || pathname === "/signup" ? (
				<header className="header-auth">
					<div className="header-auth__container">
						<Link to="/">
							<img
								src={logo}
								className="header-auth__logo link"
								alt="Логотип приложения"
							/>
						</Link>
					</div>
				</header>
			) : (
				""
			)}
		</>
	);
}

export default Header;
