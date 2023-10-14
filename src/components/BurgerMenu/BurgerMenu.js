import "./BurgerMenu.css";

import icon from "../../images/icon.svg";
import icon_landing from "../../images/icon_landing.svg";

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { findScreenSize } from "../../utils/constants";

function BurgerMenu({ isLoggedIn }) {
	const { pathname } = useLocation();

	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [isMobile, setIsMobile] = useState(findScreenSize());

	function handleToggleMenu() {
		setIsMenuOpened(!isMenuOpened);
	}

	function handleCloseMenu() {
		handleToggleMenu();
	}

	return (
		<section className="burger-menu">
			<>
				{isLoggedIn && isMobile && (
					<label className="burger-menu__nav-button">
						<input
							className="burger-menu__nav-switcher"
							type="checkbox"
							onClick={handleToggleMenu}
						/>
						<span className="burger-menu__nav-button-transition" />
						<span className="burger-menu__nav-button-transition" />
						<span className="burger-menu__nav-button-transition" />
						<span className="burger-menu__nav-button-transition" />
					</label>
				)}
				<div
					className={`burger-menu__container ${
						isMenuOpened ? "burger-menu__container-active" : ""
					}`}
				>
					{isLoggedIn && isMobile ? (
						<nav className="burger-menu__nav-container">
							<div className="burger-menu__nav-links">
								<NavLink
									to="/"
									className={({ isActive }) =>
										`burger-menu__nav-link link ${
											isActive ? "burger-menu__nav-link-active" : ""
										}`
									}
									onClick={handleCloseMenu}
								>
									Главная
								</NavLink>
								<NavLink
									to="/movies"
									className={({ isActive }) =>
										`burger-menu__nav-link link ${
											isActive ? "burger-menu__nav-link-active" : ""
										}`
									}
									onClick={handleCloseMenu}
								>
									Фильмы
								</NavLink>
								<NavLink
									to="/saved-movies"
									className={({ isActive }) =>
										`burger-menu__nav-link link ${
											isActive ? "burger-menu__nav-link-active" : ""
										}`
									}
									onClick={handleCloseMenu}
								>
									Сохраненные фильмы
								</NavLink>
							</div>
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									`burger-menu__nav-profile link ${
										isActive ? "burger-menu__nav-link-active" : ""
									}`
								}
								onClick={handleCloseMenu}
							>
								Аккаунт
								<img
									src={icon}
									className="burger-menu__nav-icon"
									alt="Иконка профиля"
								/>
							</NavLink>
						</nav>
					) : (
						<nav className="burger-menu__nav-container">
							<div className="burger-menu__nav-links">
								<NavLink
									to="/movies"
									className={({ isActive }) =>
										`burger-menu__nav-link link ${
											isActive ? "burger-menu__nav-link-active" : ""
										}`
									}
								>
									Фильмы
								</NavLink>
								<NavLink
									to="/saved-movies"
									className={({ isActive }) =>
										`burger-menu__nav-link link ${
											isActive ? "burger-menu__nav-link-active" : ""
										}`
									}
								>
									Сохраненные фильмы
								</NavLink>
							</div>
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									`burger-menu__nav_profile link ${
										isActive ? "burger-menu__nav_link_active" : ""
									}`
								}
							>
								Аккаунт
								{pathname === "/" ? (
									<img
										src={icon_landing}
										className="burger-menu__nav-icon-landing"
										alt="Иконка профиля"
									/>
								) : (
									<img
										src={icon}
										className="burger-menu__nav-icon"
										alt="Иконка профиля"
									/>
								)}
							</NavLink>
						</nav>
					)}
				</div>
			</>
		</section>
	);
}

export default BurgerMenu;
