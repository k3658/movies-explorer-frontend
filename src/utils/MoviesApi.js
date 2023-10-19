import { URL_BEATFILM_MOVIES_API } from "./constants";

const moviesApiConfig = {
	baseUrl: URL_BEATFILM_MOVIES_API,
	headers: {
		"Content-Type": "application/json",
	},
};

class MoviesApi {
	constructor(moviesApiConfig) {
		this._baseUrl = moviesApiConfig.baseUrl;
		this._headers = moviesApiConfig.headers;
	}

	_statusCheck(res) {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(`Ошибка: ${res.status}`);
	}

	getMovies() {
		return fetch(`${this._baseUrl}/beatfilm-movies`, {
			headers: this._headers,
		}).then(this._statusCheck);
	}
}

const moviesApi = new MoviesApi(moviesApiConfig);
export default moviesApi;
