import "../../index.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";

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
	// auth not final
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function handleLogin() {
		setIsLoggedIn(!isLoggedIn);
	}

	function handleRegister() {
		setIsLoggedIn(!isLoggedIn);
	}

	//ux/ui
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
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
				<Route path="/profile" element={<Profile />} />

				{/* <Route
					path="/"
					element={
						<ProtectedRouteElement element={<Main />} isLoggedIn={isLoggedIn} />
					}
				/> */}

				<Route path="/" element={<Main />} isLoggedIn={isLoggedIn} />

				<Route path="/movies" element={<Movies />} />
				<Route path="/saved-movies" element={<SavedMovies />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
