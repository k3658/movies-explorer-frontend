import { URL_BASE_API } from "./constants";

const mainApiConfig = {
	baseUrl: URL_BASE_API,
	headers: {
		"Content-Type": "application/json",
	},
};

class MainApi {
	constructor(mainApiConfig) {
		this._baseUrl = mainApiConfig.baseUrl;
		this._headers = mainApiConfig.headers;
	}

	_statusCheck(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}

	// USER RELATED
	getUserData() {
		return fetch(`${URL_BASE_API}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
	}

	patchUserData(name, email) {
		return fetch(`${URL_BASE_API}/users/me`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
			body: JSON.stringify({
				name,
				email,
			}),
		});
	}

	// MOVIES RELATED
	saveMovie({
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
	}) {
		return fetch(`${URL_BASE_API}/movies`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
			body: JSON.stringify({
				country,
				director,
				duration,
				year,
				description,
				image: `https://api.nomoreparties.co${image.url}`,
				trailerLink,
				thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
				movieId: id,
				nameRU,
				nameEN,
			}),
		});
	}

	getSavedMovies() {
		return fetch(`${URL_BASE_API}/movies`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
	}

	deleteSavedMovies(cardId) {
		return fetch(`${URL_BASE_API}/movies/${cardId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
	}
}

const mainApi = new MainApi(mainApiConfig);
export default mainApi;
