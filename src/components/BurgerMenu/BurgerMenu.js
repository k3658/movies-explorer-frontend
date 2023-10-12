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
					<label className="burger-menu__nav_button">
						<input
							className="burger-menu__nav_switcher"
							type="checkbox"
							onClick={handleToggleMenu}
						/>
						<span className="burger-menu__nav_button_transition" />
						<span className="burger-menu__nav_button_transition" />
						<span className="burger-menu__nav_button_transition" />
						<span className="burger-menu__nav_button_transition" />
					</label>
				)}
				<div
					className={`burger-menu__container ${
						isMenuOpened ? "burger-menu__container_active" : ""
					}`}
				>
					{isLoggedIn && isMobile ? (
						<nav className="burger-menu__nav_container">
							<div className="burger-menu__nav_links">
								<NavLink
									to="/"
									className={({ isActive }) =>
										`burger-menu__nav_link ${
											isActive ? "burger-menu__nav_link_active" : ""
										}`
									}
									onClick={handleCloseMenu}
								>
									Главная
								</NavLink>
								<NavLink
									to="/movies"
									className={({ isActive }) =>
										`burger-menu__nav_link ${
											isActive ? "burger-menu__nav_link_active" : ""
										}`
									}
									onClick={handleCloseMenu}
								>
									Фильмы
								</NavLink>
								<NavLink
									to="/saved-movies"
									className={({ isActive }) =>
										`burger-menu__nav_link ${
											isActive ? "burger-menu__nav_link_active" : ""
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
									`burger-menu__nav_profile ${
										isActive ? "burger-menu__nav_link_active" : ""
									}`
								}
								onClick={handleCloseMenu}
							>
								Аккаунт
								<img
									src={icon}
									className="burger-menu__nav_icon"
									alt="Иконка профиля"
								/>
							</NavLink>
						</nav>
					) : (
						<nav className="burger-menu__nav_container">
							<div className="burger-menu__nav_links">
								<NavLink
									to="/movies"
									className={({ isActive }) =>
										`burger-menu__nav_link ${
											isActive ? "burger-menu__nav_link_active" : ""
										}`
									}
								>
									Фильмы
								</NavLink>
								<NavLink
									to="/saved-movies"
									className={({ isActive }) =>
										`burger-menu__nav_link ${
											isActive ? "burger-menu__nav_link_active" : ""
										}`
									}
								>
									Сохраненные фильмы
								</NavLink>
							</div>
							<NavLink
								to="/profile"
								className={({ isActive }) =>
									`burger-menu__nav_profile ${
										isActive ? "burger-menu__nav_link_active" : ""
									}`
								}
							>
								Аккаунт
								{pathname === "/" ? (
									<img
										src={icon_landing}
										className="burger-menu__nav_icon_landing"
										alt="Иконка профиля"
									/>
								) : (
									<img
										src={icon}
										className="burger-menu__nav_icon"
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
