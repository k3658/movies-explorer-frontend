import { URL_BASE_API } from "./constants";

const mainApiConfig = {
	baseUrl: URL_BASE_API,
	headers: {
		"Content-Type": "application/json",
	},
};

class MainApi {
	constructor(apiConfig) {
		this._baseUrl = apiConfig.baseUrl;
		this._headers = apiConfig.headers;
	}

	_statusCheck(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}

	// USER RELATED
	getUserData() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
	}

	patchUserData(name, email) {
		return fetch(`${this._baseUrl}/users/me`, {
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
		return fetch(`${this._baseUrl}/movies`, {
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
		return fetch(`${this._baseUrl}/movies`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
	}

	deleteSavedMovies(cardId) {
		return fetch(`${this._baseUrl}/movies/${cardId}`, {
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
