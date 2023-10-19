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

	_getHeaders() {
		const token = localStorage.getItem("jwt");
		return {
			Authorization: `Bearer ${token}`,
			...this._headers,
		};
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
			headers: this._getHeaders(),
		}).then(this._statusCheck);
	}

	patchUserData(name, email) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: this._getHeaders(),
			body: JSON.stringify({
				name,
				email,
			}),
		}).then(this._statusCheck);
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
			headers: this._getHeaders(),
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
		}).then(this._statusCheck);
	}

	getSavedMovies() {
		return fetch(`${this._baseUrl}/movies`, {
			headers: this._getHeaders(),
		}).then(this._statusCheck);
	}

	deleteSavedMovies(cardId) {
		return fetch(`${this._baseUrl}/movies/${cardId}`, {
			method: "DELETE",
			headers: this._getHeaders(),
		}).then(this._statusCheck);
	}
}

const mainApi = new MainApi(mainApiConfig);
export default mainApi;
