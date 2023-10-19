import "../../index.css";

import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// API
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";

// COMPONENTS
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import Profile from "../Auth/Profile/Profile";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
	// auth
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();

	// ux/ui
	const [isLoading, setIsLoading] = useState(false);

	// user info
	const [currentUser, setCurrentUser] = useState({});

	// movies
	const [savedMovies, setSavedMovies] = useState([]);

	// AUTHORIZATION RELATED
	function handleRegister({ name, email, password }) {
		setIsLoading(true);
		auth
			.register({ name, email, password })
			.then(() => {
				navigate("/signin", { replace: true });
			})
			.catch((err) => {
				console.error(`Ошибка: ${err}`);
			})
			.finally(() => setIsLoading(false));
	}

	function handleLogin({ email, password }) {
		setIsLoading(true);
		auth
			.authorize({ email, password })
			.then((data) => {
				localStorage.setItem("jwt", data.token);
				setLoggedIn(true);
				navigate("/movies", { replace: true });
			})
			.catch((err) => {
				console.error(`Ошибка: ${err}`);
			})
			.finally(() => setIsLoading(false));
	}

	function handleLogout() {
		setCurrentUser({});
		setSavedMovies([]);
		localStorage.clear();
		setLoggedIn(false);
		navigate("/", { replace: true });
	}

	function handleTokenCheck() {
		const jwt = localStorage.getItem("jwt");

		if (jwt) {
			auth
				.checkToken(jwt)
				.then(() => {
					setLoggedIn(true);
					navigate("/movies", { replace: true });
				})
				.catch((err) => {
					console.error(`Ошибка: ${err}`);
				});
		}
	}

	useEffect(() => {
		handleTokenCheck();
	}, []);

	// USER RELATED
	function handleUpdateUserData({ name, email }) {
		mainApi
			.patchUserData(name, email)
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((err) => {
				console.error(`Ошибка: ${err}`);
			});
	}

	// MOVIES RELATED
	function handleSaveMovie(
		{
			country,
			director,
			duration,
			year,
			description,
			image,
			trailerLink,
			id,
			nameRU,
			nameEN,
		},
		evt,
		handleSaveButtonClick
	) {
		mainApi
			.saveMovie({
				country,
				director,
				duration,
				year,
				description,
				image,
				trailerLink,
				id,
				nameRU,
				nameEN,
			})
			.then((savedMovie) => {
				setSavedMovies([...savedMovies, savedMovie]);
				handleSaveButtonClick(evt);
			})
			.catch((err) => {
				console.error(`Ошибка: ${err}`);
			});
	}

	function handleDeleteMovie(movie, evt, handleSaveButtonClick) {
		const savedMovie = savedMovies.find(({ movieId }) => movieId === movie.id);

		if (movie._id) {
			mainApi
				.deleteSavedMovies(movie._id)
				.then(() => {
					setSavedMovies(
						...[(state) => state.filter((c) => c._id !== movie._id)]
					);
					handleSaveButtonClick(evt);
				})
				.catch((err) => {
					console.error(`Ошибка: ${err}`);
				});
		} else {
			mainApi
				.deleteSavedMovies(savedMovie._id)
				.then(() => {
					setSavedMovies((state) =>
						state.filter((c) => c._id !== savedMovie._id)
					);
					handleSaveButtonClick(evt);
				})
				.catch((err) => {
					console.error(`Ошибка: ${err}`);
				});
		}
	}

	// LOADS USER DATA AND SAVED MOVIES FROM SERVER
	useEffect(() => {
		if (loggedIn) {
			Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
				.then(([currentUser, savedMovies]) => {
					setCurrentUser(currentUser);
					setSavedMovies(savedMovies);
				})
				.catch((err) => {
					console.error(`Ошибка: ${err}`);
				});
		}
	}, [loggedIn]);

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<Header loggedIn={loggedIn} />
			<Routes>
				<Route
					path="/signup"
					element={
						<Register onRegister={handleRegister} isLoading={isLoading} />
					}
				/>
				<Route
					path="/signin"
					element={<Login onLogin={handleLogin} isLoading={isLoading} />}
				/>

				<Route
					path="/profile"
					element={
						<ProtectedRouteElement
							element={Profile}
							loggedIn={loggedIn}
							handleUpdateUserData={handleUpdateUserData}
							onLogout={handleLogout}
						/>
					}
				/>
				<Route
					path="/"
					element={<ProtectedRouteElement element={Main} loggedIn={loggedIn} />}
				/>
				<Route
					path="/movies"
					element={
						<ProtectedRouteElement
							element={Movies}
							loggedIn={loggedIn}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
							savedMovies={savedMovies}
							onSave={handleSaveMovie}
							onDelete={handleDeleteMovie}
						/>
					}
				/>
				<Route
					path="/saved-movies"
					element={
						<ProtectedRouteElement
							element={SavedMovies}
							loggedIn={loggedIn}
							savedMovies={savedMovies}
							onDelete={handleDeleteMovie}
						/>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</CurrentUserContext.Provider>
	);
}

export default App;
